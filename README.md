# Prüfungs-Podcasts

Website mit den beiden Prüfungs-Podcasts „GK auf die Ohren“ (Gemeinschaftskunde BW) und „Wirtschaft kompakt“ (Wirtschaftskompetenz BW). Jede Folge lässt sich im Browser anhören und herunterladen.

- **Hosting:** GitHub Pages (statische Dateien, kein Build-Schritt)
- **Einschalten:** Repository → *Settings → Pages* → *Deploy from a branch* → `main` / `(root)`

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Die ganze Seite: Aussehen, Folgenliste, Player |
| `quiz-data.js` | Quizfragen zu jeder Folge |
| `cards-data.js` | Karteikarten pro Fach |
| `chapters.js` | Zeitmarken der Themen in jeder Folge |
| `audio/` | Die Folgen als .m4a (nur Ton) |

Neue Folge hinzufügen: Datei in `audio/` legen, in `index.html` in der Liste `PODS` einen Eintrag ergänzen und in `quiz-data.js` Fragen unter derselben `id` anlegen.
