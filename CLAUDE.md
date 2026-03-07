# CLAUDE.md — AI Assistant Guide for baumann-entwicklungen

This file provides context for AI assistants (Claude, Copilot, etc.) working in this codebase.

---

## Project Overview

**Baumann Entwicklungen GmbH** is a German plastics injection molding company. This repository is their corporate website — a product catalog built with **Next.js 13** and exported as a **fully static site** deployed to an IONOS/1&1 Apache shared hosting server.

The site is German-language and database-driven at build time: MySQL product data is fetched during `next build`, then the entire site is exported to static HTML/CSS/JS.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 13.0.3 (static export) |
| UI Library | React 18.2.0 |
| Component System | MUI v5 (Material UI) + Joy UI |
| CSS-in-JS | Styled-components 5 + Emotion |
| Icons | MUI Icons, @mdi/react, react-icons |
| Database | MySQL 2 (build-time only) |
| Testing | Jest 29 + React Testing Library |
| Component Docs | Storybook 6.5 |
| Code Quality | ESLint + Prettier |
| Sitemap | next-sitemap + custom image sitemap script |

---

## Directory Structure

```
baumann-entwicklungen/
├── components/          # Reusable UI components (PascalCase dirs)
│   ├── Articles/        # Product article/variant selector
│   ├── ColorButtons/    # Color variant buttons
│   ├── ContactModal/    # Email inquiry modal
│   ├── Footer/          # Site footer
│   ├── Header/          # Header with search bar
│   ├── Layout/          # Root layout wrapper (header + navbar + footer)
│   ├── Navbar/          # Navigation bar
│   ├── Product/         # Product detail card with image gallery
│   ├── ProductList/     # Grid of product cards
│   ├── Searchbar/       # Search input
│   ├── ShowSelection/   # Email composition helper
│   └── Style/
│       └── GlobalStyles.js  # CSS custom properties and global resets
├── helpers/             # Utilities and services
│   ├── constants.js     # Product categories, base URL
│   ├── db-services.js   # MySQL query functions (build-time only)
│   ├── dbconnection.js  # MySQL connection pool
│   ├── hooks.js         # Custom React hooks (useLocalStorage)
│   ├── services.js      # Client-side search/filter logic
│   ├── strings.js       # All German UI strings and email templates
│   └── testdb.json      # Sample product data (for dev/testing)
├── pages/               # Next.js file-based routing
│   ├── _app.js          # Global app wrapper
│   ├── _document.js     # Custom HTML document
│   ├── index.js         # Homepage
│   ├── imprint.js       # Legal imprint
│   ├── privacy.js       # Privacy policy
│   ├── quality.js       # Quality policy
│   ├── api/getdata/     # API route: returns product data (build-time)
│   └── products/
│       ├── [category]/index.js       # Category listing (dynamic route)
│       └── [category]/[id]/index.js  # Product detail (dynamic route)
├── public/              # Static assets served as-is
│   ├── images/          # Product photography
│   ├── fonts/           # Rubik variable font (woff2)
│   ├── certificates/    # Compliance/quality certificates
│   └── .htaccess        # Apache routing for static export
├── scripts/
│   └── generate-image-sitemap.js  # Custom image sitemap generator
├── .storybook/          # Storybook config (Webpack 5)
├── .eslintrc.json
├── jest.config.js
├── next.config.js
├── next-sitemap.config.js
└── package.json
```

---

## Essential Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production build (full pipeline)
npm run build        # next build + next export + sitemap generation
                     # Output: ./out/ directory (deploy this)

# Testing
npm test             # Run Jest once
npm run test:watch   # Jest in watch mode

# Code quality
npm run lint         # ESLint
npm run prettier     # Format all files with Prettier

# Component development
npm run storybook    # Storybook at http://localhost:6006

