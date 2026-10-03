# PetID Site Plan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build wdd231 siteplan.html + CSS + B&W wireframes for PetID Registry.

**Architecture:** Single static doc at wdd231 root reusing chamber header/nav/footer pattern, new siteplan.css with Blue/Cyan/white scheme, 2 black-white SVG wireframes.

**Tech Stack:** HTML5, CSS3, Roboto via Google Fonts, SVG, vanilla JS reuse (navigation.js, date.js).

**Spec:** `docs/superpowers/specs/2026-10-03-petid-siteplan-design.md`

## Global Constraints
- All content in English.
- Commit messages use `[WDD231]` format to main.
- Page Audit must show zero ❌ before done.
- Colors: blue #0B3D62 headings/header/footer, cyan #087E8B accents/links/buttons, background #FFFFFF, text #222222.
- Typography: Roboto 400/700 only.
- Wireframes must be black-white sketches, NOT AI HTML wireframe.
- File naming lowercase, no spaces.
- Page weight ≤500kB, responsive 320px no horizontal scroll.

## Review Focus
- Wireframe SVGs render as pure black-white with no color leakage — grader checks visually.
- Color contrast AA on blue/cyan over white — WebAIM checker must pass.
- HTML validator zero errors — unclosed tags or duplicate IDs break audit.
- Lighthouse mobile 95+ — render-blocking fonts or large SVGs drop score.
- Console zero errors — missing SVG paths or JS 404s fail audit.

---

### Task 1: B&W wireframe SVGs

**Files:**
- Create: `images/wireframe-small.svg`
- Create: `images/wireframe-large.svg`
- Test: manual open in browser + `ls -l images/wireframe-*.svg`

**Interfaces:**
- Consumes: none
- Produces: `images/wireframe-small.svg` (320px stacked boxes), `images/wireframe-large.svg` (desktop 3-col boxes) consumed by Task 2 `<img>` tags.

- [ ] **Step 1: Write small wireframe SVG (black strokes, white fill, text labels only)**
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="520" viewBox="0 0 320 520" role="img" aria-label="Mobile wireframe">
<rect x="5" y="5" width="310" height="510" fill="white" stroke="black" stroke-width="2"/>
<rect x="15" y="15" width="290" height="40" fill="white" stroke="black"/>
<text x="20" y="40" font-family="sans-serif" font-size="12" fill="black">Header: logo + hamburger</text>
<rect x="15" y="65" width="290" height="30" fill="white" stroke="black"/>
<text x="20" y="85" font-family="sans-serif" font-size="12" fill="black">H1: PetID Registry</text>
<rect x="15" y="105" width="290" height="120" fill="white" stroke="black"/>
<text x="20" y="125" font-family="sans-serif" font-size="12" fill="black">Hero: QR/NFC concept</text>
<rect x="15" y="235" width="290" height="80" fill="white" stroke="black"/>
<text x="20" y="255" font-family="sans-serif" font-size="12" fill="black">Card: catalog preview</text>
<rect x="15" y="325" width="290" height="80" fill="white" stroke="black"/>
<text x="20" y="345" font-family="sans-serif" font-size="12" fill="black">Card: services + form CTA</text>
<rect x="15" y="415" width="290" height="60" fill="white" stroke="black"/>
<text x="20" y="435" font-family="sans-serif" font-size="12" fill="black">Footer</text>
</svg>
```
- [ ] **Step 2: Write large wireframe SVG**
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500" role="img" aria-label="Desktop wireframe">
<rect x="5" y="5" width="790" height="490" fill="white" stroke="black" stroke-width="2"/>
<rect x="15" y="15" width="770" height="50" fill="white" stroke="black"/>
<text x="25" y="45" font-family="sans-serif" font-size="14" fill="black">Header: logo + nav horizontal</text>
<rect x="15" y="75" width="770" height="40" fill="white" stroke="black"/>
<text x="25" y="100" font-family="sans-serif" font-size="14" fill="black">H1: PetID Registry</text>
<rect x="15" y="125" width="770" height="150" fill="white" stroke="black"/>
<text x="25" y="150" font-family="sans-serif" font-size="14" fill="black">Hero 2-col: text + QR tag image</text>
<rect x="15" y="285" width="250" height="120" fill="white" stroke="black"/>
<rect x="275" y="285" width="250" height="120" fill="white" stroke="black"/>
<rect x="535" y="285" width="250" height="120" fill="white" stroke="black"/>
<text x="25" y="310" font-family="sans-serif" font-size="12" fill="black">3 cards row</text>
<rect x="15" y="415" width="770" height="50" fill="white" stroke="black"/>
<text x="25" y="445" font-family="sans-serif" font-size="14" fill="black">Footer</text>
</svg>
```
- [ ] **Step 3: Verify files exist and open clean**
Run: `ls -l images/wireframe-*.svg && python3 -c "import xml.etree.ElementTree as ET; [ET.parse(f) for f in ['images/wireframe-small.svg','images/wireframe-large.svg']]; print('SVG OK')"`
Expected: both files listed, SVG OK, no color codes except black/white.
- [ ] **Step 4: Commit**
```bash
git add Block5/wdd231/images/wireframe-small.svg Block5/wdd231/images/wireframe-large.svg
git commit -m "[WDD231] feat: add B&W home wireframes for site plan"
```

