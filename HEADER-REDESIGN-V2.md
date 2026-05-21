# Header Redesign V2 — CTA destaque + Mobile/Tablet drawer (estilo Itaú Cultural)

Iteração 2 do redesign do header iniciado em HEADER-REDESIGN.md. O usuário pediu: "faltou o botao de inscrição em destaque também e eu quero a versao mobile e tablet a mesma coisa da do https://www.itaucultural.org.br/ também".

## O que foi adicionado nesta iteração

### 1. CTA "INSCREVA-SE" em destaque (desktop)
- Pill button vermelho (#b91c4b) com ícone + e label INSCREVA-SE em uppercase.
- Posicionado entre ACESSIBILIDADE e o grid de apps na linha 1 do header.
- Box-shadow vermelho suave, hover escurece para #9f1239 com leve elevação.
- Link para /inscricoes/.

### 2. Comportamento Mobile/Tablet (<= 1024px) — espelhando Itaú Cultural
- A linha 2 (menu horizontal) some.
- O subtítulo do logo some, o CTA pill desktop some e o ícone apps some (vai tudo para o drawer).
- O botão ACESSIBILIDADE perde o texto (vira só ícone).
- Aparece um botão HAMBÚRGUER preto no canto direito.
- Ao clicar, abre um drawer slide-in (transição cubic-bezier 320ms) com:
  - Topo: badge CIACS + "Menu" + botão X de fechar.
  - CTA INSCREVA-SE em destaque no topo do drawer (mesmo pill vermelho).
  - Lista vertical com todas as 10 páginas (Início, Sobre, História, Diretoria, Cursos, Notícias, Eventos, Galeria, Vídeos em Libras, Contato) — item ativo realçado em azul.
  - Grid 3 colunas com atalhos Acessibilidade / Buscar / Agenda.
  - Rodapé com "CIACS — Rio de Janeiro, RJ" + email ciacsrj@gmail.com.
- Backdrop escuro com fade-in, body scroll-lock enquanto aberto, ESC fecha.

### 3. Topbar preta preservada em mobile
- Removido um display:none do tema que escondia .ciacs-topbar em telas pequenas.
- Em mobile (<=640px) a topbar vira 2 linhas: esquerda em uma linha (Rio de Janeiro · RJ | email) e direita em outra (Vídeos em Libras | Acessibilidade | redes).

### 4. Mobile (<=640px) — ajustes finos
- Logo encolhe (sem subtítulo, badge menor).
- Botões action ficam 48-52px de largura.
- Padding interno do header inner reduz para 10×14.

## Breakpoints

| Largura | Comportamento |
|---------|---------------|
| >= 1025px | Header completo: topbar preta + linha 1 (logo + ACESSIBILIDADE + INSCREVA-SE + apps + calendar + search) + linha 2 (nav horizontal) |
| 641 - 1024 | Drawer mode: topbar preta + linha 1 só com (logo + ícone a11y + calendar + search + burger) |
| <= 640 | Mobile compact: topbar em 2 linhas, header compacto |

## Arquivos alterados

- Custom CSS post 364: +6 KB
  - bloco /* === HEADER MOBILE DRAWER + CTA === */ com .ic-cta, .ic-burger, media queries 1024/640, animação do .ciacs-drawer.
  - bloco /* hide old burger */ removendo o burger antigo (.ciacs-burger).
  - bloco /* keep topbar on mobile */ forçando .ciacs-topbar visível em telas pequenas + layout em 2 linhas no <=640px.
- Custom JS post 361: módulo IIFE HEADER_DRAWER_AND_CTA_MODULE que:
  - injeta o pill .ic-cta antes do apps grid.
  - injeta o .ic-burger ao final do bloco de ações.
  - injeta no body o #ciacs-drawer com nav, CTA, quick actions e foot.
  - faz wire-up de eventos (abrir/fechar, ESC, backdrop, Acessibilidade quick reusa o painel a11y existente, Buscar quick reusa o overlay de busca).

## Acessibilidade
- aria-controls e aria-expanded no burger.
- role=dialog + aria-modal no drawer.
- ESC fecha.
- Foco move para o primeiro item do drawer ao abrir.
- Body scroll-lock enquanto drawer está aberto.

## Validações visuais

- Desktop 1440px: CTA + INSCREVA-SE visível em vermelho, nav horizontal completa, hover dourado.
- Tablet/Mobile <=521px: burger preto no canto, topbar preta em 2 linhas, drawer abre com pill INSCREVA-SE no topo, todos os links com setas › à direita.

## Próximos passos sugeridos
- Replicar este mesmo header globalmente (já é, pois CSS/JS são globais).
- Animação sutil no burger -> X quando o drawer abre.
- Submenus expansíveis dentro do drawer (Sobre > História/Diretoria por exemplo).
