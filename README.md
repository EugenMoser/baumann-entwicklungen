# baumann-entwicklungen.de

Unternehmenswebsite der Baumann Entwicklungen GmbH – gebaut mit **Next.js 13** als statischer Export, gehostet auf einem Apache-Server (IONOS/1&1).

---

## Tech-Stack

| Bereich | Technologie |
|---|---|
| Framework | Next.js 13 (React 18) |
| Styling | MUI (Material UI v5), Emotion, Styled Components |
| Icons | MUI Icons, MDI (Material Design Icons), React Icons |
| Datenbank | PostgreSQL via Vercel/Neon (Pooling) |
| Tests | Jest + Testing Library |
| Komponenten-Doku | Storybook 6 |
| Deployment | Statischer Export → Apache (IONOS) |
| Sitemap | next-sitemap + custom Image-Sitemap-Script |

---

## Projektstruktur

```
├── pages/                  # Next.js Seiten (Routing)
│   ├── index.js            # Startseite
│   ├── products/           # Produktkategorien & Detailseiten
│   ├── quality.js          # Qualitätsseite
│   ├── imprint.js          # Impressum
│   ├── privacy.js          # Datenschutz
│   └── api/                # API-Routen (Datenbankzugriff)
├── components/             # Wiederverwendbare UI-Komponenten
│   ├── Articles/           # Artikelliste / Produktartikel
│   ├── ColorButtons/       # Farbauswahl-Buttons
│   ├── ContactModal/       # Kontaktformular-Modal
│   ├── Footer/             # Seitenfuß
│   ├── Header/             # Seitenkopf
│   ├── Layout/             # Seitenlayout-Wrapper
│   ├── Navbar/             # Navigation
│   ├── Product/            # Produktkarte/-ansicht
│   ├── ProductList/        # Produktliste
│   ├── Searchbar/          # Suchleiste
│   ├── ShowSelection/      # Auswahl anzeigen / Anfrage per E-Mail
│   └── Style/              # Globale Styles, Theme
├── helpers/                # Hilfsfunktionen & Services
│   ├── constants.js        # Globale Konstanten
│   ├── db-services.js      # Datenbankabfragen
│   ├── dbconnection.js     # Datenbankverbindung (mysql2)
│   ├── hooks.js            # Custom React Hooks
│   ├── services.js         # Allgemeine Services
│   └── strings.js          # Textkonstanten / i18n-Strings
├── public/                 # Statische Assets (werden direkt ausgeliefert)
│   ├── .htaccess           # Apache-Konfiguration für den statischen Export
│   ├── fonts/
│   ├── images/
│   └── certificates/
├── scripts/                # Build-Hilfsskripte
│   └── generate-image-sitemap.js
├── .storybook/             # Storybook-Konfiguration
├── .htaccess               # Apache-Konfiguration (Root-Verzeichnis, Redirect non-www → www)
├── next.config.js          # Next.js-Konfiguration
├── next-sitemap.config.js  # Sitemap-Konfiguration
└── out/                    # Statischer Build-Output (wird deployed)
```

---

## Lokale Entwicklung

### Voraussetzungen

- Node.js ≥ 16
- npm

### Installation

```bash
npm install
```

### Umgebungsvariablen

Für den lokalen Datenbankzugriff wird eine `.env.local` benötigt. Vorlage aus `.env` entnehmen:

```bash
cp .env .env.local
```

> **Achtung:** Die `.env`-Datei enthält Zugangsdaten und darf **nicht** in das Repository committed werden.

### Entwicklungsserver starten

```bash
npm run dev
```

Die App läuft unter `http://localhost:3000`.

### Storybook starten

```bash
npm run storybook
```

Storybook läuft unter `http://localhost:6006`.

---

## Build & Deployment

### Produktions-Build erstellen

```bash
npm run build
```

Dieser Befehl führt folgende Schritte aus:
1. `next build` – kompiliert und optimiert die App
2. `next export` – erzeugt einen vollständig statischen HTML/CSS/JS-Export im Ordner `out/`
3. `next-sitemap` – generiert `sitemap.xml` und `robots.txt` in `out/`
4. `node scripts/generate-image-sitemap.js` – erstellt zusätzlich `sitemap-images.xml`

### Deployment

