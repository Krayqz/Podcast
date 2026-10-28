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
| `audio/` | Die Folgen als .m4a (nur Ton, AAC 96 kbit/s mono, -16 LUFS) |

Neue Folge hinzufügen: Datei in `audio/` legen, in `index.html` in der Liste `PODS` einen Eintrag ergänzen und in `quiz-data.js` Fragen unter derselben `id` anlegen.

## Klang

Die Aufnahmen sind nachbearbeitet: Lena und Max werden getrennt entzerrt (Max weniger dröhnend und klarer, Lena wärmer und weniger spitz, fehlende Höhen über 8 kHz ergänzt), scharfe S-Laute gedämpft, beide Stimmen auf gleiche Lautheit gebracht und das Ganze auf -16 LUFS mit höchstens -1 dBTP gemastert. Die unbearbeiteten Fassungen stehen in der Git-Historie (Commit `338a3f8`).
