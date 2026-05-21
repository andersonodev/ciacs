# Blog Audit & Accent Fix

> Iteração de auditoria do blog (Notícias) e correção de acentos no formulário de Inscrições.

## 1) Auditoria do Blog (/noticias/)

**Estado encontrado:**
- 23 posts publicados (22 herdados das migrações + 1 novo).
- Arquivo paginado funcionando (3 colunas × N linhas, sidebar visível).
- Categoria padrão era `Uncategorized` com 22 posts.

**Correções aplicadas:**
- Renomeada categoria `Uncategorized` (id=1) para **"Notícias"** via REST API.
- Slug ajustado para `noticias-cat` para não colidir com a página /noticias/.
- Os 22 posts antes mostrados como "UNCATEGORIZED" agora exibem badge "NOTÍCIAS".

**Polish de CSS adicionado** (`/* === CIACS BLOG NOTICIAS – polish === */`):
- Cards do arquivo com borda, sombra suave, hover com translateY.
- Titulagem em Source Serif Pro, hover muda para magenta CIACS.
- Data em uppercase letterspaced.
- Badge da categoria com pill azul CIACS.
- Tipografia do post único (max-width 720px, line-height 1.75).
- Blockquote com borda dourada e fundo creme.
- Imagens com border-radius e shadow.
- Paginação estilizada (números em pill, hover magenta).

## 2) Correção de Acentos – Formulário /inscricoes/

**Problemas encontrados (texto sem acentos) — TODOS corrigidos:**

| Antes | Depois |
| --- | --- |
| INSCRICOES ABERTAS | INSCRIÇÕES ABERTAS |
| Faca parte do CIACS | Faça parte do CIACS |
| Preencha o formulario | Preencha o formulário |
| ambiente bilingue (Libras e Portugues) | ambiente bilíngue (Libras e Português) |
| Resposta em ate 3 dias uteis | Resposta em até 3 dias úteis |
| Formulario de inscricao | Formulário de inscrição |
| sao obrigatorios | são obrigatórios |
| Selecione uma opcao | Selecione uma opção |
| Libras - basico/intermediario/avancado | Libras – básico/intermediário/avançado |
| sobre voce e o que voce procura | sobre você e o que você procura |
| Enviar inscricao | Enviar inscrição |
| Atendimento em Libras e Portugues | Atendimento em Libras e Português |

Aplicado via REST API `POST /wp/v2/pages/22` em duas rodadas.

## 3) EMOJI_FALLBACK_MODULE v2

Extensão do conversor emoji → SVG cobrindo +50 emojis adicionais (📦 👁️ 🔄 🌐 ⏱️ 📌 📘 📷 📝 📜 🎭 🎨 📅 💬 💡 ✨ 💪 🤝 💙 📞 ✉️ 🔗 ✅ ❌ ⚠️ ℹ️ 🎉 🏆 📊 🚀 🔥 etc.) que o mapa principal não tratava. Inclui retries em DOMContentLoaded, setTimeout(100/500/1500) e window.onload para vencer o WP emoji.js que injeta `<img>` tardiamente.

## 4) Resultado visual

- Single post agora mostra badge **NOTÍCIAS**, ícones SVG nos bullets, prosa centrada e legível.
- Arquivo /noticias/ com cards uniformes, hover suave, datas em caps, paginação polida.
- Form /inscricoes/ com 100% de acentos corretos em hero, labels, options, placeholder, botão e contato.

## 5) Stack atual

- CSS post 364: ~44.9 KB (+3.6 KB blog polish).
- JS post 361: ~37.1 KB (+9.9 KB FB module v2 com retries).
- 1 alteração de banco: categoria id=1 renomeada.
- 1 alteração de conteúdo: page 22 (Inscrições) com acentos corrigidos.

## 6) Próximos passos sugeridos

- Adicionar paginação "Anterior/Próximo" entre posts.
- Criar categorias temáticas reais (Eventos, Cursos, Memória) e recategorizar os posts.
- Adicionar imagens em destaque (featured image) aos posts.
- Instalar FluentSMTP para entrega confiável das inscrições.
- Adicionar honeypot/captcha leve no formulário (anti-spam).
