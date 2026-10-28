// Quizfragen pro Folge. Format: [Frage, richtige Antwort, [drei falsche Antworten], Erklärung]
// Die Komplett-Folgen nutzen eine zufällige Auswahl aus allen Fragen ihres Podcasts.
window.QUIZ = {
  "gk-1": [
    ["Wie heißt das System, bei dem du im Betrieb und in der Berufsschule ausgebildet wirst?", "Duales System", ["Zentrales System", "Föderales System", "Modulares System"], "Die Ausbildung findet an zwei Lernorten statt: im Betrieb (Praxis) und in der Berufsschule (Theorie)."],
    ["Welches Gesetz regelt Rechte und Pflichten in der Berufsausbildung?", "Berufsbildungsgesetz (BBiG)", ["Bürgerliches Gesetzbuch (BGB)", "Betriebsverfassungsgesetz", "Grundgesetz"], "Das BBiG regelt zum Beispiel Probezeit, Ausbildungsvergütung und Kündigung in der Ausbildung."],
    ["Wie viele Zweige hat die gesetzliche Sozialversicherung?", "Fünf", ["Drei", "Vier", "Sechs"], "Kranken-, Pflege-, Renten-, Arbeitslosen- und Unfallversicherung."],
    ["Welche Sozialversicherung bezahlt der Arbeitgeber allein?", "Unfallversicherung", ["Rentenversicherung", "Krankenversicherung", "Arbeitslosenversicherung"], "Die Beiträge zur gesetzlichen Unfallversicherung zahlt der Arbeitgeber an die Berufsgenossenschaft."],
    ["Was beschreibt der Generationenvertrag in der Rentenversicherung?", "Die heutigen Beschäftigten zahlen mit ihren Beiträgen die Renten der heutigen Rentner.", ["Jeder spart seine eigene Rente auf einem Konto an.", "Der Staat zahlt alle Renten allein aus Steuern.", "Kinder müssen die Rente ihrer Eltern direkt bezahlen."], "Das nennt man Umlageverfahren. Weil es immer mehr Ältere und weniger Junge gibt, gerät es unter Druck."],
    ["Was bedeutet demografischer Wandel in Deutschland vor allem?", "Die Gesellschaft wird älter, weil wenige Kinder geboren werden und die Lebenserwartung steigt.", ["Die Bevölkerung wird jedes Jahr jünger.", "Es ziehen keine Menschen mehr nach Deutschland.", "Die Zahl der Rentner sinkt stark."], "Niedrige Geburtenrate und längere Lebenszeit verändern den Altersaufbau der Bevölkerung."],
    ["Ein Azubi ist auch Trainer im Fußballverein. Beide Termine fallen auf denselben Abend. Welcher Konflikt ist das?", "Interrollenkonflikt", ["Intrarollenkonflikt", "Tarifkonflikt", "Generationenkonflikt"], "Inter heißt zwischen: Der Konflikt besteht zwischen zwei verschiedenen Rollen derselben Person."],
    ["Warum nennt man die Medien oft die vierte Gewalt?", "Sie informieren die Öffentlichkeit und kontrollieren und kritisieren die Politik.", ["Sie dürfen Gesetze beschließen.", "Sie sprechen Urteile vor Gericht.", "Sie werden vom Bundestag gewählt."], "Neben Legislative, Exekutive und Judikative üben freie Medien eine Kontrollfunktion aus."]
  ],
  "gk-2": [
    ["Ab welchem Alter darfst du bei der Bundestagswahl wählen?", "18 Jahre", ["16 Jahre", "17 Jahre", "21 Jahre"], "Für die Bundestagswahl liegt das Wahlalter bei 18 Jahren."],
    ["Welche Stimme entscheidet bei der Bundestagswahl über die Verteilung der Sitze auf die Parteien?", "Die Zweitstimme", ["Die Erststimme", "Beide Stimmen gleich", "Die Stimme des Bundespräsidenten"], "Mit der Erststimme wählt man eine Person im Wahlkreis, mit der Zweitstimme eine Partei."],
    ["Wie viel Prozent der Zweitstimmen braucht eine Partei in der Regel, um in den Bundestag zu kommen?", "5 Prozent", ["3 Prozent", "10 Prozent", "1 Prozent"], "Die Fünf-Prozent-Hürde soll eine Zersplitterung des Parlaments verhindern."],
    ["Wer wählt den Bundeskanzler oder die Bundeskanzlerin?", "Der Bundestag", ["Das Volk direkt", "Der Bundesrat", "Das Bundesverfassungsgericht"], "Der Bundespräsident schlägt eine Person vor, der Bundestag wählt sie."],
    ["Welche beiden Organe wirken bei Bundesgesetzen mit?", "Bundestag und Bundesrat", ["Bundespräsident und Bundesverfassungsgericht", "Bundesrat und Landtage", "Bundesregierung und Gewerkschaften"], "Der Bundestag beschließt Gesetze, der Bundesrat vertritt die Länder und wirkt mit."],
    ["In welchen Artikeln des Grundgesetzes stehen die Grundrechte?", "Artikel 1 bis 19", ["Artikel 20 bis 37", "Artikel 50 bis 60", "Artikel 100 bis 120"], "Artikel 1 beginnt mit: Die Würde des Menschen ist unantastbar."],
    ["Welcher Artikel der Weimarer Verfassung gab dem Reichspräsidenten das Recht auf Notverordnungen?", "Artikel 48", ["Artikel 1", "Artikel 20", "Artikel 146"], "Mit Artikel 48 konnte am Parlament vorbei regiert werden. Das schwächte die Demokratie."],
    ["An welchem Tag ist der Tag der Deutschen Einheit?", "3. Oktober", ["9. November", "23. Mai", "17. Juni"], "Am 3. Oktober 1990 trat die DDR der Bundesrepublik bei. Die Mauer fiel schon am 9. November 1989."],
    ["Wer darf eine Partei in Deutschland verbieten?", "Das Bundesverfassungsgericht", ["Der Bundestag", "Die Bundesregierung", "Der Verfassungsschutz"], "Nur das Bundesverfassungsgericht kann eine Partei für verfassungswidrig erklären."],
    ["Was ist eine Petition?", "Eine Bitte oder Beschwerde, die man an ein Parlament oder eine Behörde richtet", ["Eine Wahl für den Bürgermeister", "Ein Gesetz, das der Bundesrat beschließt", "Eine Demonstration ohne Anmeldung"], "Das Petitionsrecht steht in Artikel 17 des Grundgesetzes und ist eine Form der Beteiligung."]
  ],
  "gk-3": [
    ["Wie viele Mitgliedstaaten hat die Europäische Union?", "27", ["25", "28", "30"], "Seit dem Austritt Großbritanniens 2020 hat die EU 27 Mitglieder."],
    ["Welches EU-Organ wird direkt von den Bürgerinnen und Bürgern gewählt?", "Das Europäische Parlament", ["Die Europäische Kommission", "Der Rat der EU", "Der Europäische Gerichtshof"], "Die Europawahl findet alle fünf Jahre statt."],
    ["Welches EU-Organ schlägt neue Gesetze vor?", "Die Europäische Kommission", ["Das Europäische Parlament", "Der Europäische Gerichtshof", "Die Europäische Zentralbank"], "Die Kommission hat das Initiativrecht. Parlament und Rat beschließen dann gemeinsam."],
    ["Was gehört NICHT zu den vier Grundfreiheiten des EU-Binnenmarkts?", "Freier Zugang zu Sozialleistungen ohne Bedingungen", ["Freier Warenverkehr", "Freier Personenverkehr", "Freier Kapitalverkehr"], "Die vier Grundfreiheiten sind Waren, Personen, Dienstleistungen und Kapital."],
    ["Welche drei Dimensionen hat Nachhaltigkeit?", "Ökologisch, ökonomisch und sozial", ["Lokal, national und global", "Politisch, rechtlich und kulturell", "Kurz-, mittel- und langfristig"], "Nachhaltig ist, was Umwelt, Wirtschaft und Gesellschaft gleichermaßen berücksichtigt."],
    ["Wie viele ständige Mitglieder mit Vetorecht hat der UN-Sicherheitsrat?", "Fünf", ["Drei", "Zehn", "Fünfzehn"], "USA, Russland, China, Großbritannien und Frankreich. Insgesamt hat der Rat 15 Mitglieder."],
    ["Welcher Artikel des NATO-Vertrags regelt den Bündnisfall?", "Artikel 5", ["Artikel 1", "Artikel 10", "Artikel 51"], "Ein Angriff auf ein Mitglied gilt als Angriff auf alle."],
    ["Was versteht man unter Globalisierung?", "Die weltweite Verflechtung von Wirtschaft, Politik und Kultur", ["Die Abschottung eines Landes vom Weltmarkt", "Die Gründung der Europäischen Union", "Die Verlagerung aller Firmen aufs Land"], "Handel, Kommunikation und Verkehr verbinden Länder immer enger."],
    ["Was ist der Grundgedanke der Entwicklungszusammenarbeit?", "Hilfe zur Selbsthilfe", ["Dauerhafte Versorgung mit Spenden", "Militärische Unterstützung", "Übernahme der Regierung durch Geberländer"], "Partnerländer sollen ihre Entwicklung selbst tragen können."],
    ["Wie viele Ziele für nachhaltige Entwicklung hat die Agenda 2030 der Vereinten Nationen?", "17", ["5", "10", "27"], "Die 17 Ziele (SDGs) reichen von „keine Armut“ bis „Klimaschutz“."]
  ],
  "gk-b": [
    ["Wie viele Anforderungsbereiche gibt es bei Prüfungsaufgaben?", "Drei", ["Zwei", "Vier", "Fünf"], "AFB I Wiedergeben, AFB II Anwenden und Erklären, AFB III Beurteilen und Bewerten."],
    ["Zu welchem Anforderungsbereich gehört der Operator „nennen“?", "Anforderungsbereich I", ["Anforderungsbereich II", "Anforderungsbereich III", "Zu keinem"], "Nennen heißt: Informationen ohne Erklärung aufzählen. Das ist reine Wiedergabe."],
    ["Zu welchem Anforderungsbereich gehört „erläutern“?", "Anforderungsbereich II", ["Anforderungsbereich I", "Anforderungsbereich III", "Zu keinem"], "Beim Erläutern erklärst du Zusammenhänge und machst sie mit Beispielen verständlich."],
    ["Welcher Operator gehört zu Anforderungsbereich III?", "Bewerten", ["Beschreiben", "Nennen", "Wiedergeben"], "Im AFB III geht es um ein eigenes, begründetes Urteil."],
    ["Was ist der Unterschied zwischen „beurteilen“ und „bewerten“?", "Beim Beurteilen urteilst du nach Sachkriterien, beim Bewerten nach eigenen Wertmaßstäben.", ["Es gibt keinen Unterschied.", "Beurteilen ist kürzer als Bewerten.", "Beim Bewerten brauchst du keine Begründung."], "Sachurteil gegen Werturteil. Begründen musst du beides."]
  ],
  "wk-1": [
    ["Wie lang darf die Probezeit in der Ausbildung höchstens sein?", "Vier Monate", ["Ein Monat", "Sechs Monate", "Ein Jahr"], "Die Probezeit dauert mindestens einen und höchstens vier Monate."],
    ["Wie kann ein Ausbildungsverhältnis in der Probezeit gekündigt werden?", "Jederzeit ohne Frist, aber schriftlich", ["Nur mit vier Wochen Frist", "Nur mündlich", "Gar nicht"], "In der Probezeit können beide Seiten jederzeit ohne Kündigungsfrist kündigen."],
    ["In welcher Form muss eine Kündigung eines Arbeitsvertrags erfolgen?", "Schriftlich mit Unterschrift auf Papier", ["Per WhatsApp", "Per E-Mail", "Mündlich reicht"], "Eine Kündigung per E-Mail oder Messenger ist unwirksam."],
    ["Wie lang ist die gesetzliche Grundkündigungsfrist für Arbeitnehmer?", "Vier Wochen zum 15. oder zum Monatsende", ["Zwei Wochen", "Drei Monate", "Eine Woche"], "So steht es in § 622 BGB. Tarif- oder Arbeitsverträge können andere Fristen regeln."],
    ["Wer schließt einen Tarifvertrag ab?", "Gewerkschaft und Arbeitgeberverband oder einzelner Arbeitgeber", ["Betriebsrat und Bundesregierung", "Arbeitnehmer und Arbeitsamt", "Bundestag und Bundesrat"], "Das nennt man Tarifautonomie: Der Staat mischt sich nicht ein."],
    ["Was bedeutet Friedenspflicht?", "Während ein Tarifvertrag gilt, darf über seine Inhalte nicht gestreikt werden.", ["Arbeitnehmer dürfen nie streiken.", "Der Arbeitgeber darf niemandem kündigen.", "Der Betriebsrat muss jeden Streit schlichten."], "Erst nach Ablauf des Tarifvertrags sind Arbeitskämpfe erlaubt."],
    ["Wie kommst du vom Bruttolohn zum Nettolohn?", "Brutto minus Steuern und Sozialversicherungsbeiträge", ["Brutto plus Urlaubsgeld", "Brutto minus Miete", "Brutto geteilt durch zwölf"], "Abgezogen werden zum Beispiel Lohnsteuer sowie Beiträge zur Kranken-, Pflege-, Renten- und Arbeitslosenversicherung."],
    ["Welche Steuerklasse haben ledige Arbeitnehmer ohne Kinder?", "Steuerklasse I", ["Steuerklasse III", "Steuerklasse V", "Steuerklasse VI"], "Steuerklasse VI gilt für einen zweiten Job."]
  ],
  "wk-2": [
    ["Wer ist beschränkt geschäftsfähig?", "Personen von 7 bis unter 18 Jahren", ["Personen unter 7 Jahren", "Alle ab 16 Jahren", "Nur Rentner"], "Unter 7 ist man geschäftsunfähig, ab 18 voll geschäftsfähig."],
    ["Wie heißt die Regel, nach der Minderjährige mit ihrem Taschengeld kleine Käufe wirksam tätigen können?", "Taschengeldparagraf", ["Kaufvertragsparagraf", "Widerrufsrecht", "Verbraucherschutzparagraf"], "§ 110 BGB: Der Kauf ist wirksam, wenn er mit eigenen Mitteln voll bezahlt wird."],
    ["Wodurch kommt ein Kaufvertrag zustande?", "Durch zwei übereinstimmende Willenserklärungen: Antrag und Annahme", ["Nur durch eine schriftliche Unterschrift", "Durch die Bezahlung allein", "Durch ein Angebot im Schaufenster"], "Ein Schaufenster ist nur eine Aufforderung, ein Angebot abzugeben."],
    ["Wie lang ist die Widerrufsfrist bei einem Online-Kauf?", "14 Tage", ["7 Tage", "30 Tage", "2 Jahre"], "Bei Fernabsatzverträgen kann man in der Regel 14 Tage ohne Grund widerrufen."],
    ["Wie lang ist die gesetzliche Gewährleistung beim Kauf einer neuen Sache vom Händler?", "Zwei Jahre", ["Sechs Monate", "Ein Jahr", "Fünf Jahre"], "Gewährleistung ist gesetzlich. Garantie ist eine freiwillige Zusage des Herstellers."],
    ["Wie lang ist die regelmäßige Verjährungsfrist?", "Drei Jahre ab Ende des Jahres, in dem der Anspruch entstand", ["Ein Jahr ab Rechnungsdatum", "Zehn Jahre", "30 Tage"], "Eine Rechnung aus März 2026 verjährt also mit Ablauf des 31.12.2029."],
    ["Was zeigt der effektive Jahreszins bei einem Kredit?", "Die gesamten Kosten des Kredits pro Jahr in Prozent", ["Nur die Bearbeitungsgebühr", "Den Zins für das Sparbuch", "Die Höhe der Inflation"], "Damit kann man Kreditangebote vergleichen."],
    ["Bis zu welchem Betrag sind Ersparnisse bei einer Bank in der EU gesetzlich abgesichert?", "100.000 Euro pro Person und Bank", ["10.000 Euro", "50.000 Euro", "Unbegrenzt"], "Das regelt die gesetzliche Einlagensicherung."]
  ],
  "wk-3": [
    ["Was passiert mit dem Preis, wenn die Nachfrage steigt und das Angebot gleich bleibt?", "Der Preis steigt.", ["Der Preis sinkt.", "Der Preis bleibt gleich.", "Der Staat legt einen neuen Preis fest."], "Mehr Käufer wollen dieselbe Menge, also können Anbieter mehr verlangen."],
    ["Was ist der Gleichgewichtspreis?", "Der Preis, bei dem angebotene und nachgefragte Menge gleich sind", ["Der höchste mögliche Preis", "Der Preis, den der Staat festlegt", "Der Preis ohne Mehrwertsteuer"], "Beim Gleichgewichtspreis wird der Markt geräumt."],
    ["Was bedeutet Inflation?", "Das allgemeine Preisniveau steigt und die Kaufkraft des Geldes sinkt.", ["Die Preise sinken dauerhaft.", "Die Löhne steigen schneller als die Preise.", "Der Euro wird abgeschafft."], "Für dasselbe Geld bekommt man weniger Waren."],
    ["Welche Inflationsrate strebt die Europäische Zentralbank mittelfristig an?", "2 Prozent", ["0 Prozent", "5 Prozent", "10 Prozent"], "Leicht steigende Preise gelten als gut für eine stabile Wirtschaft."],
    ["Was misst das Bruttoinlandsprodukt (BIP)?", "Den Wert aller in einem Jahr im Inland hergestellten Waren und Dienstleistungen", ["Das Vermögen aller Bürger", "Die Schulden des Staates", "Die Summe aller Steuern"], "Das BIP ist das wichtigste Maß für die Wirtschaftsleistung eines Landes."],
    ["Welche Konjunkturphase folgt auf den Boom (Hochkonjunktur)?", "Abschwung", ["Aufschwung", "Erholung", "Expansion"], "Die Reihenfolge ist Aufschwung, Boom, Abschwung, Tiefphase."],
    ["Welche Behörde wacht in Deutschland über den Wettbewerb und verhindert Kartelle?", "Das Bundeskartellamt", ["Die Bundesbank", "Das Finanzamt", "Die Verbraucherzentrale"], "Preisabsprachen zwischen Firmen sind verboten."],
    ["Wer gilt als Vater der Sozialen Marktwirtschaft in Deutschland?", "Ludwig Erhard", ["Konrad Adenauer", "Karl Marx", "Helmut Kohl"], "Erhard war Wirtschaftsminister und später Bundeskanzler."]
  ],
  "wk-4": [
    ["Wie hoch ist das Mindeststammkapital einer GmbH?", "25.000 Euro", ["1 Euro", "5.000 Euro", "50.000 Euro"], "Bei der Gründung muss mindestens die Hälfte eingezahlt sein."],
    ["Welche Rechtsform kann man schon mit 1 Euro Stammkapital gründen?", "UG (haftungsbeschränkt)", ["GmbH", "AG", "KG"], "Die UG wird oft „Mini-GmbH“ genannt."],
    ["Wie haftet ein Einzelunternehmer?", "Unbeschränkt, auch mit dem Privatvermögen", ["Nur mit dem Firmenvermögen", "Gar nicht", "Nur bis 25.000 Euro"], "Das ist das größte Risiko dieser Rechtsform."],
    ["Was sind fixe Kosten?", "Kosten, die unabhängig von der produzierten Menge anfallen, zum Beispiel Miete", ["Kosten, die mit jeder Einheit steigen, zum Beispiel Material", "Kosten, die nur einmal im Leben anfallen", "Kosten, die der Kunde trägt"], "Variable Kosten wie Material steigen dagegen mit der Menge."],
    ["Was ist der Break-even-Point?", "Der Punkt, an dem die Erlöse die Gesamtkosten genau decken", ["Der Tag der Firmengründung", "Der höchste mögliche Gewinn", "Der Zeitpunkt der Insolvenz"], "Ab hier macht das Unternehmen Gewinn."],
    ["Ein Unternehmen nimmt einen Bankkredit auf. Welche Art der Finanzierung ist das?", "Fremdfinanzierung", ["Eigenfinanzierung", "Selbstfinanzierung", "Innenfinanzierung"], "Das Geld kommt von außen und muss zurückgezahlt werden."],
    ["Wo meldet man ein Gewerbe an?", "Beim Gewerbeamt der Gemeinde", ["Beim Bundestag", "Bei der Krankenkasse", "Bei der Bundesagentur für Arbeit"], "Das Gewerbeamt informiert danach automatisch zum Beispiel das Finanzamt."]
  ]
};
window.QUIZ["gk-komplett"] = ["gk-1","gk-2","gk-3","gk-b"].flatMap(k => window.QUIZ[k]);
window.QUIZ["wk-komplett"] = ["wk-1","wk-2","wk-3","wk-4"].flatMap(k => window.QUIZ[k]);
