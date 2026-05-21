# Refatoração da Homepage CIACS — inspirada em Gallaudet University

> Documento da sessão que redesenhou a home do site CIACS com base na referência internacional https://gallaudet.edu/, criando um layout cinematográfico (hero vídeo + faixas modulares).

**Data:** 21/05/2026
**Referência:** Gallaudet University — https://gallaudet.edu/
**Site alvo:** https://mediumblue-trout-778261.hostingersite.com/

---

## 1. Nova estrutura da home (page ID 5)

A homepage foi reescrita do zero com 7 faixas modulares inspiradas no layout cinematográfico da Gallaudet, mantendo a identidade visual CIACS (azul + dourado + vermelho).

**Faixa 1 — Hero fullscreen com vídeo em loop.** Vídeo Pexels (licença livre) mostrando pessoa sinalizando em Libras, URL HD em videos.pexels.com/.../10373877-hd_1920_1080_30fps.mp4. Overlay diagonal escuro, eyebrow com nome institucional, título grande Libras no CIACS com acento dourado em itálico, lead descritivo e três CTAs (Nossos cursos vermelho, Conheça o CIACS outline branco, Vídeos em Libras text dourado). Wave SVG branca na base para transição suave.

**Faixa 2 — Stats row.** Quatro estatísticas com border-left dourado de 3px: 35+ anos de história, 1989 fundação, 100+ alunos formados, 50+ eventos culturais.

**Faixa 3 — Bloco 2-colunas Torne-se a melhor versão de si mesmo no CIACS.** Inspirado no Become the best version of yourself at Gallaudet. Título grande à esquerda + texto descritivo + CTA Inscreva-se à direita. Border-top dourado de 4px.

**Faixa 4 — Grid claro 3-cards.** Cursos / Eventos / Galeria com kicker, nome em caixa alta e seta dourada. Border-left dourado entre cards. Hover: background azul claro + translate-x 2px.

**Faixa 5 — Grid azul ilustrado 3-cards.** Aprenda Libras / Comunidade Surda / Seja Voluntário. Fundo azul profundo com pontos decorativos dourados (radial-gradient), no mesmo idioma visual do Gallaudet.

**Faixa 6 — News and Events.** Header em três colunas (título / subtitle / CTA Ver mais). Grid de três cards com imagem Pexels, tag pill amarelo, título e link Leia mais. Hover: card sobe 4px com shadow.

**Faixa 7 — CTA grande final.** Fundo gradiente azul. Title Faça parte da nossa história. Lead descritivo + botão lg vermelho Inscreva-se agora.

---

## 2. Posts WordPress criados/atualizados

Page 5 (Início) — conteúdo HTML reescrito (6.9 KB) via REST API. Publicada.

Custom CSS post 364 — CIACS — Home estilo Gallaudet (v1) (9.0 KB). Active.

Classes CSS criadas: ciacs-hero-v2 (com submodifiers media, video, overlay, content, eyebrow, title, accent, lead, actions, wave), ciacs-stats-v2 + ciacs-stat, ciacs-best-v2, ciacs-grid-v2 (variantes --light e --dark) + ciacs-grid-v2__card, ciacs-news-v2 + ciacs-news-card, ciacs-cta-v2, ciacs-btn (variantes --primary, --ghost, --text, --lg).

Variáveis CSS unificadas: --ciacs-blue #1d4ed8, --ciacs-blue-deep #1e3a8a, --ciacs-red #b91c4b, --ciacs-gold #f5b300, --ciacs-ink #0f172a, --ciacs-muted #475569, --ciacs-soft #f8fafc.

---

## 3. Decisões de design

Vídeo via hotlink Pexels economiza espaço no Hostinger e usa o CDN do Pexels (rápido globalmente). Tipografia escalável com clamp() em todos os títulos para responsividade fluida. Hero antigo .ciacs-hero mantido no HTML antigo, ocultado via display:none para compatibilidade. Pontos decorativos do grid escuro são 4 radial-gradient em rgba dourado e branco, lembrando o fundo ilustrado do Gallaudet sem precisar de SVG externo.

---

## 4. Acessibilidade preservada

Uso de aria-label em todas as section. aria-hidden=true em decorativos (vídeo, overlay, wave SVG, setas). prefers-reduced-motion reduce esconde o vídeo e mostra um gradiente azul. Foco visível: outline dourado 3px com offset 3px em botões, cards e links. Contraste de texto sobre overlay escuro >= 7:1, eyebrow #fde68a sobre overlay ~7.8:1. H1 único Libras no CIACS, hierarquia H2 → H3 respeitada em todas as faixas.

---

## 5. Licença Pexels

Vídeos e fotos do Pexels podem ser usados gratuitamente para fins comerciais e não-comerciais, sem necessidade de atribuição obrigatória (recomendado dar crédito). Fonte: https://www.pexels.com/license/

Mídia usada — Vídeo hero: https://www.pexels.com/video/doing-sign-language-10373877/. Imagens News and Events: https://images.pexels.com/photos/5184961/, https://images.pexels.com/photos/4127449/, https://images.pexels.com/photos/8923037/.

---

## 6. Próximos passos sugeridos

Substituir as imagens placeholder de News and Events por fotos reais do CIACS (subir à Biblioteca de Mídia). Conectar a faixa News and Events ao feed real de Notícias (custom post type ou query manual). Adicionar um vídeo em Libras embedado abaixo do hero (versionando o conteúdo para a comunidade surda). Criar variações de hero para as outras páginas (Sobre, Cursos) seguindo o mesmo idioma visual.
