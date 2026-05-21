import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const allNews = [
  { id: 1, img: "https://images.unsplash.com/photo-1650902858815-7d127c10b793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Evento", date: "15 Mai 2026", title: "Festival de Arte Surda 2026 celebra 35 anos do CIACS", excerpt: "O maior festival de arte surda do Rio de Janeiro acontece em junho com mais de 50 artistas participantes de todo o Brasil." },
  { id: 2, img: "https://images.unsplash.com/photo-1752649937334-f5c3c2136b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Inscrições", date: "10 Mai 2026", title: "Novas turmas de Artes Visuais abertas para o segundo semestre", excerpt: "CIACS abre inscrições para o segundo semestre de 2026 com vagas limitadas nos cursos de Artes Visuais." },
  { id: 3, img: "https://images.unsplash.com/photo-1667785786593-c860d545a4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Parceria", date: "5 Mai 2026", title: "CIACS firma parceria com DIPEBS/MEC para programa nacional", excerpt: "Nova parceria fortalece o alcance dos programas do CIACS para comunidades surdas em todo o Brasil." },
  { id: 4, img: "https://images.unsplash.com/photo-1712876610619-f82b786aca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Cultura", date: "28 Abr 2026", title: "Exposição 'Mãos e Olhares' abre no Museu da República", excerpt: "Obras de artistas surdos do CIACS ganham espaço no Museu da República do Rio de Janeiro em exposição inédita." },
  { id: 5, img: "https://images.unsplash.com/photo-1777924986203-4474089a6ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Teatro", date: "20 Abr 2026", title: "Grupo de Teatro Surdo estreia nova peça na Tijuca", excerpt: "A peça 'Silêncio que Grita' estreia no Centro Cultural da Tijuca com sessões abertas ao público." },
  { id: 6, img: "https://images.unsplash.com/photo-1764763179593-8b901447738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Educação", date: "15 Abr 2026", title: "CIACS lança material didático de Libras em formato acessível", excerpt: "Novo material pedagógico em Libras é disponibilizado gratuitamente para escolas públicas." },
  { id: 7, img: "https://images.unsplash.com/photo-1752649937361-a675a814707d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Arte", date: "8 Abr 2026", title: "Artistas do CIACS representam o Brasil em festival internacional", excerpt: "Seis artistas formados pelo CIACS participaram do Festival Internacional de Arte Surda em Lisboa, Portugal." },
  { id: 8, img: "https://images.unsplash.com/photo-1671037877105-9af332b937e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Institucional", date: "1 Abr 2026", title: "CIACS recebe delegação do Ministério da Educação", excerpt: "Visita reforça parceria com o MEC e discute expansão dos programas de cultura surda para todo o Brasil." },
  { id: 9, img: "https://images.unsplash.com/photo-1632184671104-f1808ac46352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=700", cat: "Evento", date: "22 Mar 2026", title: "Semana da Cultura Surda reúne 200 participantes no CIACS", excerpt: "Evento anual do CIACS reuniu estudantes, pesquisadores e artistas em três dias de atividades gratuitas." },
];

const cats = ["Todas", "Evento", "Inscrições", "Cultura", "Arte", "Teatro", "Educação", "Parceria", "Institucional"];
const PER_PAGE = 6;

export function Noticias() {
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState("Todas");

  const filtered = cat === "Todas" ? allNews : allNews.filter((n) => n.cat === cat);
  const total = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Fique Informado
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Notícias
          </h1>
        </div>
      </section>

      {/* Filter */}
      <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => { setCat(c); setPage(1); }}
              style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.5rem 1rem",
                border: `1px solid ${cat === c ? GREEN : BORDER}`,
                backgroundColor: cat === c ? GREEN : "transparent",
                color: cat === c ? "#fff" : MUTED,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ backgroundColor: OFF_WHITE }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "1px",
              backgroundColor: BORDER,
              border: `1px solid ${BORDER}`,
            }}
          >
            {paged.map((n) => (
              <article key={n.id} style={{ backgroundColor: "#fff", display: "flex", flexDirection: "column" }}>
                <div style={{ overflow: "hidden", aspectRatio: "16/9" }}>
                  <img
                    src={n.img}
                    alt={n.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.875rem" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD }}>
                      {n.cat}
                    </span>
                    <span style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED }}>{n.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: SERIF,
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: TEXT,
                      lineHeight: 1.3,
                      marginBottom: "0.75rem",
                      flex: 1,
                    }}
                  >
                    {n.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, marginBottom: "1.25rem" }}>
                    {n.excerpt}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${BORDER}`, paddingTop: "1rem" }}>
                    <button
                      style={{
                        fontFamily: SANS,
                        fontSize: "0.72rem",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: GREEN,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        padding: 0,
                        borderBottom: `1px solid ${GREEN}`,
                        paddingBottom: "1px",
                      }}
                    >
                      Ler mais <ArrowRight size={12} />
                    </button>
                    <LibrasButton size="sm" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {total > 1 && (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", marginTop: "3rem" }}>
              <button
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
                style={{ background: "none", border: `1px solid ${BORDER}`, width: "40px", height: "40px", cursor: page === 1 ? "not-allowed" : "pointer", opacity: page === 1 ? 0.4 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: total }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.82rem",
                    fontWeight: page === i + 1 ? 700 : 400,
                    width: "40px",
                    height: "40px",
                    border: `1px solid ${page === i + 1 ? GREEN : BORDER}`,
                    backgroundColor: page === i + 1 ? GREEN : "transparent",
                    color: page === i + 1 ? "#fff" : TEXT,
                    cursor: "pointer",
                  }}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setPage(Math.min(total, page + 1))}
                disabled={page === total}
                style={{ background: "none", border: `1px solid ${BORDER}`, width: "40px", height: "40px", cursor: page === total ? "not-allowed" : "pointer", opacity: page === total ? 0.4 : 1, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