### Task 2: siteplan.html structure

**Files:**
- Create: `siteplan.html`
- Test: `python3 -c "print(open('siteplan.html').read().count('<section'))"` + W3C validator

**Interfaces:**
- Consumes: `images/wireframe-small.svg`, `images/wireframe-large.svg` from Task 1; `scripts/navigation.js`, `scripts/date.js` existing.
- Produces: `siteplan.html` skeleton consumed by Task 3 CSS.

- [ ] **Step 1: Write failing check (file must exist with 6 sections)**
Run: `test -f siteplan.html && grep -c "<section" siteplan.html || echo "MISSING"`
Expected: MISSING (proves not done).
- [ ] **Step 2: Write minimal siteplan.html**
```html
<!doctype html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PetID Registry | Site Plan</title>
<meta name="description" content="Site plan for PetID Registry: QR/NFC pet medical records, adoption and pedigree catalog.">
<meta name="author" content="Filipe Leonel Batista">
<meta property="og:title" content="PetID Registry Site Plan">
<meta property="og:description" content="Plan for QR/NFC pet records, catalog and registration.">
<meta property="og:type" content="website">
<link rel="icon" href="favicon.ico">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
<link rel="stylesheet" href="styles/siteplan.css">
<script src="scripts/navigation.js" defer></script>
<script src="scripts/date.js" defer></script>
</head>
<body>
<header>
<img src="images/logo.svg" alt="PetID site logo" width="50" height="50">
<span>PetID Registry | Site Plan</span>
<button id="nav-button" class="hamburger" aria-label="Menu">&#9776;</button>
<nav id="nav-menu"><ul>
<li><a href="index.html">Home</a></li>
<li><a href="chamber/index.html">Chamber</a></li>
<li><a href="final/index.html">Final</a></li>
</ul></nav>
</header>
<main>
<h1>PetID Registry — Site Plan</h1>
<section id="name"><h2>Site Name</h2><p><strong>PetID Registry</strong> — unique digital ID for pets via QR/NFC collar tag. Domain: <code>petid-registry.org</code></p></section>
<section id="purpose"><h2>Site Purpose</h2><p>Central hub for pet QR/NFC medical records, 15-pet adoption/pedigree catalog with filters and modal, and Pet ID registration form with thank-you page.</p></section>
<section id="scenarios"><h2>Scenarios</h2><ul><li>How do I access my pet's vaccines at any vet?</li><li>Which pets are available for adoption vs pedigree sale and how do I filter them?</li></ul></section>
<section id="colors"><h2>Color Scheme</h2><p><span class="swatch blue">#0B3D62 headings/header/footer</span> <span class="swatch cyan">#087E8B accents/links</span> <span class="swatch white">#FFFFFF background</span></p></section>
<section id="typography"><h2>Typography</h2><p>Roboto 400 body, Roboto 700 headings.</p></section>
<section id="wireframe"><h2>Wireframe</h2><figure><img src="images/wireframe-small.svg" alt="Home mobile wireframe" width="320" height="520" loading="lazy"><figcaption>Mobile 320px stacked</figcaption></figure><figure><img src="images/wireframe-large.svg" alt="Home desktop wireframe" width="800" height="500" loading="lazy"><figcaption>Desktop 2-3 col</figcaption></figure></section>
</main>
<footer><p>&copy; <span id="currentyear"></span> Filipe Leonel Batista | Brazil</p><p id="lastModified"></p></footer>
</body>
</html>
```
- [ ] **Step 3: Verify 6 sections + wireframe refs**
Run: `grep -c "<section" siteplan.html; grep -c "wireframe-" siteplan.html`
Expected: 6 and 2.
- [ ] **Step 4: Commit**
```bash
git add siteplan.html
git commit -m "[WDD231] feat: add PetID site plan HTML structure"
```

