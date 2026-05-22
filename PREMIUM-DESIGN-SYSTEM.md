# CIACS — Premium Design System v1

> Sistema de design unificado inspirado em Apple, Stripe, Pentagram, MoMA, Gallaudet e Itaú Cultural, aplicado às páginas Sobre, História, Diretoria, Cursos, Eventos, Vídeos em Libras, Galeria e Contato.

## 1) Princípios

- Cinematográfico: hero escuro com gradiente radial + starfield sutil; título gigante em serifa com palavra-chave em itálico dourado.
- Editorial: grid 12-col, max 1180px, prosa centrada em 680px com line-height 1.75.
- Ritmo claro/escuro: seções alternadas (light / mist / cream / dark / navy) para guiar a leitura.
- Micro-animações: .cx-fade com IntersectionObserver — fade-in suave ao entrar na viewport.
- Tipografia dupla: Source Serif Pro para títulos + system sans (SF Pro / Inter) para corpo.
- Acessibilidade: alto contraste, foco visível, breadcrumbs sempre presentes, h1 único.

## 2) Tokens

- --cx-navy:#0b3b75; --cx-navy-deep:#06234a
- --cx-magenta:#b91c4b; --cx-gold:#f3b54a
- --cx-ink:#0b1320; --cx-cream:#faf7f1; --cx-mist:#f4f6fb
- --cx-radius:14px; --cx-radius-lg:22px
- --cx-serif (Source Serif Pro); --cx-sans (SF Pro / Inter)

## 3) Componentes

- **cx-hero** — hero cinematográfico com kicker dourado, título gigante, lead, meta, CTAs.
- **cx-crumbs** — breadcrumb com separador sutil.
- **cx-btn** — primary (magenta), ghost (transparente), solid (preto), light (branco).
- **cx-section** — modificadores: light, mist, cream, dark, navy.
- **cx-eyebrow + cx-section-title + cx-section-lead** — ritmo padrão de cabeçalho de seção.
- **cx-prose** — prosa editorial (680px, line-height 1.75).
- **cx-grid** — 2/3/4 cols, 60/40, 40/60, responsivo.
- **cx-card** — base + variants dark, feature.
- **cx-stats** — bloco navy com números dourados.
- **cx-timeline** — linha vertical gradient gold→magenta com círculos.
- **cx-person** — card de diretoria com avatar gradiente.
- **cx-cta** — strip magenta no fim de cada página.
- **cx-media / cx-video-grid / cx-gallery** — media containers.
- **cx-fade** — animação de entrada via IntersectionObserver.

## 4) Páginas redesenhadas

### Sobre (page 6)
Hero: "Arte, cultura e *Libras* desde 1989." — Quem somos, Missão (3 cards), Stats, Princípios, CTA.

### História (page 19)
Hero: "Quatro décadas *fazendo cultura* em Libras." — Linha do tempo com 9 marcos (1983 → hoje), stats e CTA.

### Diretoria (page 20)
Hero: "Eleita em *assembleia*." — 6 cards de pessoa (mandato 2020–2022), governança, CTA sócio.

### Cursos (page 7)
Hero: "Aprender em Libras, *com* e *por* surdos." — 6 cards de curso, metodologia, CTA.

### Eventos (page 24)
Hero: "A cultura surda em *movimento*." — 9 cards (Setembro Azul, Caminhada, Chá Julino, Encontros, Aniversários, Clin d'Œil, Fórum INES, Sencity UFRJ).

### Vídeos em Libras (page 27)
Hero: "A nossa *palavra* é em sinais." — Grid de 6 vídeos, seção Acessibilidade (navy), canal CTA.

### Galeria (page 25)
Hero "A memória do CIACS em *imagens*." + galeria nativa do WP preservada + CTA final.

### Contato (page 8)
Hero: "Queremos te *ouvir*." — 6 cards de canal (e-mail, WhatsApp, YouTube, Instagram, Facebook, localização), atendimento bilíngue, CTA imprensa.

## 5) JS adicionado

- **CX_FADE_OBSERVER** — IntersectionObserver para fade-in suave de .cx-fade. Reaplica em scan tardio (800ms) para conteúdo inserido depois.

## 6) Stack atual

- CSS post 364: ~61.8 KB (+16.8 KB do design system).
- JS post 361: ~38.1 KB (+0.9 KB do fade observer).
- 8 páginas redesenhadas (6, 7, 8, 19, 20, 24, 25, 27).
- Header, INSCREVA-SE pill, topbar preto, VLibras e WhatsApp intactos.

## 7) Próximos passos sugeridos

- Trocar avatares "CIACS" da Diretoria por iniciais reais quando disponíveis.
- Adicionar embeds reais (YouTube IDs) nos cards de vídeo.
- Aplicar o sistema cx-* à home, integrando ao hero atual.
- Adicionar imagens hero em algumas páginas (foto + overlay escuro).
