# CIACS — Centro de Integração de Arte e Cultura dos Surdos

> Site institucional e arquivo digital do CIACS. Sediado na Rua do Catete, 247 — sala 704, Catete · Rio de Janeiro · RJ. CNPJ 32.361.230/0001-72. Fundado em 28 de fevereiro de 1989.

## Estrutura do repositório

```
ciacs/
├── web/                    Aplicação web React + Vite (frontend público)
│   ├── src/                Código-fonte (12 páginas + 6 institucionais)
│   ├── package.json        Dependências (React 18, Vite 6, Tailwind v4)
│   └── vite.config.ts
├── docs/                   Documentação institucional (História, Cursos, Eventos)
├── assets/                 Mídia versionada (logos, hero, parceiros)
├── scripts/                Utilitários (download de imagens, etc.)
├── BACKUP-INDEX.md         Inventário do backup do WordPress (23 posts, 14 páginas, 94 imagens)
├── BACKUP-DOCS.md          Documentação do processo de backup
├── HOMEPAGE-REDESIGN.md    Especificação V1 da home (estilo Gallaudet — 7 faixas)
├── HOMEPAGE-REDESIGN-V2.md Especificação V2 da home (13 faixas + FAQ + redes)
├── MELHORIAS-DESIGN.md     Relatório de acessibilidade (WCAG)
├── IMAGES-MANIFEST.md      Catálogo de imagens (94 ativos)
└── GALERIA-IMAGENS.md      Galeria visual referenciada
```

## Rodando o site localmente

```bash
cd web
npm install
npm run dev          # http://localhost:5173
npm run build        # gera dist/
```

## Stack do `web/`

- **React 18.3.1** + **React Router 7.13**
- **Vite 6.3.5** + **@vitejs/plugin-react 4.7**
- **Tailwind CSS v4** + **shadcn/ui** (47 componentes)
- **react-hook-form** para o formulário de inscrição (com upload de documentos)
- **lucide-react** para ícones
- Vídeos hero hotlinkados do Pexels (licença livre)

## Páginas implementadas

**Principais (12)** — Home, Sobre, História, Diretoria, Cursos, Inscrições, Notícias, Eventos, Programação, Galeria, Artistas, Contato.

**Participe** — Associe-se, Doação, Parcerias, Vídeos em Libras.

**Institucionais** — Política de Privacidade (LGPD), Termo de Compromisso.

Todas as páginas trazem o botão **"Ver em Libras"** com modal acessível (portal + ESC + scroll-lock). O Layout inclui banner LGPD, WhatsApp flutuante e back-to-top.

## Identidade visual

| Token | Hex | Uso |
|---|---|---|
| `--ciacs-blue` | `#1d4ed8` | Azul principal — CTAs e links |
| `--ciacs-blue-deep` | `#1e3a8a` | Azul profundo — hero, footer, quote dark |
| `--ciacs-red` | `#b91c4b` | Vermelho de destaque — CTA primário |
| `--ciacs-gold` | `#f5b300` | Dourado — kicker, accent, hover |
| `--ciacs-ink` | `#0f172a` | Texto principal |
| `--ciacs-muted` | `#475569` | Texto secundário |
| `--ciacs-soft` | `#f8fafc` | Background claro |

Tipografia: **Playfair Display** (serif editorial) + **Inter** (sans-serif corpo).

## Acessibilidade

- H1 único por página com hierarquia H2→H3 respeitada
- `aria-label` em todas as seções e botões
- `aria-hidden` em elementos decorativos (vídeo, overlay, SVGs)
- `prefers-reduced-motion` respeitado (vídeos escondidos, gradiente estático)
- Foco visível dourado em todos os elementos interativos
- Modal Libras com `Escape` + `body scroll-lock`
- Contraste de texto sobre overlay escuro ≥ 7:1

## Redes e canais oficiais

- Site WordPress legado: [mediumblue-trout-778261.hostingersite.com](https://mediumblue-trout-778261.hostingersite.com/)
- YouTube: [@ciacscultura7959](https://www.youtube.com/@ciacscultura7959)
- Instagram: [@ciacs.artes](https://www.instagram.com/ciacs.artes)
- Facebook: [@ciacs.comunidade](https://www.facebook.com/ciacs.comunidade)
- E-mail: ciacsrj@gmail.com

## Próximos passos

- [ ] Substituir vídeo placeholder do modal "Ver em Libras" por gravação real do CIACS
- [ ] Trocar número de WhatsApp placeholder por número oficial
- [ ] Adicionar fotos reais de Artistas e Diretoria (atualmente Pexels)
- [ ] Publicar nomes da Diretoria 2020–2022
- [ ] Conectar carrossel de notícias a feed real (CMS ou JSON)
