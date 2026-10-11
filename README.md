# Pallavi Verma — Makeup Artist Website

Next.js (App Router) · JavaScript + JSX only · Tailwind CSS v4 · React Hook Form + Zod · Framer Motion · Lucide.
No TypeScript anywhere (no `.ts`/`.tsx`, no `tsconfig.json`).

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
```

Production check:

```bash
npm run lint
npm run build
npm start
```

Requires Node 20.9+ (built and tested on Node 22).

## Business configuration checklist (do this before launch)

All business details live in **`src/data/artist.js`**. Anything left empty is hidden, never invented.

- [ ] `whatsappNumber` — digits only with country code, e.g. `"919876543210"`. Until set, WhatsApp links open WhatsApp with the message prefilled but no chat selected.
- [ ] `phoneDisplay`, `email` — optional, shown only when filled.
- [ ] `socials` — Instagram / Facebook / YouTube URLs (also added to structured data).
- [ ] `heroImage`, `aboutImage` — real portrait photos in `public/images/artist/`.
- [ ] `travel.locations` — confirm Varanasi (Banaras) and Ranchi are genuinely offered, or remove them.
- [ ] `training` — confirm the wording is accurate.
- [ ] `address` — leave `null` unless Pallavi wants a public address.
- [ ] `src/data/services.js` — confirm every service; `Saree Draping` and `Family Makeup` are `offered: false` until confirmed; add `startingPrice` only when confirmed.
- [ ] `src/data/gallery.js` — replace placeholders with real photos (see the guide at the top of the file). Keep labels like "Practice look" honest.
- [ ] `src/data/testimonials.js` — leave empty until real clients give written permission.
- [ ] `src/app/privacy-policy/page.js` — have Pallavi review it.
- [ ] `src/app/sitemap.js` — update `LAST_UPDATED` when content changes.

## Adding gallery photos

1. Put the file in `public/images/<category>/` (bridal, engagement, party, hairstyling).
2. In `src/data/gallery.js` set `src: "/images/bridal/look-01.jpg"`, real `width`/`height`, and descriptive `alt`.
3. `next/image` handles resizing, lazy loading and formats automatically.

## Configure contact details

Set contact and social profile values in the root `.env` file. The variable names and examples are listed in `.env.example`. The contact details are public because the website displays them; do not put passwords or private tokens in these variables.

After changing `.env`, restart the development server. For production, add the same variables in the hosting provider's environment-variable settings and redeploy.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project →** import the repo (framework preset: Next.js, defaults are fine).
3. Add the environment variable `NEXT_PUBLIC_SITE_URL` = your final domain, e.g. `https://pallaviverma.com` (no trailing slash). It drives canonical URLs, the sitemap, robots and structured data.
4. Deploy. Then connect the custom domain under **Settings → Domains** and redeploy.

## Google Search Console checklist

- [ ] Add the property (Domain or URL-prefix) at search.google.com/search-console and verify it (DNS record, or HTML tag via `metadata.verification.google` in `src/app/layout.js`).
- [ ] Submit `https://YOUR-DOMAIN/sitemap.xml` under **Sitemaps**.
- [ ] Use **URL Inspection** on the home page and each service page, then **Request indexing**.
- [ ] Check **Pages** and **Core Web Vitals** reports after a few weeks.
- [ ] Create and verify a **Google Business Profile** (only if Pallavi qualifies — e.g. she serves customers at a real location or travels to them), using the same name, phone and website.
- [ ] Add the real WhatsApp number, Instagram and Business Profile links to the site and keep the details consistent everywhere.
- [ ] No ranking can be guaranteed; results build over time with genuine photos, reviews and consistent details.

## Notes

- Contact form validates with React Hook Form + Zod (Indian mobile numbers), then opens WhatsApp with a prefilled message. **It does not send anything itself** — the form says so, and never shows a false "sent" message.
- Fonts (Cormorant Garamond, Jost) are self-hosted in `src/fonts`, so builds work offline.
- The footer year is fixed in `src/components/layout/Footer.jsx` (Cache Components keeps pages static).
