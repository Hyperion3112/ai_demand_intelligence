# AI Demand & Adoption Intelligence (US)

A Next.js website that showcases Tableau Public dashboards comparing AI tool demand across Coding, Image, and Video categories using Google Trends data.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **New Project**.
3. Import your GitHub repo.
4. Click **Deploy** — no environment variables needed.

Or use the Vercel CLI:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (navbar, footer, fonts, SEO metadata)
│   ├── page.tsx            # Landing page with all sections
│   ├── globals.css         # Global styles & Tailwind
│   └── dashboards/
│       └── [id]/
│           └── page.tsx    # Individual dashboard pages (/dashboards/1, /2, /3)
├── components/
│   ├── TableauEmbed.tsx    # Reusable Tableau viz embed component
│   ├── Navbar.tsx          # Sticky top navigation with anchor links
│   ├── Footer.tsx          # Footer with links
│   ├── BackToTop.tsx       # Floating back-to-top button
│   └── SectionCard.tsx     # Reusable section card wrapper
└── lib/
    └── dashboards.ts       # Dashboard data, metrics glossary, key insights
```

## Editing Content

### Dashboard Embeds
Edit `src/lib/dashboards.ts` — each dashboard object has:
- `embedHtml`: raw Tableau embed HTML string
- `tableauUrl`: direct link to Tableau Public
- `title`, `purpose`, `howToUse`: displayed text

### Metrics & Insights
Also in `src/lib/dashboards.ts`:
- `METRICS_GLOSSARY`: array of `{ term, definition }` objects
- `KEY_INSIGHTS`: array of insight strings

### Links (GitHub / LinkedIn / Tableau Public)
Search for placeholder URLs (`https://github.com`, `https://linkedin.com`, `https://public.tableau.com`) in:
- `src/app/page.tsx` (hero CTA buttons, about section)
- `src/components/Footer.tsx`

## Tech Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Tableau JS API** (loaded at runtime for dashboard embeds)

## License

MIT