Den Inhalt des `out/`-Verzeichnisses per FTP/SFTP auf den IONOS-Webspace hochladen. Die `public/.htaccess` wird automatisch mit ins `out/`-Verzeichnis kopiert (Next.js kopiert alles aus `public/` in den Export-Output).

---

## Apache-Konfiguration (.htaccess)

Das Projekt verwendet zwei `.htaccess`-Dateien für unterschiedliche Ebenen des Webspaces.

### `.htaccess` (Root-Verzeichnis des Projekts)

Diese Datei wird **nicht** automatisch deployed. Sie muss manuell im Root-Verzeichnis des Webspaces platziert werden (eine Ebene oberhalb des Webroots), falls der Hoster dies erlaubt.

**Funktion:** Leitet alle Anfragen ohne `www` auf die `www`-Variante weiter (301 Permanent Redirect).

```apacheconf
RewriteCond %{HTTP_HOST} ^baumann-entwicklungen\.de [NC]
RewriteRule ^(.*)$ https://www.baumann-entwicklungen.de/$1 [R=301,L]
```

---

### `public/.htaccess` (wird mit deployed → `out/.htaccess`)

Diese Datei liegt in `public/` und landet dadurch automatisch im `out/`-Verzeichnis (dem eigentlichen Webroot). Sie ist die Haupt-Serverkonfiguration und enthält folgende Bereiche:

#### 1. HTTP → HTTPS-Redirect (Regel 1)

IONOS terminiert SSL am Load Balancer, daher ist `%{HTTPS}` serverseitig immer `off`. Die Weiterleitung prüft zusätzlich den `X-Forwarded-Proto`-Header, um eine Redirect-Schleife zu vermeiden.

#### 2. Statisches Next.js-Export-Routing (Regeln 2–5)

Next.js exportiert Seiten entweder als `seite.html` oder als `seite/index.html`. Da kein Node.js-Server läuft, übernimmt Apache das URL-Routing:

| Regel | Beschreibung |
|---|---|
| Regel 2 | `/xxx/index.html` → `/xxx/` (Duplikat-Prävention für Google Search Console) |
| Regel 3 | Internes Rewrite: Verzeichnis mit `index.html` wird korrekt bedient |
| Regel 4 | Internes Rewrite: `/seite` → `seite.html` (kein Redirect, transparent für den Browser) |
| Regel 5 | Trailing Slash entfernen: `/seite/` → `/seite/` (301), danach greift Regel 4 |

`DirectorySlash Off` verhindert eine Redirect-Schleife, die entstehen würde, wenn `mod_dir` vor dem Rewrite-Modul automatisch einen Slash anhängt.

#### 3. Komprimierung (gzip)

`mod_deflate` komprimiert HTML, CSS, JavaScript, JSON, XML, SVG und Web-Fonts.

#### 4. Browser-Caching

| Ressourcentyp | Cache-Dauer | Begründung |
|---|---|---|
| Fonts, JS, CSS | 1 Jahr (`immutable`) | Next.js versieht diese Dateien mit Content-Hash im Dateinamen |
| Bilder | 1 Woche + `stale-while-revalidate` | Selten geändert, aber keine Hash-basierten Namen |
| HTML | Kein Cache (`no-cache`) | Damit Inhaltsänderungen sofort sichtbar sind |

---

## Tests

```bash
npm test            # Einmalig ausführen
npm run test:watch  # Im Watch-Modus
```

---

## Linting & Formatierung

```bash
npm run lint        # ESLint
npm run prettier    # Prettier (formatiert alle Dateien)
```

---

## Sitemap

Die Website verwendet zwei Sitemaps:

- `sitemap.xml` – alle regulären Seiten (generiert durch `next-sitemap`)
- `sitemap-images.xml` – Bild-Sitemap für Google Bilder (generiert durch `scripts/generate-image-sitemap.js`)

Beide werden beim `npm run build` erzeugt und landen im `out/`-Verzeichnis. Die `robots.txt` verweist automatisch auf beide.

**Prioritäten in `sitemap.xml`:**

| URL-Muster | Priorität | Änderungsfrequenz |
|---|---|---|
| `/` (Startseite) | `1.0` | wöchentlich |
| `/products/[kategorie]` | `0.8` | wöchentlich |
| `/products/[kategorie]/[produkt]` | `0.9` | monatlich |
| Alle anderen Seiten | `0.7` | wöchentlich |
