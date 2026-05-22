# CIACS — Media Enrichment & Premium Gallery (Iteration 26)

> Apple/MoMA-level gallery, cinematic hero backgrounds, YouTube integration, scroll reveal, and counter animations.

## Goals (from user)

1. **Recheiar o site com mais videos e mais fotos com foco em Libras, mais animacoes, scroll, supreender o cliente final.**
2. **Galeria: as fotos estao muito jogadas, feia sem tratamento — pesquise refencias de galeria na internet para esse tipo de site e implemente.**

## References studied

- **Apple Newsroom Gallery** — masonry, refined image hover with subtle zoom and dark caption overlay
- **MoMA Collection** — clean grid, generous spacing, lightbox with keyboard navigation
- **Pinterest masonry** — variable-height columns, CSS `column-count` instead of JS layout
- **Behance / Dribbble** — card hover micro-interactions, gold ratio between gap and radius

## Premium Gallery — implementation

### Layout
- Replaced rigid 3-col WP grid with **CSS columns masonry** (`column-count: 3`, gaps 18px)
- Natural image aspect ratios preserved (no cropping / no `is-cropped` distortion)
- Responsive: 3 columns → 2 columns (≤980px) → 1 column (≤560px)

### Image treatment
- Subtle saturation/contrast filter (`saturate(.96) contrast(1.02)`) for consistency
- On hover: `scale(1.04)`, increased saturation/contrast, soft shadow lift
- Dark gradient overlay appears on hover with white figcaption (auto-generated from `alt`)
- Smooth 1.1s cubic-bezier transitions inspired by Apple's hover language

### Filtros por época
Five intelligent categories auto-detected from image `alt` text and filename:
- **Todas** (30)
- **1983–2002 · Início** (5) — fotos do acervo histórico
- **2003–2015 · Consolidação** (2)
- **2016–hoje · Atualidade** (22) — grosso do acervo recente
- **Marca & identidade** (1) — logos/banners
- **Parceiros** — separated when applicable

Pill-style filter buttons with count badges, `aria-pressed` state, smooth fade transitions.

### Lightbox
Custom lightweight lightbox (no deps), behaviors:
- Click any image → fullscreen view with `backdrop-filter: blur(8px)` over `rgba(8,12,28,.94)`
- Photo opens with smooth opacity + scale 0.98→1 transition
- Caption auto-populated from `alt` + position counter (e.g., "5 / 30")
- Navigation: prev/next circular buttons, **Esc** to close, **←/→** arrow keys
- Close button rotates 90° on hover (delight detail)
- Respects active filter — navigates only through visible items
- Mobile-friendly: smaller buttons positioned inside viewport on screens ≤720px

## Home — enrichment

Added 3 powerful new sections + reveal animations on 8 existing sections:

### 1. cx-mediastrip (faixa de fotos rolando)
- Infinite horizontal scrolling carousel of 11 acervo photos (duplicated for seamless loop)
- 60s smooth animation, **pause on hover**
- 280×200px cards with rounded corners + subtle shadow
- Each photo zooms on hover
- Respects `prefers-reduced-motion` (stops animation)

### 2. cx-video-grid (YouTube embeds)
6 video cards from `@ciacscultura7959` with REAL thumbnails (`hqdefault.jpg` from YouTube CDN):
- Doação a CIACS (`k233CJftjf0`)
- Surdo Pode Traduzir Música? (`y-Td46fswcQ`)
- Assembleia Geral Ordinária (`klsv6COUP24`)
- Vídeo institucional CIACS (`wAKJOhzSFo8`)
- Encontro da comunidade surda (`RrVC2jqYA9o`)
- Arte e Libras no CIACS (`p4IMmVkXHhU`)

Click-to-play: card content replaced inline by autoplay `<iframe>` (no page navigation, no popup).

### 3. cx-reveal on existing v2 sections
Added `cx-reveal` class to: stats, feature, pillars, video-band, news, quote, archive, faq, social. Sections fade-up smoothly as user scrolls.

## Vídeos em Libras (page 27) — full redesign

- Cinematic hero with sign-language Pexels photo background + dark gradient
- Animated counter stats: **48+** vídeos, **700** inscritos, **2020 → hoje**
- Grid of **11 real videos** from the YouTube channel
- Navy section: "Libras como **primeira** língua" + checklist
- Magenta CTA: "Sugerir vídeo / Visite o canal"

## Cinematic hero backgrounds (pages 6, 19, 20, 24, 27)

