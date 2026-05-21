# Redesign do Header — estilo Itaú Cultural (mantendo a topbar preta CIACS)

Iteração após o redesign V2 da home estilo Gallaudet. O usuário pediu para copiar o header de https://www.itaucultural.org.br/ mantendo a mini-aba preta superior já existente no CIACS.

## O que foi feito

### 1. Topbar preta CIACS — PRESERVADA
A faixa preta superior (.ciacs-topbar) com Rio de Janeiro · RJ | ciacsrj@gmail.com | Vídeos em Libras | Acessibilidade | Instagram/YouTube/Facebook permanece intacta, com a mesma altura, cores e conteúdo.

### 2. Header principal (.ciacs-header) — reestruturado em 2 linhas estilo Itaú Cultural

Linha 1 (fundo branco):
- Logo CIACS à esquerda (badge azul gradiente + acento dourado \ idêntico ao \IC do Itaú) seguido do título "Centro de Integração de Arte e Cultura dos Surdos" + subtítulo "Integrando Arte e Cultura Surda desde 1989".
- À direita, quatro controles no padrão IC:
  - Botão "ACESSIBILIDADE" com ícone de círculo (mesmo padrão do IC). Reaproveita o painel a11y existente.
  - Ícone "apps" (grade 3x3) com hover cinza.
  - Botão calendário com fundo dourado (#f5b300) linkando para /eventos/ (equivalente ao calendário laranja do IC).
  - Botão lupa preto que abre overlay de busca em tela cheia (estilo modal IC).

Linha 2 (fundo cinza claro #f5f5f5):
- Menu horizontal: Início | Sobre | História | Diretoria | Cursos | Notícias | Eventos | Galeria | Contato.
- Item ativo e hover ganham underline dourado (3px) seguindo a linguagem visual do IC.

### 3. Comportamento sticky + shrink
- O header.site-header inteiro (topbar preta + header branco) gruda no topo (position: sticky).
- Ao rolar > 40px, o header branco encolhe levemente (padding menor, subtítulo do logo some) — mesmo efeito do IC.

### 4. Overlay de busca
- Acionado pelo botão lupa preto.
- Modal centralizado com input grande, label "BUSCAR NO CIACS" e dica "Pressione Enter para buscar — ESC para fechar".
- Submete em GET / com parâmetro s (compatível com WordPress search).

### 5. Acessibilidade
- ARIA labels em todos os botões.
- Tab order preservada.
- ESC fecha overlays.
- Foco automático no input ao abrir busca.

## Arquivos alterados

- WP Custom CSS post 364 (anteriormente "CIACS — Home estilo Gallaudet (v2)" — agora "CIACS — Home estilo Gallaudet (v2) + Header IC"): adicionado bloco /* === HEADER ITAU CULTURAL === */ e /* === HEADER STICKY FIX === */ (~2.3 KB).
- WP Custom JS post 361: adicionado módulo IIFE HEADER_ITAU_CULTURAL_MODULE (~3 KB) que reestrutura o DOM em runtime — injeta os 4 controles à direita, move a nav para uma nova linha .ciacs-header-bottom, instala overlay de busca e wire-up do botão Acessibilidade.

## Comparação com Itaú Cultural

| Elemento | Itaú Cultural | CIACS (após esta iteração) |
|----------|---------------|----------------------------|
| Logo | \IC ItaúCultural (laranja+preto) | \CIACS Centro de Integração... (gold+azul) |
| Botão à direita 1 | ACESSIBILIDADE | ACESSIBILIDADE |
| Botão à direita 2 | apps 3x3 | apps 3x3 |
| Botão à direita 3 | calendário laranja | calendário dourado |
| Botão à direita 4 | lupa preta | lupa preta |
| Linha 2 | menu horizontal cinza | menu horizontal cinza |
| Underline ativo | dourado | dourado |
| Sticky | sim, shrink | sim, shrink |

## Observação

Nenhum arquivo do tema foi tocado — toda a transformação é feita por CSS + JS injetado, então é reversível com 2 cliques (desativar os custom code).
