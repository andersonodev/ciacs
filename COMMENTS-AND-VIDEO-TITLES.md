# Iteração 28 — Sistema de Comentários + Títulos Reais dos Vídeos

**Commit:** 28 · **Data:** 22/05/2026

## Objetivos

1. Permitir que visitantes comentem nos posts (o tema `hostinger-ai-theme` não renderiza o template padrão de comentários do WordPress).
2. Substituir os títulos genéricos dos vídeos em `/videos-em-libras/` pelos títulos reais extraídos do canal oficial `@ciacscultura7959`.

---

## 1. Sistema de comentários custom — `CX_COMMENTS_V1`

### Contexto

Todos os 23 posts já tinham `comment_status: "open"` e as configurações de discussão do WP estão corretas (avatares ligados, threaded comments, sem registro obrigatório). Porém, o tema `hostinger-ai-theme` (block theme) não inclui o bloco de comentários no template `single`, fazendo com que `#comments` e `#respond` nunca apareçam no front-end.

### Solução

Foi criado um módulo JS auto-injetado em todo post (`body.single-post.postid-N`) que:

- Renderiza uma seção `<section id="cx-comments">` logo após o `<article>` do post.
- **Lista** os comentários consumindo `GET /wp-json/wp/v2/comments?post=N` (anônimo, público).
- **Envia** novos comentários via `POST /wp-comments-post.php` (endpoint clássico do WordPress que aceita submissões anônimas) — o REST `/wp/v2/comments` exige autenticação por padrão.
- Inclui **honeypot** (campo `website` invisível) como anti-spam leve.
- Faz **lembrete do autor** no `localStorage` para o usuário não precisar digitar nome/e-mail toda vez.
- Mostra avatares (gravatar quando disponível, iniciais quando não) e datas formatadas em pt-BR.

### Arquivos

- `wp-admin/post.php?post=361` (Custom JS) — append do bloco `CX_COMMENTS_V1` (base64-loaded para evitar problemas de escape no CodeMirror).
- `wp-admin/post.php?post=364` (Custom CSS) — `.cx-comments`, `.cx-cmt-list`, `.cx-cmt`, `.cx-cmt-form`, etc.

### Teste end-to-end realizado

Submissão via UI no post `/cha-julino-ciacs/` (id 290):

- Submit → `POST /wp-comments-post.php` → 302 redirect (sucesso).
- `GET /wp-json/wp/v2/comments?post=290` confirma comentário salvo com `status: approved`.
- Comentário de teste removido em seguida via DELETE REST.

### Recursos de design

- Cards com sombra e hover lift.
- Avatares em gradiente navy quando sem foto.
- Form em card branco com botão pill em gradiente navy.
- Estados `is-loading`, `is-ok`, `is-err` para feedback visual.
- Responsivo (single column em <560px).

---

## 2. Títulos reais dos 11 vídeos

Extraídos via **YouTube oEmbed API** (`https://www.youtube.com/oembed?url=...`) — confiável, sem necessidade de chave de API.

| # | ID | Título oficial |
|---|----|---------------|
| 1 | `k233CJftjf0` | Doação a CIACS |
| 2 | `klsv6COUP24` | Convocação da Assembleia Geral Ordinária CIACS |
| 3 | `y-Td46fswcQ` | 2ª Turma 2020.2 — Workshop "Surdo Pode Traduzir Música?" |
| 4 | `wAKJOhzSFo8` | Minicurso de StreamYard |
| 5 | `RrVC2jqYA9o` | 17ª Caminhada do Orgulho Surdo — Caminhada Virtual 2020 |
| 6 | `XgqzyK3fi7k` | Dialogando sobre Deaf Leaders (08.08.2020) |
| 7 | `p4IMmVkXHhU` | Curso de "Aprendizagem do Teatro Surdo" |
| 8 | `dEI5n6vH6Z0` | Turma 1: "Os Surdos podem traduzir Música?" — Workshop do Prof. Jhonatas Reis |
| 9 | `WXoEfatqQG4` | Para Surdocegos — dialogando sobre ASL SLAM |
| 10 | `5u7IliKZmVg` | Dialogando sobre ASL SLAM |
| 11 | `gWg84jPZpLw` | Curso de ASL (American Sign Language) |

### Página atualizada

`/videos-em-libras/` (page id 27) — reescrita via REST `PUT /wp/v2/pages/27` com cards usando os títulos reais + descrições humanas curtas.

### CSS adicionado para o grid

- `.cx-videos-section`, `.cx-vid-grid` (auto-fill minmax 300px), `.cx-vid-card` com hover lift, `.cx-vid-card__thumb` (aspect 16/9 + play overlay + scale on hover).

---

## Tamanhos atuais

- **CSS post 364:** ~84 KB
- **JS post 361:** ~60 KB

## Próximos passos sugeridos

- Recheiar Notícias (página 23) com hero cinemático + grid premium dos posts.
- Tilt 3D real com mousemove (perspective transform).
- Otimização mobile (testar em 375px).
- Performance: defer scripts, preload do hero bg, lazy-load real.
