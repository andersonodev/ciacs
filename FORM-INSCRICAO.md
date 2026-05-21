# Formulário de Inscrição customizado (integrado ao Fluent Forms)

## Decisão de design

O shortcode `[fluentform id="3"]` quebra o site CIACS (gera erro crítico do WordPress) quando embeddado diretamente em uma página. Solução: substituir por um formulário HTML customizado que mantem o visual da identidade CIACS e submete via AJAX para o endpoint público do Fluent Forms (fluentform_submit), preservando armazenamento das entradas e disparé da notificação por email.

## Estrutura da página /inscricoes/ (page id=22)

1. **Hero** - seção com gradiente azul, eyebrow dourado "INSCRICOES ABERTAS", título "Faca parte do CIACS", lead explicativo e 3 bullets (atendimento bilíngue, resposta em 3 dias, LGPD).
2. **Card do formulário** - card branco com sombra suave, 760px max-width, contendo:
   - Nome / Sobrenome (lado a lado, obrigatórios)
   - E-mail / Telefone-WhatsApp (lado a lado)
   - Curso de interesse (dropdown com 7 opções: Libras básico/intermediário/avançado, Teatro surdo, Artes visuais, Oficinas culturais, Outro)
   - Mensagem (textarea opcional)
   - Consentimento LGPD (checkbox obrigatório)
   - Botão "ENVIAR INSCRICAO" em vermelho CIACS (#b91c4b)
   - Status area com role=status aria-live=polite
3. **Seção de contato direto** - "Prefere falar conosco diretamente?" com email e referência ao botão WhatsApp.

## Backend - Fluent Forms

- Form id=3 "CIACS - Inscrição / Contato" reutilizado (já existia com os mesmos campos: names, email, telefone, curso_interesse, message, lgpd_consent).
- Notificação de email habilitada com:
  - Nome: Nova inscrição CIACS
  - Enviar para: ciacsrj@gmail.com
  - Assunto: Nova inscrição no CIACS - {inputs.names}

## Submíssão via AJAX

O módulo INSCRICAO_FORM_MODULE no Custom JS post 361:
- Faz validação no client de campos obrigatórios (setando aria-invalid)
- Envia o FormData para /wp-admin/admin-ajax.php com action=fluentform_submit e form_id=3
- Atualiza o status area com mensagem de sucesso ou erro
- Trata loading state no botão (disabled + texto "Enviando...")

## CSS

Bloco /* === CIACS INSCRICOES FORM === */ no Custom CSS post 364 (~3 KB):
- Hero com gradiente #0f172a -> #1e3a8a
- Card form com border-radius 20px e shadow azulado
- Inputs com border #cbd5e1, focus ring azul rgba(29,78,216,.15)
- aria-invalid=true ganha borda e shadow vermelhos (#b91c4b)
- Botão submit pill vermelho com hover translate-y -1px
- Mobile <=640px: grids colapsam para 1 coluna

## Pendente futuro
- SMTP recomendado pelo próprio Fluent Forms (FluentSMTP gratis) para garantir entrega das notificações
- Adicionar honeypot ou captcha simples para anti-spam
- Hook de confirmação automática para o e-mail do inscrito (auto-reply)
