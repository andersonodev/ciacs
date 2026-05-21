# Polimento: emojis -> SVG, remoção do card VLibras e reforço do CTA

Iteracao de polimento solicitada pelo usuario: remover todos os emojis e substituir por icones profissionais, remover o card colorido da VLibras (cara de IA) em todas as paginas e garantir que o CTA Inscreva-se do header esteja em destaque.

## O que foi feito

### 1. Emojis substituidos por icones SVG profissionais
O Wordpress converte automaticamente emojis em <img class="emoji">. Criamos um modulo JS (EMOJI_TO_SVG_MODULE) que:
- Faz scan de todas as <img class="emoji"> no DOM apos DOMContentLoaded
- Mapeia o atributo alt para uma chave de icone
- Substitui a img por um <span class="ciacs-svg-icon"> com um SVG inline (estilo Feather, stroke 2px, currentColor)
- Tambem varre nodos de texto para substituir emojis nao-convertidos

Mapeamento:
- camera (📷 📸), book (📘), bookopen (📚), scroll (📜)
- handshake (🤝), chat (💬), pin (📍), note (📌)
- masks (🎭), calendar (📅), palette (🎨), video (🎥)
- edit (📝), heart (💙), arrowup (↗), arrowright (➡), sparkles (✨)

### 2. Card VLibras ("cara de IA") removido
CSS global:
```
img.vp-pop-up, .vp-pop-up { display: none !important; }
```
Mantemos o pequeno botao circular azul (vp-access-button) totalmente funcional. So o card promocional grande "Acessivel com VLibras" foi removido.

### 3. CTA INSCREVA-SE reforçado
Adicionado position:relative + z-index:5 no .ic-cta para garantir que o pill vermelho do header fique sempre visivel acima de outros elementos.

## Arquivos alterados
- Custom CSS post 364: bloco /* === EMOJI -> SVG + HIDE AI CARD === */ (~700 bytes)
- Custom JS post 361: modulo IIFE EMOJI_TO_SVG_MODULE (~6 KB)

## Resultado
- Home: 0 emoji <img>, 8 SVG icones injetados, 0 vp-pop-up visivel.
- Sobre: 0 emoji, 2 SVG, sem vp-pop-up.
- Header com CTA visivel em desktop em todas as paginas.

## Pendente
- Formulario de inscricao na pagina /inscricoes/ (aguardando autorizacao do usuario para criar via Fluent Forms).
