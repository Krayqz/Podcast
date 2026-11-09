// Bewertung von Freitext-Antworten.
// Es zählt nicht der genaue Wortlaut, sondern ob die Kernpunkte der Musterlösung vorkommen.
// Jeder Kernpunkt hat mehrere erlaubte Formulierungen (Wortstämme). Tippfehler, Umlaute,
// Groß- und Kleinschreibung und Zahlwörter werden toleriert.
//
// Schreibweise in den Daten:
//   "kontroll"          Wortstamm, darf auch mitten im Wort stehen (Medienkontrolle)
//   "kein krieg"        alle Stämme müssen vorkommen, egal in welcher Reihenfolge
//   "=nach"             genau dieses Wort
//   "^personengesell"   Wort muss so anfangen
//   "a|b>c>d"           Reihenfolge: a oder b vor c vor d (im Kreis, wie bei Konjunkturphasen)
//   "@kompromiss"       Anker: Der Kernpunkt wird nur in dem Teil der Antwort gesucht,
//                       der zu diesem Begriff gehört (für Fragen nach Unterschieden)
//   "!stamm"            Widerspruch: kommt das im selben Teil vor, zählt der Kernpunkt nicht
//   "*Text"             Pflichtpunkt: ohne ihn gibt es nie die volle Punktzahl
(function(root){
  const NUM={null:"0",eins:"1",zwei:"2",drei:"3",vier:"4",fuenf:"5",sechs:"6",sieben:"7",acht:"8",neun:"9",zehn:"10",
    elf:"11",zwoelf:"12",dreizehn:"13",vierzehn:"14",fuenfzehn:"15",sechzehn:"16",siebzehn:"17",achtzehn:"18",
    zwanzig:"20",dreissig:"30",vierzig:"40",fuenfzig:"50",sechzig:"60",siebzig:"70",hundert:"100",tausend:"1000"};

  function prep(s){
    return String(s||"").toLowerCase()
      .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
      .replace(/[àáâ]/g,"a").replace(/[èéê]/g,"e").replace(/[ìíî]/g,"i").replace(/[òóô]/g,"o").replace(/[ùúû]/g,"u")
      .replace(/(\d)[.,'’](?=\d)/g,"$1");
  }
  function words(s){
    s=s.replace(/(\d)([a-z])/g,"$1 $2").replace(/([a-z])(\d)/g,"$1 $2").replace(/[^a-z0-9]+/g," ").trim();
    return s ? s.split(" ").map(w=>NUM[w]||w) : [];
  }
  const norm=s=>words(prep(s));

  function lev(a,b){
    const m=a.length,n=b.length; if(!m) return n; if(!n) return m;
    let prev=Array.from({length:n+1},(_,j)=>j), cur=new Array(n+1);
    for(let i=1;i<=m;i++){
      cur[0]=i;
      for(let j=1;j<=n;j++) cur[j]=Math.min(prev[j]+1,cur[j-1]+1,prev[j-1]+(a[i-1]===b[j-1]?0:1));
      [prev,cur]=[cur,prev];
    }
    return prev[n];
  }
  function fuzzyPrefix(s,t){
    const tol=s.length>=10?2:1;
    for(let L=s.length-tol;L<=s.length+tol;L++){
      if(L<1||L>t.length) continue;
      if(lev(s,t.slice(0,L))<=tol) return true;
    }
    return false;
  }
  function tokHit(stem,t,fuzzy=true){
    if(stem[0]==="=") return t===stem.slice(1);
    if(stem[0]==="^"){const s=stem.slice(1); return t.startsWith(s)||(fuzzy&&s.length>=6&&fuzzyPrefix(s,t))}
    if(/^\d+$/.test(stem)) return t===stem;
    if(stem.length<=3) return t.startsWith(stem);
    if(t.includes(stem)) return true;
    return fuzzy && stem.length>=6 && fuzzyPrefix(stem,t);
  }
  // Zahlwörter in den Daten genauso umwandeln wie in der Antwort
  const fixAlt=a=>a.includes(">")?a:a.split(" ").map(w=>{const p=/^[=^]/.test(w)?w[0]:"", b=w.slice(p.length); return p+(NUM[b]||b)}).join(" ");
  function altHit(a,toks){
    if(a.includes(">")){
      const st=a.split(">").map(s=>s.split("|"));
      const idx=st.map(ss=>toks.findIndex(t=>ss.some(s=>tokHit(s,t))));
      if(idx.some(i=>i<0)) return false;
      const order=idx.map((v,k)=>[v,k]).sort((x,y)=>x[0]-y[0]).map(x=>x[1]);
      return order.every((v,k)=>k===0||(v-order[k-1]+st.length)%st.length===1);
    }
    return a.split(" ").every(s=>toks.some(t=>tokHit(s,t)));
  }

  function parse(spec){
    const groups=[];
    const keys=spec.k.map(k=>{
      let label=k[0], req=false;
      if(label[0]==="*"){req=true; label=label.slice(1)}
      const anc=[],alts=[],neg=[];
      k.slice(1).forEach(e=>{ if(e[0]==="@") anc.push(e.slice(1)); else if(e[0]==="!") neg.push(fixAlt(e.slice(1))); else alts.push(fixAlt(e)) });
      let g=-1;
      if(anc.length){ const id=anc.join("|"); g=groups.findIndex(x=>x.id===id); if(g<0){groups.push({id,stems:anc}); g=groups.length-1} }
      return {label,req,alts,neg,g};
    });
    return {keys,groups};
  }

  // Teilt die Antwort in Abschnitte pro Anker-Begriff auf
  function segments(answer,groups){
    const segs=groups.map(()=>[]); let last=-1;
    prep(answer).split(/[.!?;:\n•]+|\s[-–]\s/).forEach(sent=>{
      const toks=words(sent); if(!toks.length) return;
      const marks=[];
      toks.forEach((t,i)=>{
        let g=groups.findIndex(gr=>gr.stems.some(s=>tokHit(s,t,false)));       // erst genaue Treffer,
        if(g<0) g=groups.findIndex(gr=>gr.stems.some(s=>tokHit(s,t,true)));    // dann mit Tippfehlern
        if(g>=0) marks.push([i,g]);
      });
      if(!marks.length){ if(last>=0) segs[last].push(...toks); return }
      const isMark=i=>marks.some(m=>m[0]===i);
      if(new Set(marks.map(m=>m[1])).size===1){ segs[marks[0][1]].push(...toks.filter((_,i)=>!isMark(i))); last=marks[0][1]; return }
      let best=-1;
      marks.forEach(([i,g],m)=>{
        const start=m===0?0:i+1, end=m+1<marks.length?marks[m+1][0]:toks.length;
        let n=0; for(let j=start;j<end;j++) if(!isMark(j)){segs[g].push(toks[j]); n++}
        if(n>best){best=n; last=g}   // folgende Sätze ohne Begriff gehören zum längsten Abschnitt
      });
    });
    return segs;
  }

  function grade(item,answer){
    const spec=item[2], {keys,groups}=parse(spec);
    const echo=new Set(norm(item[0]));            // Wörter aus der Frage zählen nicht als Treffer
    const all=norm(answer).filter(t=>!echo.has(t));
    const segs=groups.length?segments(answer,groups).map(s=>s.filter(t=>!echo.has(t))):[];
    const hits=keys.map(k=>{
      const toks=k.g>=0?segs[k.g]:all;
      return k.alts.some(a=>altHit(a,toks)) && !k.neg.some(a=>altHit(a,toks));
    });
    const need=Math.min(spec.need||keys.length,keys.length);
    let got=Math.min(hits.filter(Boolean).length,need);
    if(keys.some((k,i)=>k.req&&!hits[i])) got=Math.min(got,need-1);
    return {hits,labels:keys.map(k=>k.label),req:keys.map(k=>k.req),got,need,frac:got/need,ok:got>=need};
  }

  const api={grade,norm};
  if(typeof module!=="undefined"&&module.exports) module.exports=api; else root.GRADER=api;
})(typeof window!=="undefined"?window:this);
