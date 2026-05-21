import { ExternalLink, PlayCircle } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE, BLUE_DEEP, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const VIDEOS = [
  { titulo: "Apresentação institucional do CIACS", duracao: "3:42", canal: "@ciacscultura7959" },
  { titulo: "Como funcionam os cursos de Libras no CIACS", duracao: "5:18", canal: "@ciacscultura7959" },
  { titulo: "Visual Vernacular: a poesia visual surda", duracao: "4:55", canal: "@ciacscultura7959" },
  { titulo: "Acessibilidade em ambiente bilíngue", duracao: "6:10", canal: "@ciacscultura7959" },
  { titulo: "Memória do CIACS — 35 anos em movimento", duracao: "9:00", canal: "@ciacscultura7959" },
  { titulo: "Como se associar ao CIACS", duracao: "3:05", canal: "@ciacscultura7959" },
];

export function VideosLibras() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 5rem", color: "#fff" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Acessibilidade em primeiro lugar
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Vídeos em Libras
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "62ch", lineHeight: 1.75, margin: 0 }}>
            Nosso canal no YouTube reúne 48 produções acessíveis em Libras: apresentações institucionais,
            traduções de conteúdo do site, registros culturais e tutoriais para a comunidade.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "2rem" }}>
            <a href="https://www.youtube.com/@ciacscultura7959" target="_blank" rel="noreferrer"
               style={{ fontFamily: SANS, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                        backgroundColor: GOLD, color: BLUE_DEEP, padding: "0.95rem 1.5rem", textDecoration: "none",
                        display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Abrir canal no YouTube <ExternalLink size={14} />
            </a>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SOFT, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Em destaque
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 2.5rem" }}>
            Vídeos institucionais
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {VIDEOS.map((v) => (
              <article key={v.titulo} style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, overflow: "hidden" }}>
                <div style={{ aspectRatio: "16/9", backgroundColor: BLUE_DEEP, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                  <PlayCircle size={56} color={GOLD} aria-hidden />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
                    {v.duracao} · {v.canal}
                  </p>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.15rem", fontWeight: 700, color: INK, margin: "0.5rem 0 0", lineHeight: 1.4 }}>
                    {v.titulo}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, textAlign: "center", marginTop: "3rem", lineHeight: 1.7 }}>
            Os vídeos são publicados no canal oficial do CIACS no YouTube. Para sugestões de conteúdo
            ou pedidos de tradução, entre em contato pelo e-mail <a href="mailto:ciacsrj@gmail.com" style={{ color: BLUE, textDecoration: "underline" }}>ciacsrj@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
