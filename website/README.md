# BYA House website

One-page site for BYA House. Vite + vanilla JS, a scroll-scrubbed film (`public/film.mp4`) with a gold dust particle layer over it.

## Run

```bash
npm install
npm run dev                    # http://localhost:5173
npm run build -- --base=./     # static build in dist/, deploy the contents of dist/
```

Open the build over HTTP (`npx vite preview`), never `file://`.

## Placeholders: nothing is sent

- **Buy buttons** only add to a bag counter on the page and show a message. No order is placed, no payment is taken. Connect a shop platform before launch.
- **Newsletter form** only shows a thank-you message. The email address is not stored or sent anywhere.
- **Contact details** (hello@byahouse.com, WhatsApp +31 6 0000 0000, @byahouse) are placeholders. Replace them in `index.html`.

## Files

- `index.html`: all sections and copy
- `src/style.css`: brand tokens, layout, phone view
- `src/main.js`: smooth scroll, film scrub, reveals, filter, bag, form
- `src/atmosphere.js`, `src/particles.js`: the gold dust layer
- Phones and reduced-motion visitors see the still poster (`public/img/hero.jpg`) and never download the film.
