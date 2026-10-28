# Prüfungs-Podcasts

Website mit den beiden Prüfungs-Podcasts „GK auf die Ohren“ (Gemeinschaftskunde BW) und „Wirtschaft kompakt“ (Wirtschaftskompetenz BW). Jede Folge lässt sich im Browser anhören und herunterladen.

- **Hosting:** GitHub Pages (statische Dateien, kein Build-Schritt)
- **Einschalten:** Repository → *Settings → Pages* → *Deploy from a branch* → `main` / `(root)`

## Dateien

| Datei | Inhalt |
| --- | --- |
| `index.html` | Die ganze Seite: Aussehen, Folgenliste, Player |
| `audio/` | Die Folgen als .mp4 (nur Ton) |

Neue Folge hinzufügen: Datei in `audio/` legen und in `index.html` in der Liste `PODS` einen Eintrag ergänzen.