### Task 3: siteplan.css Blue/Cyan/white

**Files:**
- Create: `styles/siteplan.css`
- Test: `grep -c "#0B3D62\|#087E8B" styles/siteplan.css`

**Interfaces:**
- Consumes: `siteplan.html` from Task 2.
- Produces: styled doc passing contrast + responsive.

- [ ] **Step 1: Write failing check**
Run: `test -f styles/siteplan.css && echo EXISTS || echo MISSING`
Expected: MISSING.
- [ ] **Step 2: Write minimal CSS**
```css
:root{--blue:#0B3D62;--cyan:#087E8B;--bg:#FFFFFF;--text:#222222}
*{box-sizing:border-box}
body{font-family:Roboto,sans-serif;color:var(--text);background:var(--bg);margin:0}
header{background:var(--blue);color:#fff;display:flex;align-items:center;flex-wrap:wrap;padding:.5rem 1rem;gap:.5rem}
header a,.hamburger{color:#fff}
nav{display:none;width:100%}
nav.show{display:block}
nav a{color:#fff;display:block;padding:.75rem 1rem;text-decoration:none}
main{max-width:900px;margin:0 auto;padding:1rem}
h1,h2{color:var(--blue)}
a{color:var(--cyan)}
.swatch{display:inline-block;padding:.25rem .5rem;border:1px solid #222;margin:.25rem}
.swatch.blue{background:#0B3D62;color:#fff}
.swatch.cyan{background:#087E8B;color:#fff}
.swatch.white{background:#fff;color:#222}
figure img{max-width:100%;height:auto;border:1px solid #222}
footer{background:var(--blue);color:#fff;text-align:center;padding:1.5rem 1rem}
@media(min-width:640px){nav{display:block}nav ul{display:flex;list-style:none;margin:0;padding:0;gap:1rem}}
```
- [ ] **Step 3: Verify colors applied + responsive**
Run: `grep -c "#0B3D62" styles/siteplan.css && grep -c "#087E8B" styles/siteplan.css`
Expected: >=1 each.
- [ ] **Step 4: Commit**
```bash
git add styles/siteplan.css
git commit -m "[WDD231] feat: style site plan with Blue Cyan scheme"
```

### Task 4: Verify + push

**Files:**
- Modify: none (verification only)
- Test: audit + Lighthouse + weight + console

- [ ] **Step 1: HTML validation (0 errors)**
Run: `python3 -m http.server 8000 & sleep 1; curl -s http://localhost:8000/siteplan.html | head -n 5; kill %1`
Expected: 200, doctype present. Then manual W3C https://validator.w3.org/ 0 errors.
- [ ] **Step 2: Weight + console check**
Run: `du -ck siteplan.html styles/siteplan.css images/wireframe-*.svg | tail -1`
Expected: total <500kB.
- [ ] **Step 3: Push**
```bash
git push origin main
git log --oneline -5
```
Expected: push succeeds, log shows [WDD231] commits.
