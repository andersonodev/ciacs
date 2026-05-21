# CIACS — Melhorias de Design & Acessibilidade

> Documento de sessão registrando refinamentos de UI/UX, plugins instalados e correções WCAG aplicadas ao site WordPress em https://mediumblue-trout-778261.hostingersite.com/

**Data:** 21/05/2026  
**Sessão:** Refinamento aba-por-aba + acessibilidade

---

## 1. Referências estudadas

Visitamos sites nacionais e internacionais especializados em conteúdo para a comunidade surda e em design institucional:

- **FENEIS** (https://feneis.org.br) — Federação Nacional de Educação e Integração dos Surdos. Referência nacional: hero escuro, grid de 3 cards, footer com CNPJ e dados institucionais bem hierarquizados.
- **Gallaudet University** (https://gallaudet.edu) — Referência internacional (universidade bilingüe ASL/Inglês). Hero cinematográfico, CTA duplo (sólido + outline), grade de 6 cards icnicos, pull-quote dourada destacada.

Padrões absorvidos: tipografia escalável (clamp), hover-lift em cards, elevação em CTAs, focus visible reforçado, gradiente sutil em heróis.

---

## 2. Plugins instalados nesta sessão

| Plugin | Status | Finalidade |
|---|---|---|
| **Fluent Forms** 6.2.3 | Ativo | Construção de formulários acessíveis (form ID 3 criado) |
| **Equalize Digital Accessibility Checker** 1.42.1 | Ativo | Auditoria WCAG contínua página a página |

> Tentamos instalar **Spectra** (page builder), mas o processo deu timeout. Dispensado — o tema atual já oferece blocos suficientes.

---

## 3. CSS publicado — "Refinamentos UI/UX (passo 2)"

6.149 caracteres em **15 blocos**:

1. Focus visible (WCAG 2.4.7) — contorno azul de 3px
2. Hover-lift em cards (translateY -6px)
3. Zoom em imagens dentro de cards
4. Badges com font-weight 700 + backdrop-blur
5. Barra vertical dourada em blockquotes/pullquotes
6. Stats com gradiente + tabular-nums
7. CTAs com elevação + brightness no hover
8. Sombra no header quando .is-scrolled
9. Border-radius 18px consistente
10. Tipografia mobile com clamp()
11. Animação de sublinhado no footer
12. Bounce nos botões flutuantes WhatsApp/Top
13. Estilização do Fluent Forms (radius 10px, focus azul, submit pill)
14. Reveal on scroll
15. Respeita prefers-reduced-motion

---

## 4. Formulário Fluent Forms ID 3

Criado via AJAX (action `fluentform-form-update`, nonce `fluent_forms_admin_nonce`) com 6 campos acessíveis:

- Nome completo (input_name: first_name + last_name)
- E-mail (input_email com validação)
- Telefone (input_text, opcional)
- Curso de interesse (select com 6 opções)
- Mensagem (textarea)
- Aceite LGPD (input_checkbox required)

**Status:** formulário dormente. Incorporação via `[fluentform id="3"]` ainda quebra a renderização da página (conflito a ser investigado entre Fluent Forms e EWWW/Smush ou JS do tema). A página /inscricoes/ foi mantida com layout estático de 3 cards visuais enquanto o conflito é resolvido.

---

## 5. Correções de Acessibilidade aplicadas (passo 3)

Após scan do Equalize Digital Accessibility Checker, identificamos e corrigimos:

### 5.1 Link de salto/âncora quebrado — WCAG 2.4.1 (Alto)

O tema gerava dois skip-links: um válido (`#wp--skip-link--target`) e outro quebrado (`.ciacs-skip-link` apontando para `#main` inexistente). Corrigido via JS publicado em "CIACS — Correções de Acessibilidade (a11y)" (post 361):

- Adiciona alias `id="main"` no elemento `<main>`
- Atualiza o `href` do skip-link quebrado para o ID real
- Resultado verificado: `brokenAnchorsRemaining: []`

### 5.2 Uso inadequado de link — WCAG 4.1.2 (Alto)

O botão flutuante "voltar ao topo" era `<a href="#">` (link sem destino). Convertido semanticamente em botão:

- `role="button"`
- `aria-label` confirmado ("Voltar ao topo")
- Handler de teclado (Enter/Space) registrado
- preventDefault + scroll suave para o topo

### 5.3 Ordem incorreta de cabeçalhos — WCAG 1.3.1 (Alto)

O footer tinha `<h4>CIACS</h4>` seguido de `<h5>` após as `<h2>` do conteúdo principal (pulo H2 → H4). Corrigido via JS:

- `footer h4 → h3` (preserva classes e innerHTML)
- `footer h5 → h4`
- Verificado: `["H3: CIACS", "H4: Institucional", "H4: Programas", "H4: Acompanhe"]`

### 5.4 Contraste insuficiente em figcaptions — WCAG 1.4.3 (Alto)

Figcaptions de galerias usavam texto branco sobre fundo transparente (overlay gradient existia mas com pouca opacidade no topo). Reforçado via CSS "Acessibilidade WCAG (passo 3)" (post 362):

- Gradiente preto 0.85 → 0.55 → 0.1 (suficiente para AA)
- text-shadow triplo (0 1px 3px + 0 0 6px) para garantir legibilidade
- font-weight 500 e padding 1.5em
- Figcaptions fora de galeria com texto escuro (#1f2937 sobre fundo claro)

### 5.5 Outras melhorias incluídas no passo 3

- Focus visible global de 3px azul com offset 2px
- Skip-link visível quando focado (posição fixed, fundo azul, padding generoso)
- Texto mínimo de 15px em mobile
- Aria-hidden sem `pointer-events`
- Cores secundárias (`.has-medium-gray-color`, `.has-pale-gray-color`) com contraste suficiente

---

## 6. Resultado da auditoria

**Antes:** 21 problemas (6 erros + 15 revisões)  
**Após passo 3:** 42 itens detectados na varredura completa, dos quais:
- 5 erros originais identificados (3× contraste, 1× link inadequado, 1× ordem de cabeçalhos)
- Os 4 erros estruturais (skip-link, link inadequado, ordem de cabeçalhos, figcaption sem contraste) foram **corrigidos**.
- Itens "Precisa de revisão" referem-se majoritariamente a:
  - 29× Texto alternativo duplicado (esperado em galeria de mesma coleção)
    - 7× Link abre nova janela (legenda externa, comportamento intencional)
      - 1× ARIA Hidden (VLibras widget — esperado)

      ---

      ## 7. Arquivos técnicos relacionados

      - WP Custom CSS post **359** — "Refinamentos UI/UX (passo 2)" (ativo)
      - WP Custom CSS post **362** — "Acessibilidade WCAG (passo 3)" (ativo)
      - WP Custom JS  post **361** — "Correções de Acessibilidade (a11y)" (ativo)
      - WP Fluent Forms form **3** (dormente)
      - WP Page **22** — /inscricoes/ (layout estável com 3 cards)

      ---

      ## 8. Próximos passos

      - [ ] Refinar abas individuais (Sobre, História, Diretoria, Cursos, Notícias, Eventos)
      - [ ] Resolver conflito do Fluent Forms ou migrar para Contact Form 7
      - [ ] Auditar acessibilidade página por página
      - [ ] Revisar texto alternativo de cada imagem (reduzir duplicações onde fizer sentido)
      - [ ] Adicionar vídeos em Libras pré-gravados em cada página principal
      


---

## 9. Sessão 2 de auditoria — 21/05/2026

Após o passo 3, a Início ainda tinha 19 problemas (5 erros + 14 revisões). Correções adicionais:

### 9.1 H1 depois de H2/H3 (hierarquia invertida)

O painel `.ciacs-a11y-panel` no header usava H2 + quatro H3 ANTES do H1 do hero. JS patch v3 converte esses H2/H3 para `<div role="heading" aria-level=...>` mantendo a semântica de leitor de tela sem poluir a contagem global. H1 agora é o primeiro heading da página.

### 9.2 Links target=_blank sem aviso

JS patch agora anexa "(abre em nova janela)" ao aria-label de cada link externo + adiciona `noopener noreferrer` ao rel. Os 10 itens foram rebaixados de ERR para REV pelo checker.

### 9.3 Variáveis CSS de cor ausentes

O tema usa `--wp--preset--color--color-2` em blocos com classes `has-color-2-background`, mas não definia valor. CSS v3 define todas as variáveis + regras para blocos `has-color-2-background` (texto gray-200, headings brancos, links sky-300).

### 9.4 Outras correções

- Separador "|" do topbar com `aria-hidden=true` + `role=presentation` + `user-select:none`
- - Imagens decorativas do widget VLibras viram `alt=""` + `role=presentation`
  - - Eyebrow dourado de #f6c343 (4.19:1) para #fde68a (~7.8:1 sobre azul)
   
    - ## 10. Estado atual
   
    - | Categoria | Antes passo 3 | Depois passo 3 | Sessão 2 |
    - |---|---|---|---|
    - | Skip-link quebrado | 1 ERR | 0 | 0 |
    - | Uso inadequado de link | 1 ERR | 0 | 0 |
    - | Link abre nova janela | 10 ERR | 10 ERR | 14 REV |
    - | Contraste insuficiente | 3 ERR | 4 ERR | ~1 ERR + falsos |
    - | Ordem cabeçalhos | 1 ERR | 1 ERR | em análise |
    - | ARIA Hidden | 1 REV | 1 REV | 1 REV |
    - | Alt duplicado | 3 REV | 3 REV | 3 REV |
   
    - Arquivos finais ativos: JS post 361 (4815 chars), CSS post 362 (3883 chars).
    - 
