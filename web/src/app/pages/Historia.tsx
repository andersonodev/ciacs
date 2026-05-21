import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const milestones = [
  { year: "1983", title: "Nasce o Grupo Silencioso", desc: "No Rio de Janeiro, os artistas Carlos Alberto Goés, Marlene Prado e Ana Regina Campello fundam o Grupo Silencioso — coletivo pioneiro em artes cênicas e visuais da comunidade surda. Mais tarde, Silas Queiroz integra o grupo.", key: true },
  { year: "1986", title: "Treinamento internacional", desc: "Carlos Alberto Goés frequenta treinamento no The National Theater of the Deaf, nos Estados Unidos, trazendo referências decisivas para a fundação do CIACS.", key: false },
  { year: "1989", title: "Fundação do CIACS", desc: "Em 28 de fevereiro de 1989, Carlos Alberto Goés cria a CISACEN com a fonoaudióloga Lanúcia Quintanilha e a professora Luiza Monteiro — a instituição que conhecemos hoje como CIACS. Produções desta fase: 'Bar da Vida', 'A Metamorfose', 'O Jornaleiro Sofredor' e as óperas 'La Bohème' e 'A Criação'.", key: true },
  { year: "1991", title: "Festival de Paty dos Alferes", desc: "O grupo apresenta-se no Festival de Teatro Amador em Paty dos Alferes — primeira saída institucional importante.", key: false },
  { year: "1993", title: "Companhia Surda de Teatro", desc: "Estreia de 'Somos Todos Diferentes — Viva a Diferença' no hotel Copa d'Or durante o Congresso Brasileiro sobre Bilinguismo. O coletivo passa a se chamar Companhia Surda de Teatro (1993–1997).", key: true },
  { year: "1996", title: "Nelson Pimenta em Nova York", desc: "Nelson Pimenta completa formação profissional em Nova York e passa a integrar a referência internacional do CIACS, depois conduzindo workshops como Visual Vernacular e Espanhol para Surdos.", key: false },
  { year: "2002", title: "Teatro Absurdo", desc: "Apresentação de 'A Lição', de Eugène Ionesco, com direção de Breno Moroni e Alexandre Luiz. Inaugura a fase do Teatro Absurdo (2001–2003).", key: true },
  { year: "2005", title: "Teatro Brasileiro de Surdos", desc: "Período de diversas apresentações sob a marca Teatro Brasileiro de Surdos (2005–2008). Em 2008 nasce o grupo Palavras Visíveis, que se torna parceiro contínuo do CIACS.", key: false },
  { year: "2016", title: "I Encontro Estadual de Arte e Cultura Surda", desc: "Marco institucional de articulação estadual entre coletivos surdos do Rio. Mesmo ano em que o CIACS começa a se internacionalizar e expandir sua presença na cena cultural.", key: true },
  { year: "2017", title: "Festival Clin d'Œil — França", desc: "Apresentação de 'Cidade de Deus — casos e conflitos' no Festival Clin d'Œil, em Reims, durante uma das mais importantes mostras mundiais de cultura surda.", key: true },
  { year: "2018", title: "Posse da diretoria 2018–2020", desc: "Continuidade institucional confirmada com eleição da diretoria de 2018, sucedida pela diretoria 2020–2022. Comemorações dos 28 e 29 anos com sócios e parceiros.", key: false },
  { year: "2020", title: "Diretoria 2020–2022", desc: "Eleita em assembleia ordinária de abril de 2020, a chapa traz nomes históricos e novos sócios comprometidos com a continuidade da missão cultural.", key: false },
  { year: "2021", title: "Workshops com Nelson Pimenta", desc: "Workshop de Espanhol para Surdos e Workshop de Visual Vernacular, ministrados por Nelson Pimenta — referência acadêmica que projetou o CIACS no debate sobre Libras e poesia visual.", key: false },
  { year: "2026", title: "35 anos de arte e resistência", desc: "O CIACS chega aos 35 anos sediado na Rua do Catete, 247 — sala 704. Quatro décadas de trajetória, mais de 23 produções textuais arquivadas, 48 vídeos no YouTube e uma comunidade ativa em redes sociais.", key: true },
];

const SectionLabel = ({ children, light }: { children: React.ReactNode; light?: boolean }) => (
  <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: light ? GOLD : GOLD, marginBottom: "1rem" }}>
    {children}
  </p>
);

