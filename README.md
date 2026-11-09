# Prüfungs-Podcasts

Website mit den beiden Prüfungs-Podcasts „GK auf die Ohren“ (Gemeinschaftskunde BW) und „Wirtschaft kompakt“ (Wirtschaftskompetenz BW). Jede Folge lässt sich im Browser anhören und herunterladen.

- **Hosting:** GitHub Pages (statische Dateien, kein Build-Schritt)
- **Einschalten:** Repository → *Settings → Pages* → *Deploy from a branch* → `main` / `(root)`

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Die ganze Seite: Aussehen, Folgenliste, Player |
| `quiz-data.js` | Quizfragen zum Ankreuzen zu jeder Folge |
| `open-data.js` | Fragen zum Selberschreiben mit Musterlösung und Kernpunkten |
| `grader.js` | Bewertet selbst geschriebene Antworten nach Kernpunkten statt nach Wortlaut |
| `cards-data.js` | Karteikarten pro Fach |
| `chapters.js` | Zeitmarken der Themen in jeder Folge |
| `audio/` | Die Folgen als .m4a (nur Ton, AAC 96 kbit/s mono, -16 LUFS) |

Neue Folge hinzufügen: Datei in `audio/` legen, in `index.html` in der Liste `PODS` einen Eintrag ergänzen und in `quiz-data.js` Fragen unter derselben `id` anlegen.

## Klang

Die Aufnahmen sind nachbearbeitet: Lena und Max werden getrennt entzerrt (Max weniger dröhnend und klarer, Lena wärmer und weniger spitz, fehlende Höhen über 8 kHz ergänzt), scharfe S-Laute gedämpft, beide Stimmen auf gleiche Lautheit gebracht und das Ganze auf -16 LUFS mit höchstens -1 dBTP gemastert. Die unbearbeiteten Fassungen stehen in der Git-Historie (Commit `338a3f8`).

## Fragen zum Selberschreiben

Bei Freitext-Fragen prüft `grader.js`, ob die Kernpunkte der Musterlösung in der Antwort vorkommen. Jeder Kernpunkt hat mehrere erlaubte Formulierungen (Wortstämme); Tippfehler, Umlaute, Groß- und Kleinschreibung und Zahlwörter werden toleriert. Bei Fragen nach Unterschieden („Kompromiss und Konsens“) wird jeder Kernpunkt nur in dem Teil der Antwort gesucht, der zum jeweiligen Begriff gehört, damit vertauschte Erklärungen nicht als richtig zählen. Wer anders formuliert als erwartet, kann seine Antwort nach dem Vergleich mit der Musterlösung selbst als richtig werten.

Die Probeprüfung besteht aus 15 Fragen zum Ankreuzen (je 1 Punkt) und 5 zum Selberschreiben (je 3 Punkte, Teilpunkte möglich) in 30 Minuten. Die Note folgt dem IHK-Schlüssel.
