import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Teatro", year: "2024", title: "Festival de Arte Surda 2024" },
  { id: 2, src: "https://images.unsplash.com/photo-1777924986203-4474089a6ac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Teatro", year: "2024", title: "Espetáculo 'Mãos Livres'" },
  { id: 3, src: "https://images.unsplash.com/photo-1752649937334-f5c3c2136b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Artes Visuais", year: "2025", title: "Oficina de Pintura — 1.º Semestre" },
  { id: 4, src: "https://images.unsplash.com/photo-1764763179593-8b901447738b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Teatro", year: "2023", title: "Ensaio — Teatro Surdo" },
  { id: 5, src: "https://images.unsplash.com/photo-1712876610619-f82b786aca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Libras", year: "2025", title: "Aula prática de Libras" },
  { id: 6, src: "https://images.unsplash.com/photo-1667785786593-c860d545a4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Eventos", year: "2023", title: "Dia Nacional do Surdo 2023" },
  { id: 7, src: "https://images.unsplash.com/photo-1671037877105-9af332b937e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Eventos", year: "2024", title: "Formatura — Turma 2024" },
  { id: 8, src: "https://images.unsplash.com/photo-1632184671104-f1808ac46352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Eventos", year: "2022", title: "Semana da Cultura Surda 2022" },
  { id: 9, src: "https://images.unsplash.com/photo-1752649937361-a675a814707d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Artes Visuais", year: "2025", title: "Exposição 'Identidade Surda'" },
  { id: 10, src: "https://images.unsplash.com/photo-1615842046963-9eb6748cbb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Eventos", year: "2025", title: "Palestra com artistas convidados" },
  { id: 11, src: "https://images.unsplash.com/photo-1650902858815-7d127c10b793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Teatro", year: "2022", title: "Peça 'Voz do Silêncio'" },
  { id: 12, src: "https://images.unsplash.com/photo-1752649935945-820d811f6404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900", cat: "Artes Visuais", year: "2024", title: "Workshop de Pintura Artística" },
];

const cats = ["Todas", "Teatro", "Artes Visuais", "Libras", "Eventos"];
const years = ["Todos", "2025", "2024", "2023", "2022"];

export function Galeria() {
  const [cat, setCat] = useState("Todas");
  const [year, setYear] = useState("Todos");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = photos.filter((p) => {
    const cm = cat === "Todas" || p.cat === cat;
    const ym = year === "Todos" || p.year === year;
    return cm && ym;
  });

  const idx = lightbox !== null ? filtered.findIndex((p) => p.id === lightbox) : -1;

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Memórias e Arte
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Galeria
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section style={{ backgroundColor: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem 2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center" }}>
            <span style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginRight: "0.5rem" }}>
              Categoria:
            </span>
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.4rem 0.875rem", border: `1px solid ${cat === c ? GREEN : BORDER}`, backgroundColor: cat === c ? GREEN : "transparent", color: cat === c ? "#fff" : MUTED, cursor: "pointer", transition: "all 0.15s" }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem", alignItems: "center" }}>
            <span style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginRight: "0.5rem" }}>
              Ano:
            </span>
            {years.map((y) => (
              <button key={y} onClick={() => setYear(y)}
                style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.4rem 0.875rem", border: `1px solid ${year === y ? GREEN : BORDER}`, backgroundColor: year === y ? GREEN : "transparent", color: year === y ? "#fff" : MUTED, cursor: "pointer", transition: "all 0.15s" }}>
                {y}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry grid */}
      <section style={{ backgroundColor: OFF_WHITE, padding: "3rem 2rem 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem", color: MUTED, fontFamily: SANS }}>
              Nenhuma foto encontrada para os filtros selecionados.
            </div>
          ) : (
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 700: 2, 1000: 3 }}>
              <Masonry gutter="4px">
                {filtered.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setLightbox(p.id)}
                    style={{ position: "relative", cursor: "pointer", overflow: "hidden" }}
                    className="group"
                  >
                    <img
                      src={p.src}
                      alt={p.title}
                      style={{ width: "100%", display: "block", transition: "transform 0.4s" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        backgroundColor: "rgba(27,94,32,0)",
                        transition: "background-color 0.3s",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "1.25rem",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(27,94,32,0.6)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.backgroundColor = "rgba(27,94,32,0)"; }}
                    >
                      <p style={{ fontFamily: SANS, fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD, margin: "0 0 0.25rem", opacity: 0 }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLParagraphElement).style.opacity = "1"; }}
                      >
                        {p.cat} — {p.year}
                      </p>
                      <p style={{ fontFamily: SERIF, fontSize: "0.95rem", fontWeight: 700, color: "#fff", margin: 0, opacity: 0 }}>
                        {p.title}
                      </p>
                    </div>
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && idx >= 0 && (
        <div
          onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, backgroundColor: "rgba(5,5,5,0.95)", zIndex: 9000, display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
        >
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <X size={18} />
          </button>
          {idx > 0 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(filtered[idx - 1].id); }}
              style={{ position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronLeft size={22} />
            </button>
          )}
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw", maxHeight: "85vh", textAlign: "center" }}>
            <img src={filtered[idx].src} alt={filtered[idx].title}
              style={{ maxWidth: "100%", maxHeight: "78vh", objectFit: "contain", display: "block" }} />
            <p style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700, color: "#fff", marginTop: "1.25rem" }}>{filtered[idx].title}</p>
            <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", marginTop: "0.25rem" }}>
              {filtered[idx].cat} — {filtered[idx].year} &nbsp;|&nbsp; {idx + 1} / {filtered.length}
            </p>
          </div>
          {idx < filtered.length - 1 && (
            <button onClick={(e) => { e.stopPropagation(); setLightbox(filtered[idx + 1].id); }}
              style={{ position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronRight size={22} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