All internal heroes upgraded with photographic background + dark overlay:
- **Sobre (6)** — pessoa lendo em ambiente bibliotecário
- **História (19)** — natureza/céu (representando passagem do tempo)
- **Diretoria (20)** — equipe reunida
- **Eventos (24)** — encontro cultural
- **Vídeos (27)** — pessoa em videoconferência

Hero gains: `.cx-hero--media` class + `.cx-hero__bg` div with parallax JS (background scrolls 0.18x of viewport).

## CSS — new system (~11 KB)

Tokens and utilities added to post 364:

```css
/* New utilities */
.cx-reveal           /* generic fade-in-up */
.cx-reveal--left     /* slide from left */
.cx-reveal--right    /* slide from right */
.cx-reveal--zoom     /* zoom-in */
.cx-reveal[data-delay="1-5"]  /* staggered */

.cx-mediastrip       /* infinite horizontal carousel */
.cx-video-grid       /* responsive video card grid */
.cx-video-card       /* hover-lift video card with play button */

.cx-lightbox         /* fullscreen photo viewer */
.cx-gallery-filters  /* pill filter chips */

.cx-hero--media      /* hero with background photo */
.cx-hero__bg         /* parallax bg layer */
```

## JS — new modules (~10 KB)

Two new IIFEs added to post 361:

### CX_GALLERY_V1
- `initReveal()` — IntersectionObserver-based scroll-in animations
- `initCounters()` — easeOutCubic counter from 0 → target on viewport entry
- `initParallax()` — `requestAnimationFrame`-throttled bg transform
- `buildGalleryItems()` — auto-categorize by `alt`/`src`, add `figcaption`
- `injectFilters()` — render filter chips, manage `aria-pressed` + visibility
- `initLightbox()` — full keyboard navigation, image preload, visible-only cycling

### CX_SAFETY_V1
- `safetyReveal()` — fallback: reveal anything above-the-fold on scroll/load (catches sections that scrolled past before observer attached)
- `bindVideoCards()` — click/keyboard → swap thumbnail with YouTube autoplay iframe

## Accessibility

- All decorative bgs marked `aria-hidden="true"` or pure CSS
- Lightbox is a `role="dialog"` with `aria-modal` + descriptive aria-label
- Video cards become `role="button"` with `tabindex="0"` + Enter/Space handlers
- `prefers-reduced-motion` disables: scroll reveal animation, infinite carousel, parallax
- Filter chips use proper `aria-pressed` + count badges
- Image fallback: figcaption auto-populated from `alt` (never empty UI)

## Files modified

- **Custom CSS post 364**: +11.0 KB (72.8 KB total)
- **Custom JS post 361**: +12.3 KB (50.4 KB total)
- **Page 5 (Início)**: +8.4 KB (mediastrip + 6 videos + cx-reveal on 8 sections)
- **Page 6 (Sobre)**: +181 B (cx-hero--media + bg)
- **Page 19 (História)**: +181 B
- **Page 20 (Diretoria)**: +181 B
- **Page 24 (Eventos)**: +181 B
- **Page 27 (Vídeos em Libras)**: full rewrite — 11 video cards + counter + navy section + CTA

## QA — visual verification

Validated on front-end with cache-bypass `?vh=18`:
- ✅ Galeria masonry (3-col, responsive)
- ✅ Filtros funcionando (5 categorias com contagem real)
- ✅ Lightbox abrindo, navegando, fechando (clique, Esc, ← →)
- ✅ Hover overlay com figcaption funcional
- ✅ Home: mediastrip rolando, vídeos com thumbnails reais
- ✅ Cinematic heroes em Sobre, História, Vídeos
- ✅ Reveal animations dispararam corretamente após adicionar fallback
- ✅ Topbar preta + INSCREVA-SE + VLibras preservados em todas as páginas
- ✅ Mobile: galeria colapsa para 1 coluna, botões do lightbox menores

## Known polish opportunities (next iteration)

- Adicionar mais 3-4 fotos por episode/evento (acervo)
- Substituir títulos genéricos dos vídeos pelos títulos reais (consulta direta no YouTube)
- Adicionar parallax também na Galeria hero (atualmente flat blue)
- Considerar lazy-load nas fontes do mediastrip (já é `loading="lazy"` mas duplicado)
- Migrar cx-hero--media para a Galeria também (atualmente azul sólido)

---

**Commit 26 · 2026-05-22**
