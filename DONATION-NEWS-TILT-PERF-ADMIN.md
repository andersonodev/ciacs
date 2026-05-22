# Iteração 29 — Página de Doação + Notícias Premium + Tilt 3D + Mobile + Performance + Admin Panel

**Commit:** 29 · **Data:** 22/05/2026

## Objetivos

1. Criar página **Doe ou Associe-se** (`/apoie/`) com referências internacionais (Gallaudet, Feneis, ONGs de cultura surda).
2. Recheiar **Notícias** (`/noticias/`, page id 23) com hero cinemático e grid premium dos 22 posts.
3. **Tilt 3D real** com mousemove em cards.
4. **Otimização mobile** (375–480px) com tipografia e gestos touch-friendly.
5. **Performance**: lazy-load automático em todas as imagens, preload do hero bg.
6. **Bônus**: painel admin in-site para moderar comentários + threading (responder).

---

## 1. Página /apoie/ (id 393)

Criada via REST `POST /wp/v2/pages` com slug `apoie` e estrutura:

- **Hero cinemático** com photo bg, eyebrow, título e dois CTAs ("Doar agora" e "Quero ser sócio(a)").
- **Bloco de impacto**: 4 contadores em cards (35+, 6, 48, 6.600+).
- **Doação avulsa** com 4 tiers:
  - **Apoiador** R$ 25, **Mais popular** R$ 50 (destacado em navy), **Patrono** R$ 100, **Outro valor** (input).
  - Cada botão abre **modal PIX** com QR Code (gerado via api.qrserver.com), chave PIX e botão copiar.
- **Como realizar sua doação** com 3 cards: PIX (chave + copy button), Transferência bancária (BB), Cartão/PicPay (WhatsApp link).
- **Programa de sócios** em fundo navy com 3 planos (Solidário R$20, Cultural R$40 destacado em amarelo, Patrono R$100).
- **Formulário de associação** que envia via `wp-comments-post.php` (mesma técnica usada para comentários). Submissões ficam moderadas e podem ser revisadas no painel admin.
- **FAQ** com 6 perguntas em `<details>` (é ONG?, deduzão fiscal, transparência, doação de materiais, cancelamento, patrocínio).

### Referências consultadas

- Gallaudet University: hierarquia visual clássica, tiers de doação, mensagem em primeira pessoa.
- Feneis / INES: tom institucional + acessibilidade em Libras.
- ONGs internacionais (RNID, NAD): trust signals, FAQ, transparência financeira.

## 2. Notícias (id 23)

Reescrita via REST `POST /wp/v2/pages/23`:

- Hero cinemático com mesma estrutura das outras páginas.
- **6 chips de filtro**: Todas, Caminhada, Eventos, Diretoria, Aniversários, Cursos.
- Grid auto-fill 320px com **23 cards** (22 posts + estatuto), cada um com:
  - Featured image (com fallback para imagem do acervo CIACS quando o post não tem).
  - Badge de categoria (inferida via heurística de título).
  - Data formatada em pt-BR.
  - Excerpt de 160 caracteres.
  - CTA "Ler matéria →".
  - **Tilt 3D** ao hover (perspective + mousemove).

### Módulo `CX_NEWS_V1`

Consome `/wp-json/wp/v2/posts?per_page=100&_embed=wp:featuredmedia` e renderiza. Filtros funcionam puramente no client.

## 3. Tilt 3D real (`CX_TILT_3D_V1`)

- Aplicado a `.cx-vid-card`, `.cx-news-card`, `.cx-tier`, `.cx-mem-card`, `.cx-impact__card`.
- Máximo de rotação: 7° nos eixos X e Y.
- Perspective de 900px.
- Glow radial seguindo o cursor (`--cx-mx`, `--cx-my` CSS vars).
- Respeita `prefers-reduced-motion: reduce` (desativa).
- Detecta `pointer: coarse` (mobile/tablet) e não ativa.

## 4. Mobile (375–480px)

Media queries dedicadas:

- Títulos do hero: 34px com line-height 1.1.
- CTAs do hero empilhados verticalmente (`flex-direction:column`).
- Todos os botões tácteis com `min-height: 44px` (recomendação WCAG).
- Filter chips com scroll horizontal touch-friendly.
- Formulários com row colapsando em coluna única.
- Modal PIX com QR menor (180px) e padding reduzido.

## 5. Performance

No módulo `CX_ADMIN_PERF_REPLY_V1`:

- **Lazy-load automático**: itera todas as `<img>` sem `loading` e adiciona `loading="lazy"` + `decoding="async"`.
- **Preload hero**: lê `[data-page-bg]` e injeta `<link rel="preload" as="image" fetchPriority="high">` no `<head>`.
- Verificado: 6 de 8 imagens com `loading=lazy` e link preload do hero ativo.

## 6. Admin panel in-site

Botão circular 💬 fixo no canto inferior direito (só visível para usuários logados — detectado via `#wpadminbar` ou class `logged-in`).

Clique abre painel que:

- Pega nonce via `/wp-admin/admin-ajax.php?action=rest-nonce`.
- Lista os últimos 50 comentários (`status=hold,approve&context=edit`).
- Cada item tem badge de status (hold/approved/spam) + botões **Aprovar**, **Spam**, **Apagar**.
- Ações chamam `POST /wp/v2/comments/{id}` (status) ou `DELETE` (apagar). Animação de fade-out ao moderar.

## 7. Threading (responder)

Botão **↩ Responder** adicionado a cada comentário renderizado. Clique abre form inline com nome/e-mail/mensagem. Submissão via `wp-comments-post.php` com `comment_parent` apontando para o ID do comentário pai. CSS prepara `.cx-cmt-children` com left border + indentação.

## Tamanhos atuais

- **CSS post 364:** ~107 KB (+22 KB)
- **JS post 361:** ~92 KB (+33 KB)
- **Páginas no site:** 15 (era 14 + nova /apoie/).

## Próximos passos sugeridos

- Adicionar `/apoie/` ao menu principal de navegação (atualmente acessada via link direto).
- Cadastrar CIACS como OSCIP para permitir dedução fiscal das doações.
- Integrar gateway de cartão (Pagar.me, Stripe, Mercado Pago) para doação recorrente.
- Substituir QR PIX placeholder por QR PIX real (BR Code com EMV).
- Painel admin: filtros por status e busca textual.
