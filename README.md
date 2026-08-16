# HOUSE Coffee & Desserts — Concept Website

A premium, vibrant, fully responsive concept/demo website for **HOUSE Coffee & Desserts**
(Cantonment, Lahore), built with React + Vite for portfolio and client-outreach purposes.

> **This is not the official website of the business.** It's a demo built from
> publicly available information (Google Business listing + in-store menu
> photography) for pitching purposes. See `src/data/siteData.js` for the
> disclaimer text also shown in the site footer.

## Tech stack

- React 18 + Vite 5
- Plain CSS with a shared design-token system (`src/index.css`)
- No UI/animation libraries — hover/zoom/reveal effects are hand-built with
  CSS transitions + a small IntersectionObserver hook (`components/Reveal.jsx`)

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Project structure

```
house-coffee-desserts/
├─ index.html
├─ package.json
├─ vite.config.js
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css              # design tokens, resets, shared utility classes
   ├─ data/
   │  ├─ siteData.js         # business info (address, phone, hours, socials…)
   │  ├─ menuData.js         # menu categories & items
   │  └─ imageData.js        # curated royalty-free photography (Unsplash)
   └─ components/
      ├─ Navbar.jsx / .css
      ├─ Hero.jsx / .css     # large photographic hero, rating badge
      ├─ Menu.jsx / .css     # visual category cards + filterable menu list
      ├─ FeaturedItems.jsx / .css  # real menu items shown as photo cards
      ├─ About.jsx / .css    # two-column, café interior photo
      ├─ Specialties.jsx / .css
      ├─ Gallery.jsx / .css  # editorial masonry gallery, hover zoom
      ├─ Location.jsx / .css # address, hours, embedded map, Get Directions
      ├─ Contact.jsx / .css  # validated contact form UI (frontend only)
      ├─ Footer.jsx / .css
      ├─ Photo.jsx           # <img> wrapper with graceful broken-image fallback
      ├─ Reveal.jsx          # IntersectionObserver fade/rise-in wrapper
      └─ icons/              # hand-built line-art SVG icon set (Specialties section)
```

## Photography

All photos are sourced from Unsplash and used under the [Unsplash License](https://unsplash.com/license)
(free for commercial use, no attribution required). Every URL in
`src/data/imageData.js` was individually verified before being added. These
are **not** photos of the real HOUSE Coffee & Desserts venue — swap them for
the client's own photography before this concept goes live. If a hotlinked
photo ever fails to load, `Photo.jsx` falls back to a branded gradient block
instead of a broken-image icon.

## Content that still needs to come from the client

Everything below is explicitly marked `[CONTENT NEEDED]` in the code
(`src/data/siteData.js`, `src/data/menuData.js`) rather than invented:

- **Full weekly opening hours** — only "closes 2:00 AM" was visible publicly.
- **Instagram and Facebook URLs** — not visible on the public listing.
- **Specialty coffee menu pricing** — the printed dessert/sandwich/matcha menus
  were available, but the espresso/filter coffee price list wasn't.
- **Real photography throughout** — the Gallery, Hero, Menu category cards and
  Featured Items sections all currently use stand-in stock photography (see
  above) rather than the business's own Google-listing photos, since those
  aren't licensed for reuse in a separate demo site.

## Notes on the menu data

Menu items and prices in `src/data/menuData.js` were transcribed directly from
photos of HOUSE's in-store printed menus (desserts, ice-cream combos,
sandwiches, and the seasonal "OG Matcha Pop-Up" menu). Double-check against
the current in-store menu before using this for a real client hand-off, since
menus and prices change.

