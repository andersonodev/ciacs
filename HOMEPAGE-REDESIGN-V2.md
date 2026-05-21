# Homepage CIACS — Redesign V2 (inspirado em Gallaudet)

> Iteração V2 da homepage, agora muito mais próxima do layout cinematográfico do https://gallaudet.edu/ e com TODOS os conteúdos institucionais do site original preservados.

**Data:** 21/05/2026
**Referência:** Gallaudet University
**Posts atualizados:** Page 5, Custom CSS 364, Custom JS 361

---

## 1. O que mudou na V2

A V1 tinha apenas 7 faixas e perdia conteúdos institucionais (missão, 4 pilares, acervo histórico, FAQ, redes sociais, depoimento). A V2 recupera tudo isso e adiciona componentes que faltavam: carrossel de notícias com setas e auto-advance, segunda faixa com vídeo de fundo + opacidade, pull-quote dourada inline, bloco 2-col imagem+texto, faixa de quote escura, accordion FAQ.

Também foi corrigido o problema de **legibilidade no hover** dos cards: antes o texto perdia contraste; agora o card vira azul deep com texto branco em hover.

---

## 2. Estrutura completa (13 faixas)

**Faixa 1 — Hero vídeo fullscreen.** Vídeo Pexels 10373877 em loop, overlay diagonal, eyebrow 35 anos desde 1989, título Arte e cultura surda no CIACS, lead institucional, 3 CTAs.

**Faixa 2 — Stats row 4-col.** 35+ anos, 6 eras artísticas, 48 vídeos no canal, 6.6K seguidores Instagram.

**Faixa 3 — Feature 2-col com pull-quote.** Imagem à esquerda + Acessibilidade é a nossa prioridade + bloco com citação destacada em dourado + dois CTAs (Inscreva-se + Saiba mais).

**Faixa 4 — 4 pilares.** Como atuamos: 01 EDUCAÇÃO, 02 CULTURA, 03 ACESSIBILIDADE, 04 COMUNIDADE — cards brancos com border-top que destaca em dourado no hover.

**Faixa 5 — Video band SONHE ALTO PROSPERE AQUI.** Segundo vídeo Pexels 10374288 com opacidade 0.55 + overlay azul gradiente, título gigante em uppercase branco, CTA Explorar cursos.

**Faixa 6 — Grid claro 3-cards.** Cursos / Eventos / Galeria. Hover azul deep com texto branco e kicker dourado.

**Faixa 7 — Grid azul ilustrado 3-cards.** Aprenda Libras / Comunidade Surda / Seja Voluntário.

**Faixa 8 — News and Events.** Carrossel grande com 3 slides + setas circulares + dots + auto-advance 6s (pausa em hover/foco) + grade de 4 cards menores com data e tag.

**Faixa 9 — Pull-quote dark gigante.** Citação A Libras não é só uma língua sobre fundo azul profundo + assinatura dourada.

**Faixa 10 — Acervo vivo.** Histórias do nosso percurso: 3 cards de matérias históricas (nova diretoria 2020-2022, jantar 29 anos, comemoração 29 anos) com bloco de data azul deep + mês dourado.

**Faixa 11 — FAQ accordion.** 5 perguntas com summary + icon +/- dourado animado.

**Faixa 12 — Redes sociais.** Fundo azul ilustrado com 3 cards (Instagram @ciacs.artes, Facebook @ciacs.comunidade, YouTube @ciacscultura7959), abrem em nova janela com aria-label.

**Faixa 13 — CTA final dupla.** Faça parte da nossa história com 2 botões (Inscreva-se agora vermelho + Fale com o CIACS outline).

---

## 3. Carrossel — código JS adicionado

O Custom JS post 361 ganhou um módulo IIFE que procura [data-ciacs-slider], gera dots dinamicamente, conecta as setas prev/next, escuta scroll para atualizar dots e faz auto-advance a cada 6 segundos com pausa em mouseenter/focusin. Usa CSS scroll-snap nativo para suavidade.

---

## 4. Correção de legibilidade em hover

O problema relatado era que ao passar o mouse o texto ficava ilegível. A causa: hover original usava background rgba(29,78,216,.06) (azul translucido suave) mas o texto continuava escuro. Solução: no hover dos cards do grid claro o fundo vira var(--ciacs-blue-deep) (#1e3a8a) e TODOS os textos viram branco (kicker em dourado suave e seta em branco). Adicionei também um bloco de overrides com !important para garantir contraste nas faixas com vídeo de fundo.

---

## 5. Música visual extra: faixa de vídeo com opacidade

A nova .ciacs-video-band (faixa SONHE ALTO PROSPERE AQUI) usa um vídeo HD do Pexels com opacity 0.55 sob um overlay gradiente azul, exatamente no estilo do Dream Bold Thrive Here do Gallaudet. Também foi mantido o efeito prefers-reduced-motion que esconde o vídeo e mostra um gradiente estático para usuários com preferência de movimento reduzido.

---

## 6. Posts WordPress alterados

Page 5 (Início) — HTML reescrito (19.5 KB) com 13 faixas semanticamente marcadas.

Custom CSS post 364 — CSS expandido para 23 KB cobrindo: hero, stats, feature 2-col, pull-quote, pilares 4-col, video band, grids claro/escuro, news com slider, quote, archive, FAQ accordion, social cards e CTA, além de regras de override para hover e contraste.

Custom JS post 361 — adicionado módulo do carrossel (~1.5 KB) em IIFE com auto-advance, dots, setas e pausa em foco/hover.

---

## 7. Acessibilidade verificada

H1 único (Arte e cultura surda no CIACS). aria-label em todas as 13 seções. aria-hidden em decorativos. role region + aria-roledescription carrossel no track. aria-label nas setas e nos dots. Foco visível dourado em botões, cards, setas e summary do FAQ. prefers-reduced-motion respeitado em ambos vídeos e no scroll-snap.

---

## 8. Próximos passos

Substituir as imagens placeholder dos cards de News and Events por fotos reais do CIACS. Conectar o carrossel a um custom post type Notícia. Adicionar um vídeo em Libras flutuante explicando a home. Aplicar o mesmo idioma visual nas páginas Sobre, História, Cursos e Eventos.
