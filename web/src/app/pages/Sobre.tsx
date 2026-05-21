import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const IMG_A = "https://images.unsplash.com/photo-1671037877105-9af332b937e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const IMG_B = "https://images.unsplash.com/photo-1632184671104-f1808ac46352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

const values = [
  { title: "Identidade", desc: "Afirmamos a identidade surda como patrimônio cultural, não como condição médica. A surdez é parte constitutiva de uma cultura com língua, arte e história próprias." },
  { title: "Comunidade", desc: "Somos um ponto de encontro e resistência da comunidade surda do Rio de Janeiro. Criamos espaços de pertencimento, solidariedade e celebração coletiva." },
  { title: "Arte", desc: "A arte é nossa linguagem comum. Através da expressão visual, cênica e corporal, a comunidade surda produz cultura de alto valor estético e simbólico." },
  { title: "Excelência", desc: "Mantemos padrões de excelência na formação artística e cultural, reconhecidos pelo Ministério da Educação e por instituições nacionais de cultura." },
];

const SectionLabel = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: light ? GOLD : GOLD, marginBottom: "1rem" }}>
    {children}
  </p>
);

export function Sobre() {
  return (
    <div>
      {/* Page header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionLabel>Quem Somos</SectionLabel>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              maxWidth: "600px",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Sobre o CIACS
          </h1>
        </div>
      </section>

      {/* Main two-column */}
      <section style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
        >
          {/* Text */}
          <div>
            <SectionLabel>Nossa Missão</SectionLabel>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: TEXT,
                lineHeight: 1.2,
                marginBottom: "2rem",
              }}
            >
              Promovendo a Arte e Identidade Surda há mais de 35 anos
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
              {[
                "O Centro de Integração de Arte e Cultura dos Surdos (CIACS) é uma associação sem fins lucrativos, com finalidade cultural e artística, fundada em 28 de fevereiro de 1989 no Rio de Janeiro. Funciona como espaço de encontro entre artistas surdos e ouvintes, promovendo a integração através da arte, da Libras e da cultura surda.",
                "Nossas raízes remontam ao Grupo Silencioso (1983), coletivo formado por Carlos Alberto Goés, Marlene Prado, Ana Regina Campello e Silas Queiroz, que precedeu a criação formal do CIACS e plantou as sementes do movimento cultural surdo no Rio.",
                "Hoje, sediados na Rua do Catete, 247 — sala 704, somos uma organização gerida por Assembleia Geral, Diretoria e Conselho Fiscal, com mandatos de dois anos. Trabalhamos em parceria com FENEIS, Palavras Visíveis, Tá na Rua, INES, MAR, UFRJ e SATED-RJ.",
              ].map((text, i) => (
                <p key={i} style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, margin: 0 }}>
                  {text}
                </p>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link
                to="/historia"
                style={{
                  fontFamily: SANS,
                  fontSize: "0.8rem",
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
                Nossa História <ArrowRight size={13} />
              </Link>
              <LibrasButton />
            </div>
          </div>

          {/* Image */}
          <div style={{ position: "relative" }}>
            <img
              src={IMG_A}
              alt="Comunidade CIACS"
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                backgroundColor: "#fff",
                padding: "1.5rem",
                border: `1px solid ${BORDER}`,
              }}
            >
              <p style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 900, color: GREEN, margin: 0, lineHeight: 1 }}>35+</p>
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, margin: "0.25rem 0 0" }}>
                Anos de História
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: OFF_WHITE, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem" }}>
          <SectionLabel>O Que Nos Guia</SectionLabel>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              color: TEXT,
              marginBottom: "3.5rem",
            }}
          >
            Nossos Valores
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0, border: `1px solid ${BORDER}` }}>
            {values.map((v, i) => (
              <div
                key={v.title}
                style={{
                  padding: "2.5rem",
                  borderRight: i < values.length - 1 ? `1px solid ${BORDER}` : "none",
                  backgroundColor: "#fff",
                }}
              >
                <p
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: GOLD,
                    marginBottom: "1rem",
                  }}
                >
                  0{i + 1}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, color: TEXT, marginBottom: "0.875rem" }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional */}
      <section style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={IMG_B}
              alt="Equipe CIACS"
              style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "-1.5rem",
                width: "4px",
                height: "80px",
                backgroundColor: GREEN,
              }}
            />
          </div>
          <div>
            <SectionLabel>Objetivos institucionais</SectionLabel>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: TEXT,
                lineHeight: 1.3,
                marginBottom: "1.5rem",
              }}
            >
              Oito frentes do CIACS conforme o nosso estatuto
            </h2>
            <ol style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "grid", gap: "0.85rem" }}>
              {[
                "Difusão da produção cultural das pessoas surdas",
                "Produção e exibição cinematográfica, fonográfica e videográfica",
                "Ações em teatro, circo, ópera, dança, artes plásticas e música",
                "Fomento de programas de formação em artes cênicas",
                "Apoio técnico a instituições culturais",
                "Difusão e intercâmbio da produção cultural",
                "Manutenção e preservação do acervo artístico-cultural",
                "Proibição de distribuição de lucros aos diretores e sócios",
              ].map((obj, i) => (
                <li key={obj} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: "0.85rem", alignItems: "baseline" }}>
                  <span style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", color: GOLD }}>0{i + 1}</span>
                  <span style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.6 }}>{obj}</span>
                </li>
              ))}
            </ol>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <Link
                to="/cursos"
                style={{
                  fontFamily: SANS,
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: GREEN,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  borderBottom: `1px solid ${GREEN}`,
                  paddingBottom: "1px",
                }}
              >
                Ver cursos <ArrowRight size={13} />
              </Link>
              <LibrasButton />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
