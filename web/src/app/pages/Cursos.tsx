import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const LIBRAS_IMG = "https://images.unsplash.com/photo-1712876610619-f82b786aca66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const ARTES_IMG = "https://images.unsplash.com/photo-1752649937334-f5c3c2136b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const TEATRO_IMG = "https://images.unsplash.com/photo-1503095396549-807759245b35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const courses = [
  {
    num: "01",
    title: "Teatro Surdo",
    subtitle: "Curso de Aprendizagem da linguagem cênica surda",
    img: TEATRO_IMG,
    duration: "Semestral",
    modality: "Presencial · Catete · RJ",
    level: "Iniciante ao Intermediário",
    desc: "Curso introdutório à linguagem cênica do Teatro Surdo, dando continuidade à tradição histórica do grupo CIACS desde 1989. Técnicas de mímica, performance, narração em Libras e criação coletiva inspiradas em quatro décadas de teatro surdo brasileiro.",
    topics: [
      "Expressão corporal e mímica surda",
      "Técnicas de Teatro Visual",
      "Criação e direção de cenas",
      "Narrativa em Libras — ABC Story, Classifier Story",
      "História do teatro surdo nacional e internacional",
      "Apresentação final aberta ao público",
    ],
  },
  {
    num: "02",
    title: "Visual Vernacular (VV)",
    subtitle: "Poesia visual da cultura surda",
    img: ARTES_IMG,
    duration: "Em módulos",
    modality: "Híbrido",
    level: "Todos os níveis",
    desc: "Forma de poesia visual da cultura surda que combina mímica, expressão corporal e narrativa visual. Curso ministrado em parceria com Nelson Pimenta e outras referências internacionais do VV.",
    topics: [
      "Fundamentos da poesia visual surda",
      "Construção de cenas em VV",
      "Estudo de obras de referência (Clin d'Œil, ASL SLAM)",
      "Composição e edição de vídeo-poemas",
      "Apresentação coletiva e mostra final",
    ],
  },
  {
    num: "03",
    title: "ASL — American Sign Language",
    subtitle: "Língua de Sinais Americana",
    img: LIBRAS_IMG,
    duration: "Semestral",
    modality: "Online · Google Classroom",
    level: "Para sócios e interessados",
    desc: "Curso de Língua de Sinais Americana voltado para sócios e interessados, com encontros temáticos sobre ASL SLAM (poesia em ASL) e Deaf Leaders (liderança e protagonismo surdo).",
    topics: [
      "Alfabeto, vocabulário e estruturas básicas em ASL",
      "Diferenças entre ASL e Libras",
      "ASL SLAM — poesia em língua de sinais",
      "Diálogos sobre Deaf Leaders",
      "Imersão em cultura surda americana",
    ],
  },
];

const OFICINAS = [
  { titulo: "Workshop \"Os Surdos podem traduzir Música?\"", desc: "Curso ministrado pelo Prof. Jhonatas Reis sobre tradução criativa de música para Libras. Duas turmas oferecidas em 2020." },
  { titulo: "Workshop de Espanhol para Surdos", desc: "Ministrado por Nelson Pimenta — aprendizado da língua espanhola adaptado a estudantes surdos." },
  { titulo: "Minicurso de StreamYard", desc: "Capacitação de sócios para uso de ferramentas de transmissão ao vivo, com aplicação em cobertura cultural surda." },
  { titulo: "Curso de Extensão \"Imagens Surdas\" (MAR + UFRJ)", desc: "Parceria com Museu de Arte do Rio e UFRJ — leitura de imagens, museologia e visualidade surda." },
  { titulo: "Nu Visual", desc: "Oficina de expressão artística visual com foco na linguagem corporal surda." },
  { titulo: "Libras — turmas regulares (básico e intermediário)", desc: "Oferta histórica do CIACS para iniciantes, familiares e profissionais que atuam com a comunidade surda." },
];