# Static export only (without sitemap)
npm run export       # next build && next export
```

---

## Environment Variables

Create a `.env.local` file (not committed) for local development:

```bash
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=your_db_name
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
```

These are only needed at **build time** — the static export has no runtime database access.

---

## Architecture: Static Export Pattern

This is a **statically generated** site. The flow is:

1. `next build` → fetches all product data from MySQL via `getStaticProps` / `getStaticPaths`
2. `next export` → renders every page to static HTML files in `./out/`
3. `./out/` is uploaded via FTP/SFTP to IONOS Apache hosting
4. Apache `.htaccess` handles routing, caching, and HTTPS redirects

**Key implication:** `pages/api/*` routes are only used at build time (called within `getStaticProps`). They are NOT available at runtime in the deployed static site.

**Image optimization** is disabled (`unoptimized: true` in `next.config.js`) because `next/image` optimization requires a Node.js server, which is unavailable in static export mode.

---

## Data Flow

```
MySQL Database
      │
      ▼ (build time only)
helpers/db-services.js   ← SQL queries with JSON_ARRAYAGG aggregation
      │
      ▼
pages/api/getdata/index.js  ← API route used by getStaticProps
      │
      ▼
pages/products/[category]/[id]/index.js  ← getStaticProps + getStaticPaths
      │
      ▼
Static HTML files in ./out/
```

### Product Data Shape

```javascript
{
  product_id: number,
  category: string,       // e.g., "Verpackungen"
  product_name: string,
  description: string,
  articles: [
    {
      article_id: number,
      article_number: string,
      article_name: string,
      vpe: [...]          // Verpackungseinheiten (packaging units)
    }
  ],
  colors: [
    {
      suffix: string,
      color_name: string,
      color_id: number,
      color_code: string  // hex color
    }
  ]
}
```

---

## Component Conventions

1. **Functional components** with hooks — no class components.
2. **One component per directory** named with PascalCase. Export from `index.js`.
3. **Styling:** use styled-components for component styles, MUI components where available.
4. **CSS custom properties** for design tokens — see `components/Style/GlobalStyles.js`:
   - `--color-primary`, `--color-secondary`, `--color-text`, etc.
   - Responsive breakpoints: `1200px`, `768px`, `480px`
5. **No TypeScript** — plain JavaScript throughout.
6. **No global state library** — local state + props drilling. For persistent state use `useLocalStorage` from `helpers/hooks.js`.

---

## Internationalization

All user-facing strings are in **German** and centralized in `helpers/strings.js`. Do not hardcode German text in components — add it to `strings.js` and import it.

The file also contains email templates for the contact/inquiry flow with dynamic string interpolation patterns.

---

## Routing

| URL Pattern | File | Notes |
|-------------|------|-------|
| `/` | `pages/index.js` | Homepage with categories + search |
| `/products/[category]` | `pages/products/[category]/index.js` | Category listing |
| `/products/[category]/[id]` | `pages/products/[category]/[id]/index.js` | Product detail |
| `/imprint` | `pages/imprint.js` | Legal |
| `/privacy` | `pages/privacy.js` | GDPR |
| `/quality` | `pages/quality.js` | Quality policy |

Product categories are defined in `helpers/constants.js`.

---

## Search

Search is **client-side only**. The `helpers/services.js` module filters products by:
- Product name
- Product description
- Article number

Matching is case-insensitive. An empty query returns no results (not all products).

---

## SEO & Sitemap

The build generates three sitemap files:

| File | Generator | Priority |
|------|-----------|----------|
| `sitemap.xml` | next-sitemap | Homepage: 1.0, Categories: 0.8, Products: 0.9, Others: 0.7 |
| `sitemap-0.xml` | next-sitemap | (page index) |
| `image-sitemap.xml` | `scripts/generate-image-sitemap.js` | Product images |

`robots.txt` is also generated and references all sitemaps. Configure in `next-sitemap.config.js`.

---

## Apache Deployment Notes

The `./out/` directory is deployed to an IONOS Apache server. Key `.htaccess` behaviors:

- **HTTP → HTTPS redirect** using `X-Forwarded-Proto` header (IONOS load balancer pattern)
- **Static route rewriting:** handles both `/page.html` and `/page/index.html` patterns from Next.js export
- **Browser caching:**
  - JS/CSS/fonts: 1 year, immutable
  - Images: 1 week + stale-while-revalidate
  - HTML: no-cache (always fresh)
- **gzip compression** enabled for text assets

Do not break this `.htaccess` logic when modifying routing — it is critical for production.

---

## Testing

Jest is configured with `jsdom` environment. Run with `npm test`.

**Current state:** Testing infrastructure is in place but no test files exist yet. When adding tests:
- Use `@testing-library/react` for component tests
- Use `@testing-library/user-event` for interaction simulation
- Use `@testing-library/jest-dom` matchers (already configured)
- Test files should be colocated with components or in a `__tests__/` directory

---

## Storybook

Storybook 6.5 is configured with Webpack 5. Story files should match `**/*.stories.@(js|jsx|ts|tsx)`.

**Current state:** Configured but no stories exist yet. Add stories alongside components as `ComponentName.stories.js`.

---

## Common Pitfalls

1. **Never use `next/image` optimization features** — `unoptimized: true` is required for static export. Keep it that way.
2. **API routes are build-time only** — `pages/api/` is not available in the deployed static site.
3. **Database is build-time only** — do not add database calls outside `getStaticProps` or `getStaticPaths`.
4. **Do not use `getServerSideProps`** — this requires a running Node.js server, which the hosting does not provide. Use `getStaticProps` only.
5. **`.htaccess` changes need testing** — the Apache rewrite rules are non-trivial. Test changes with a local Apache setup or in staging if available.
6. **Image paths** — product images are served from `/public/images/`. When referencing them, use paths relative to `/public`.

---

## Branch Strategy

| Branch | Purpose |
|--------|---------|
| `master` | Production — deployed to live site |
| `dev` | Development integration branch |
| `claude/*` | AI-assisted feature branches |

Always develop on feature branches and merge to `dev` before `master`.

---

## Code Style

- **Prettier** for formatting — run `npm run prettier` before committing
- **ESLint** extends `next/core-web-vitals` and `prettier`
- No trailing commas required; Prettier handles formatting
- Use `const` by default, `let` only when reassignment is needed
- Prefer named exports for components, default export acceptable at page level
