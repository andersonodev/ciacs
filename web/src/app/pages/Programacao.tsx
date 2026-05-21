import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const events = [
  { day: "07", month: "Jun", year: "2026", title: "Festival de Arte Surda 2026 — Abertura", desc: "Cerimônia de abertura do maior festival de arte surda do Rio de Janeiro. Apresentações de teatro, dança e arte visual.", location: "Centro Cultural da Tijuca, Rio de Janeiro", time: "19h00", type: "Festival", free: true },
  { day: "08", month: "Jun", year: "2026", title: "Workshop de Libras — Nível Iniciante", desc: "Workshop de introdução à Língua Brasileira de Sinais para ouvintes. Ministrado por instrutores surdos do CIACS.", location: "Sede do CIACS — Tijuca", time: "10h00 às 13h00", type: "Workshop", free: true },
  { day: "10", month: "Jun", year: "2026", title: "Vernissage — Exposição 'Mãos e Olhares'", desc: "Abertura da exposição coletiva de artes visuais de alunos do CIACS. Pinturas, esculturas e instalações.", location: "Galeria CIACS — Tijuca", time: "18h30", type: "Exposição", free: true },
  { day: "14", month: "Jun", year: "2026", title: "Teatro: 'Silêncio que Grita'", desc: "Apresentação do grupo de teatro surdo do CIACS. Uma peça de 70 minutos sobre identidade e resistência surda.", location: "Teatro Municipal da Tijuca", time: "20h00", type: "Teatro", free: false },
  { day: "18", month: "Jun", year: "2026", title: "Mesa-Redonda: Políticas Públicas para Surdos", desc: "Debate com representantes do MEC/DIPEBS, acadêmicos e lideranças surdas sobre o futuro da educação bilíngue.", location: "Online — Google Meet", time: "14h00 às 17h00", type: "Debate", free: true },
  { day: "21", month: "Jun", year: "2026", title: "Dia Nacional do Surdo — Celebração CIACS", desc: "Programação especial com apresentações, exposições, lançamento de publicação e homenagens a artistas surdos.", location: "Sede do CIACS e Centro Cultural da Tijuca", time: "Dia inteiro", type: "Celebração", free: true },
  { day: "28", month: "Jun", year: "2026", title: "Encerramento — Festival de Arte Surda 2026", desc: "Grande encerramento do festival com premiação, apresentações especiais e confraternização da comunidade.", location: "Centro Cultural da Tijuca", time: "18h00", type: "Festival", free: true },
  { day: "15", month: "Jul", year: "2026", title: "Início das Aulas — 2.º Semestre 2026", desc: "Início das aulas de todos os cursos do CIACS para o segundo semestre: Libras, Artes Visuais e Teatro Surdo.", location: "Online — Google Classroom", time: "A confirmar", type: "Curso", free: false },
];

export function Programacao() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Agenda Cultural
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Programação
          </h1>
        </div>
      </section>

      {/* Events */}
      <section style={{ backgroundColor: OFF_WHITE }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem 6rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {events.map((ev, i) => (
              <div
                key={ev.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "100px 1fr",
                  gap: "2.5rem",
                  padding: "2.5rem 0",
                  borderBottom: `1px solid ${BORDER}`,
                  alignItems: "start",
                }}
              >
                {/* Date */}
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: SERIF, fontSize: "3rem", fontWeight: 900, color: GREEN, lineHeight: 1, margin: 0 }}>{ev.day}</p>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, margin: "0.25rem 0 0" }}>
                    {ev.month} {ev.year}
                  </p>
                  {ev.free && (
                    <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginTop: "0.5rem" }}>
                      Gratuito
                    </p>
                  )}
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.625rem", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD }}>
                      {ev.type}
                    </span>
                    {!ev.free && (
                      <span style={{ fontFamily: SANS, fontSize: "0.65rem", color: MUTED }}>Entrada mediante inscrição</span>
                    )}
                  </div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 700, color: TEXT, marginBottom: "0.625rem", lineHeight: 1.3 }}>
                    {ev.title}
                  </h3>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.7, marginBottom: "0.875rem" }}>
                    {ev.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem", marginBottom: "1rem" }}>
                    <div>
                      <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: "0.125rem" }}>
                        Local
                      </p>
                      <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: TEXT, margin: 0 }}>{ev.location}</p>
                    </div>
                    <div>
                      <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: "0.125rem" }}>
                        Horário
                      </p>
                      <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: TEXT, margin: 0 }}>{ev.time}</p>
                    </div>
                  </div>
                  <Link
                    to={ev.type === "Curso" ? "/inscricoes" : "/contato"}
                    style={{
                      fontFamily: SANS,
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: GREEN,
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      borderBottom: `1px solid ${GREEN}`,
                      paddingBottom: "1px",
                    }}
                  >
                    {ev.type === "Curso" ? "Inscrever-se" : "Mais informações"} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", borderTop: `1px solid ${BORDER}`, padding: "4rem 2rem", textAlign: "center" }}>
        <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, marginBottom: "1.5rem" }}>
          Para mais informações sobre eventos e inscrições, entre em contato com o CIACS.
        </p>
        <Link
          to="/contato"
          style={{
            fontFamily: SANS,
            fontSize: "0.82rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: GREEN,
            color: "#fff",
            padding: "0.875rem 2rem",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          Fale Conosco <ArrowRight size={13} />
        </Link>
      </section>
    </div>
  );
}