export function Cursos() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Formação Cultural
          </p>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Nossos Cursos
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", marginTop: "1.5rem", letterSpacing: "0.03em" }}>
            Aulas realizadas pelo Google Classroom — instrutores surdos com décadas de experiência artística e cultural
          </p>
        </div>
      </section>

      {/* Courses — alternating rows */}
      {courses.map((c, i) => (
        <section
          key={c.num}
          style={{ backgroundColor: i % 2 === 0 ? "#fff" : OFF_WHITE, borderBottom: `1px solid ${BORDER}` }}
        >
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "6rem 2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
              direction: i % 2 !== 0 ? "rtl" : "ltr",
            }}
          >
            {/* Image */}
            <div style={{ position: "relative", direction: "ltr" }}>
              <div
                style={{
                  position: "absolute",
                  fontFamily: SERIF,
                  fontSize: "clamp(8rem, 16vw, 14rem)",
                  fontWeight: 900,
                  color: i % 2 === 0 ? "#F0EDE8" : "#E8E4DA",
                  lineHeight: 1,
                  top: "-2rem",
                  left: "-1.5rem",
                  userSelect: "none",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              >
                {c.num}
              </div>
              <img
                src={c.img}
                alt={c.title}
                style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block", position: "relative", zIndex: 1 }}
              />
            </div>

            {/* Text */}
            <div style={{ direction: "ltr" }}>
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: MUTED, marginBottom: "0.5rem" }}>
                {c.subtitle}
              </p>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: TEXT,
                  marginBottom: "1.5rem",
                  lineHeight: 1.15,
                }}
              >
                {c.title}
              </h2>

              <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: "1.75rem" }}>{c.desc}</p>

              {/* Meta */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 0,
                  border: `1px solid ${BORDER}`,
                  marginBottom: "1.75rem",
                }}
              >
                {[
                  { label: "Duração", value: c.duration },
                  { label: "Modalidade", value: c.modality },
                  { label: "Nível", value: c.level },
                ].map((m, mi) => (
                  <div
                    key={m.label}
                    style={{
                      padding: "1rem",
                      borderRight: mi < 2 ? `1px solid ${BORDER}` : "none",
                    }}
                  >
                    <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: "0.3rem" }}>
                      {m.label}
                    </p>
                    <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: TEXT, fontWeight: 500, margin: 0 }}>{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Topics */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {c.topics.map((t) => (
                  <li
                    key={t}
                    style={{
                      fontFamily: SANS,
                      fontSize: "0.875rem",
                      color: MUTED,
                      paddingLeft: "1.25rem",
                      position: "relative",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.5em",
                        width: "5px",
                        height: "1px",
                        backgroundColor: GREEN,
                        display: "block",
                      }}
                    />
                    {t}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
                <Link
                  to="/inscricoes"
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    backgroundColor: GREEN,
                    color: "#fff",
                    padding: "0.75rem 1.75rem",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  Inscrever-se <ArrowRight size={13} />
                </Link>
                <LibrasButton />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Workshops e oficinas */}
      <section style={{ backgroundColor: OFF_WHITE, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "5rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Workshops e oficinas
          </p>
          <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: TEXT, marginBottom: "2.5rem" }}>
            Demais formações abertas à comunidade
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {OFICINAS.map((o) => (
              <article key={o.titulo} style={{ backgroundColor: "#fff", padding: "1.5rem 1.75rem", border: `1px solid ${BORDER}`, borderLeft: `3px solid ${GOLD}` }}>
                <h4 style={{ fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 700, color: TEXT, margin: 0, lineHeight: 1.35 }}>{o.titulo}</h4>
                <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, lineHeight: 1.7, margin: "0.6rem 0 0" }}>{o.desc}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "3rem", padding: "2rem", backgroundColor: "#fff", border: `1px solid ${BORDER}`, textAlign: "center" }}>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, margin: "0 0 1.25rem" }}>
              As inscrições e datas de turmas são atualizadas a cada semestre. Para receber novidades,
              escreva para <strong style={{ color: TEXT }}>ciacsrj@gmail.com</strong> ou acompanhe nosso Instagram <strong style={{ color: TEXT }}>@ciacs.artes</strong>.
            </p>
            <Link
              to="/inscricoes"
              style={{
                fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
                backgroundColor: GREEN, color: "#fff", padding: "0.875rem 2rem", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}
            >
              Fazer inscrição <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