export function Historia() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: "#1A1A1A", padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionLabel>Nossa Trajetória</SectionLabel>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              margin: 0,
              maxWidth: "520px",
            }}
          >
            História do CIACS
          </h1>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "1rem",
              fontWeight: 300,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.7,
              marginTop: "1.5rem",
              maxWidth: "460px",
            }}
          >
            De 1983 ao presente — quatro décadas integrando arte, cultura e Libras na trajetória da comunidade surda brasileira.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ backgroundColor: OFF_WHITE, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 2rem", display: "flex", alignItems: "flex-start", gap: "1.5rem" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, margin: 0 }}>
              A história do CIACS é a história da luta pela visibilidade e pelo reconhecimento da cultura surda no Brasil. Desde o surgimento do{" "}
              <strong style={{ color: TEXT }}>Grupo Silencioso</strong> em 1983, passando pela fundação formal em 1989, até os dias atuais, cada capítulo desta trajetória é marcado pela arte, pela comunidade e pela determinação.
            </p>
          </div>
          <div style={{ flexShrink: 0, paddingTop: "0.25rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem 6rem" }}>
          {milestones.map((m, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={m.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 80px 1fr",
                  gap: "2rem",
                  alignItems: "start",
                  marginBottom: "1px",
                  position: "relative",
                }}
              >
                {/* Left content or spacer */}
                <div style={{ paddingTop: "2rem", paddingBottom: "2rem", paddingRight: "1rem" }}>
                  {isLeft && (
                    <div
                      style={{
                        padding: "2rem",
                        backgroundColor: m.key ? GREEN : OFF_WHITE,
                        borderLeft: m.key ? `4px solid ${GOLD}` : `1px solid ${BORDER}`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: SANS,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: m.key ? GOLD : MUTED,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {m.key ? "Marco Histórico" : ""}
                      </p>
                      <h3 style={{ fontFamily: SERIF, fontSize: "1.25rem", fontWeight: 700, color: m.key ? "#fff" : TEXT, marginBottom: "0.75rem" }}>
                        {m.title}
                      </h3>
                      <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: m.key ? "rgba(255,255,255,0.8)" : MUTED, lineHeight: 1.7, margin: "0 0 1rem" }}>
                        {m.desc}
                      </p>
                      <LibrasButton size="sm" />
                    </div>
                  )}
                </div>

                {/* Year (center) */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: "relative" }}>
                  <div
                    style={{
                      width: "1px",
                      backgroundColor: BORDER,
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      zIndex: 1,
                      marginTop: "2.25rem",
                      backgroundColor: m.key ? GREEN : "#fff",
                      border: `1px solid ${m.key ? GREEN : BORDER}`,
                      padding: "0.5rem 0.875rem",
                      textAlign: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: m.key ? "#fff" : TEXT,
                        letterSpacing: "0.02em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.year}
                    </span>
                  </div>
                </div>

                {/* Right content or spacer */}
                <div style={{ paddingTop: "2rem", paddingBottom: "2rem", paddingLeft: "1rem" }}>
                  {!isLeft && (
                    <div
                      style={{
                        padding: "2rem",
                        backgroundColor: m.key ? GREEN : OFF_WHITE,
                        borderRight: m.key ? `4px solid ${GOLD}` : `1px solid ${BORDER}`,
                        borderLeft: m.key ? "none" : `1px solid ${BORDER}`,
                        borderTop: `1px solid ${m.key ? GREEN : BORDER}`,
                        borderBottom: `1px solid ${m.key ? GREEN : BORDER}`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: SANS,
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: m.key ? GOLD : MUTED,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {m.key ? "Marco Histórico" : ""}
                      </p>
                      <h3 style={{ fontFamily: SERIF, fontSize: "1.25rem", fontWeight: 700, color: m.key ? "#fff" : TEXT, marginBottom: "0.75rem" }}>
                        {m.title}
                      </h3>
                      <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: m.key ? "rgba(255,255,255,0.8)" : MUTED, lineHeight: 1.7, margin: "0 0 1rem" }}>
                        {m.desc}
                      </p>
                      <LibrasButton size="sm" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Closing */}
      <section style={{ backgroundColor: GREEN, padding: "5rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Em Contínua Escrita
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            A história continua sendo escrita
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Cada novo aluno, cada apresentação, cada parceria é um novo capítulo nesta história de arte, resistência e cultura surda.
          </p>
          <a
            href="/associe-se"
            style={{
              fontFamily: SANS,
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "inline-block",
              backgroundColor: GOLD,
              color: TEXT,
              padding: "0.875rem 2rem",
              textDecoration: "none",
            }}
          >
            Faça parte desta história
          </a>
        </div>
      </section>
    </div>
  );
}
