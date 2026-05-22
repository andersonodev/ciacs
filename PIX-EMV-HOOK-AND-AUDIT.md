# Iteration 31 — PIX EMV Hook + Auditoria Completa do Estado

## Resumo

Patch corretivo (~2KB) que conecta o gerador BR Code EMV (criado na iteração 30) com o modal de doação `#cx-pix-modal` (criado na iteração 29). Inclui auditoria que comprova que **todos os módulos das iterações 28/29 estão presentes e funcionais** no arquivo de produção.

## Patch aplicado: CX_PIX_EMV_PATCH_V1

O hook original de CX_PIX_EMV_V1 (iter 30) procurava o container do QR pelas classes `.cx-pix-qr` e `.cx-qr`. Acontece que o módulo CX_DONATE_V1 (iter 29) constrói o modal usando convenção BEM com `.cx-pix-modal__qr` (duplo underscore). Resultado: o hook detectava o clique e até substituía o `src` da imagem do QR (porque o seletor `img[alt*="QR"]` funcionava), mas não inseria o bloco "Copia e Cola".

**Fix:** adicionar `.cx-pix-modal__qr` ao seletor do container.

```js
var qrBox = modal.querySelector('.cx-pix-modal__qr, .cx-pix-qr, .cx-qr');
```

Também aumentei o delay de espera do modal para 150ms (era 80ms) — o CX_DONATE leva mais tempo para construir o modal em alguns casos.

## Auditoria: estado real do JS de produção

Diagnose inicial sugeriu que módulos das iter 28/29 estavam perdidos. **Análise mais profunda comprovou o contrário**: os módulos estão preservados, mas codificados em base64 dentro de wrappers `(function(){try{var s=decodeURIComponent(escape(atob("..."))); (new Function(s))();}catch(e){console.error(...);}})()` para evitar problemas de escape no editor textarea do plugin Simple Custom CSS & JS.

### Decoding dos 5 blocos base64 no `/wp-content/uploads/custom-css-js/361.js`:

| Pos | Tamanho decoded | Módulo | Marcadores |
|---|---|---|---|
| 48420 | 6857 B | CX_COMMENTS_V1 | wp-comments-post, cx-comments |
| 57726 | 7261 B | CX_DONATE_V1 | wp-comments-post (form sócio), cx-pix-modal |
| 67564 | 2241 B | CX_TILT_3D_V1 | perspective(, cx-tilt, cx-vid-card |
| 70706 | 4120 B | CX_NEWS_V1 | cx-news-grid, cx-tilt |
| 76354 | 10340 B | CX_ADMIN_PERF_REPLY_V1 | wp-comments-post (admin), lazy/preload |

**Por que o grep direto retornava "false"?** O texto está dentro de base64, então strings como `cx-pix-modal` aparecem como sequências como `Y3gtcGl4LW1vZGFs`. O grep só encontra após `atob()` e `decodeURIComponent(escape(...))` em runtime.

## Validação end-to-end (live)

| Recurso | Resultado |
|---|---|
| `/apoie/` — clique R$ 50 abre modal | ✅ Modal "Doação via PIX" abre |
| Modal mostra QR Code | ✅ QR de api.qrserver.com |
| QR contém EMV BR Code real | ✅ `00020126420014BR.GOV.BCB.PIX0120contato@ciacs.org.br…6304` |
| Bloco "Copia e Cola" presente | ✅ Textarea + botão "Copiar código PIX" |
| Botão "Copiar chave" do email | ✅ Funcional |
| `/noticias/` — 23 cards no grid | ✅ Todos renderizados |
| Filtros de categoria (6 chips) | ✅ Todas / Caminhada / Eventos / Diretoria / Aniversários / Cursos |
| Cards com categoria + data + título + excerpt | ✅ |
| Post individual — seção de comentários | ✅ `<section id="cx-comments">` injetada |
| Formulário de comentário | ✅ Posta via /wp-comments-post.php |
| Menu nav: Vídeos em Libras + Apoie (pill amarelo) | ✅ Ambos visíveis |
| Painel admin v2 (filtros/busca/paginação) | ✅ Abre, lista, filtra, busca, pagina |
| Badge de pendentes no botão flutuante | ✅ Aparece quando há comentários hold |
| PIX EMV — função global `cxBuildPix()` | ✅ Retorna payload com CRC16 válido |

## Verificação byte-a-byte do CRC16

Test vector executado no browser:
```js
window.cxBuildPix({key:'contato@ciacs.org.br', name:'CIACS', city:'BRASILIA', amount:50, txid:'CIACS50'})
```
Retorno:
```
00020126420014BR.GOV.BCB.PIX0120contato@ciacs.org.br520400005303986540550.005802BR5905CIACS6008BRASILIA62110507CIACS5063046ADE
```

CRC final: **`6ADE`** (polinômio 0x1021, init 0xFFFF, sem reflexão). Validado contra calculadora externa BCB.

## Notas operacionais sobre o plugin Simple Custom CSS & JS

Documentando os bugs do plugin que afetam saves:
1. **Textarea-trap**: literais `</textarea>` ou `</script>` no código JS terminam prematuramente o textarea de edição → conteúdo após o literal é descartado no submit. **Workaround**: construir a string em runtime (`'texta'+'rea'`) ou usar `createElement`.
2. **Save assíncrono**: o click em "Atualizar" via referência (ref_X) às vezes não dispara o submit form de fato. **Workaround**: usar coordenada absoluta `(1468, 408)` após `scroll_to` confirma o save.
3. **Cache do servidor**: o arquivo `/wp-content/uploads/custom-css-js/361.js` é gerado no save mas tem cache HTTP. `?ts=` querystring + `{cache:'no-store'}` é necessário para verificar a versão atual.
4. **Base64-loader pattern**: para módulos > 5KB com escape complicado, codificar com `btoa(unescape(encodeURIComponent(src)))` no admin e decodar com `decodeURIComponent(escape(atob(...)))` em runtime. **Sempre funciona**.

## Estado do repositório

- 31 commits no main
- `/wp-content/uploads/custom-css-js/361.js`: 108458 bytes
- `/wp-content/uploads/custom-css-js/364.css`: ~114 KB
- 15 páginas no site
- 23 posts publicados com comentários abertos

## Próximas sugestões (priorizadas)

1. **Substituir contato@ciacs.org.br pela chave PIX real** quando a OSCIP for cadastrada — alterar via `window.CX_PIX_CONFIG = {key:'NOVA_CHAVE'}`.
2. **Adicionar suporte multi-seleção no painel admin v2** (bulk approve, bulk delete).
3. **Migrar o gerador de QR** para SVG local (eliminar dependência de api.qrserver.com).
4. **Cache page-level** no Hostinger (LiteSpeed/WP Rocket) + Cloudflare na frente.
5. **Cadastrar OSCIP** (jurídico, fora do site) para liberar dedução fiscal no IR.
óã
