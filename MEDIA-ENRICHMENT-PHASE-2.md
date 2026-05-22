# CIACS — Media Enrichment Phase 2 (Iteration 27)

> Cinematic heroes everywhere · Real CIACS posters in mediastrips · YouTube workshops on Cursos · Animated counters on Home · Tilt micro-interactions.

## What was done

### 1. Cinematic heroes (3 more pages)
`cx-hero--media` with photographic background + dark gradient + parallax applied to:
- **Cursos (page 7)** — sala de aula com material colorido
- **Contato (page 8)** — montanhas (silencio + escuta)
- **Galeria (page 25)** — pessoa surda em retrato

All five previous pages already had this treatment (Sobre, Historia, Diretoria, Eventos, Videos em Libras). Now **all 8 internal pages** have cinematic heroes.

### 2. YouTube workshops on Cursos
Added a "Conhecendo o metodo" section with 3 video cards directly from `@ciacscultura7959`:
- Surdo Pode Traduzir Musica? (`y-Td46fswcQ`)
- Teatro surdo no CIACS (`dEI5n6vH6Z0`)
- Conversa em Libras (`5u7IliKZmVg`)

Plus a horizontal mediastrip with 6 acervo photos rolling infinitely below.

### 3. Real CIACS posters on Eventos
Inserted a mediastrip right after the hero with the actual historical posters from the media library:
- I Encontro Estadual de Arte e Cultura Surda
- Cartaz 27 de Setembro
- Cha Julino
- Setembro Azul 2016
- Cidade de Deus
- Festival Reims
- Companhia surda de teatro

These are not stock — they are CIACS originals from the migrated Webnode archive.

### 4. Comunidade strip on Contato
A mediastrip with 9 photos of activities before the CTA section. Used `mask-image` linear gradient to fade in/out at the edges.

### 5. Animated counters on Home stats
The "ciacs-stats-v2" section now uses `<span data-count-to="N">` instead of plain numbers. Counters animate 0 -> target on viewport entry with ease-out-cubic over 1.6s:
- 35 anos de historia
- 6 eras artisticas (1989-hoje)
- 48 videos no canal Ciacs Cultura
- 6600 seguidores no Instagram

Verified mid-animation: 15, 3, 21, 2891 -> final 35, 6, 48, 6600.

### 6. Tilt micro-interactions
`.cx-card` now lifts -6px and rotates -0.4 deg on hover (Apple's signature subtle tilt). `.cx-person` lifts -4px without rotation.

### 7. Smooth scroll + smart hides
- `html { scroll-behavior: smooth }` for in-page links (reduced-motion fallback).
- When the lightbox is open, floating WhatsApp + VLibras + scroll-top are hidden.

### 8. Mediastrip cinematic mask
`mask-image: linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)` on all mediastrips. Photos fade gracefully into the section background at the edges — Apple newsroom move.

### 9. cx-image-card + cx-bullets
New polished components for use in dark sections:
- `.cx-image-card` — rounded corner image with caption-on-gradient
- `.cx-bullets` — gold dot bullets with glow ring (light variant on dark backgrounds)
- `.cx-section-title--light`, `.cx-section-lead--light`, `.cx-eyebrow--gold` — text-on-dark utilities

## Files modified

- **Custom CSS post 364**: +2.9 KB (75.7 KB total)
- **Page 5 (Inicio)**: added `data-count-to` on 4 stat numbers
- **Page 7 (Cursos)**: +4.5 KB (hero--media + video section + mediastrip)
- **Page 8 (Contato)**: +4.0 KB (hero--media + mediastrip)
- **Page 24 (Eventos)**: +3.7 KB (mediastrip de cartazes)
- **Page 25 (Galeria)**: +181 B (hero--media)

## QA — visual verification

All validated on `?vh=20..23`:
- Cursos: hero cinematico + 3 videos do canal com thumbnails reais + mediastrip de acervo
- Contato: hero cinematico + mediastrip de comunidade + CTA
- Galeria: hero cinematico com retrato em background (mantem masonry + filtros + lightbox)
- Eventos: hero existente + mediastrip de cartazes historicos REAIS do acervo
- Home: contadores 0->target animados (35, 6, 48, 6600) + tudo o anterior intacto
- Tilt no hover dos cards de curso e eventos
- Mask fade nas bordas dos mediastrips
- Topbar + INSCREVA-SE + VLibras preservados em todas

## Status do site

8 paginas internas com sistema cx-* premium, todas com hero cinematografico, mediastrip e/ou videos onde fizer sentido. Home com 14 fotos rolando, 6 videos YouTube, 4 contadores animados. Galeria com 30 fotos em masonry + 5 filtros + lightbox. Videos em Libras com 11 cards do canal real.

**Commit 27 · 2026-05-22**
