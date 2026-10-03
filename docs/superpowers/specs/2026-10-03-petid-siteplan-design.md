# PetID Registry — Site Plan Design (W05, 15pts)

Date: 2026-10-03
Status: Approved in-chat, pending spec file review
Location: `Block5/wdd231/siteplan.html` + `styles/siteplan.css`

## 1. Intent
Single HTML site-plan document for final project PetID Registry. English. 6 required content sections. Uses its own Blue/Cyan/white scheme + Roboto. B&W wireframes for home (small + large). Committed to `main` with `[WDD231]`, Page Audit 0 ❌.

Final project reference (W04 proposal, W06 description):
- Home explains PetID QR/NFC + tracker + pedigree
- Catalog 15 pets via fetch JSON, 4+ props, filter, modal
- Register form + thankyou via URLSearchParams

## 2. Architecture
- `siteplan.html` at wdd231 root (keeps `final/` clean for W06 3 pages).
- Reuse chamber pattern: header (logo, title, hamburger, nav Home/Chamber/Final), main, footer (year, lastModified, social).
- CSS: `styles/siteplan.css` (new, small-screen base) + reuse `styles/larger.css` only if needed; no frameworks.
- Images: `images/wireframe-small.svg`, `images/wireframe-large.svg` black strokes on white, boxes only.
- JS: `scripts/navigation.js`, `scripts/date.js` reuse (defer). No new JS logic.

## 3. Sections (content)
1. Site Name: PetID Registry + reason (unique digital ID for pets) + optional domain `petid-registry.org`
2. Site Purpose: scope — QR/NFC records, adoption + pedigree catalog, registration services
3. Scenarios: 2 visitor questions (e.g. How do I access my pet's vaccines at any vet? / Which puppies are available for adoption vs pedigree sale?)
4. Color Scheme: `--blue #0B3D62` (headings/header/footer), `--cyan #087E8B` (accents/links/buttons), `--bg #FFFFFF`, text #222. Swatch blocks. Doc exclusively uses this scheme.
5. Typography: Roboto 400/700 only. Headings 700, body 400. Google Fonts + preconnect.
6. Wireframe: B&W small (320px stacked) + large (desktop 2-3 col) home sketches as SVG `<img>` with alt, width/height, lazy.

## 4. SEO / Standards
- `title`, `meta description` (unique), `meta author`, OG tags, favicon, `lang="en-US"`.
- Valid semantic HTML, valid CSS no unused/duplicates, responsive 320px no horizontal scroll, wayfinding `current` on plan link? (nav has no Site Plan link — add `aria-current` note or leave Final current off; keep simple: no current highlight).
- Weight <500kB, lazy wireframes, contrast WebAIM AA.

## 5. Testing
- W3C validator, WAVE, Lighthouse mobile 95+, contrast checker, console clean.

## 6. Out of scope
- No final/ 3 pages, no pets.json, no modal/catalog logic, no video. W06 only.
