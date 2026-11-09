# ChromaBlitz Website

Open `index.html` directly, or run `python -m http.server 4173` from this directory and visit http://localhost:4173.

Pages: Home, Characters, Cards, Relics, and six individual character pages. Navigation uses URL hashes and works on static hosting without rewrite rules.

## Assets
All runtime images are copied into `assets/brand`, `assets/characters`, `assets/cards`, `assets/relics`, and `assets/world`. `assets/manifest.json` records each original source and its copied destination. The website does not depend on the Art folder; that folder may be removed independently. No Unity game project files were modified.

All visitor-facing content is in English. Unavailable content is marked Coming soon. Card artwork is presented as illustration previews rather than fabricated full cards.

Publish `index.html`, `styles.css`, `app.js`, `pages/`, `data/`, and `assets/` together. Do not publish the original Art folder.
