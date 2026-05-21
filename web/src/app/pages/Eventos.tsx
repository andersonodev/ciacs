import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE_DEEP, BLUE, RED, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const PROXIMOS = [
  { titulo: "Setembro Azul 2026", data: "SET · 2026", local: "Rio de Janeiro · RJ", desc: "Mobilização anual de conscientização sobre as causas surdas — palestras, intervenções urbanas e roda de Libras." },
  { titulo: "Caminhada do Orgulho Surdo", data: "SET · 2026", local: "Praia de Copacabana", desc: "Ação pública em parceria com FENEIS, INES e Movimento Surdo Brasileiro." },
];

const HISTORICOS = [
  { ano: "2021", titulo: "Workshop de Espanhol para Surdos com Nelson Pimenta", desc: "Curso ministrado por Nelson Pimenta com foco no aprendizado de espanhol adaptado a estudantes surdos." },
  { ano: "2021", titulo: "Workshop de Visual Vernacular (VV)", desc: "Imersão em VV — a poesia visual da cultura surda — para artistas e estudantes da comunidade." },
  { ano: "2018", titulo: "Jantar de comemoração — 29 anos do CIACS", desc: "Sócios, parceiros e convidados especiais celebraram quase três décadas de atuação." },
  { ano: "2017", titulo: "Fórum Bilíngue do INES — Antropologia e Arte", desc: "Mesa do CIACS sobre antropologia da cultura surda no Fórum Bilíngue do INES." },
  { ano: "2017", titulo: "Cidade de Deus — casos e conflitos (Festival Clin D&apos;Œil, França)", desc: "Apresentação internacional em Reims dentro do festival mundial de cultura surda." },
  { ano: "2017", titulo: "13ª Caminhada do Orgulho Surdo", desc: "Participação ativa na 13ª edição do orgulho surdo do Rio." },
  { ano: "2016", titulo: "I Encontro Estadual de Arte e Cultura Surda", desc: "Marco institucional de articulação estadual entre coletivos surdos." },
  { ano: "2016", titulo: "Setembro Azul 2016", desc: "Programação completa de mobilização — primeira edição com cobertura ampliada." },
  { ano: "2016", titulo: "Sencity UFRJ", desc: "Festas inclusivas no Rio em parceria com UFRJ — música sentida pelo corpo." },
  { ano: "2016", titulo: "MAR + UFRJ — Curso de extensão Imagens Surdas", desc: "Curso de extensão em parceria com Museu de Arte do Rio e UFRJ." },
];

export function Eventos() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 5rem", color: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Agenda cultural surda
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Eventos do CIACS
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "62ch", lineHeight: 1.75, margin: 0 }}>
            Quatro décadas de festivais, encontros, caminhadas e celebrações que articulam a comunidade surda brasileira.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Próximos eventos
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 2.5rem" }}>
            Em destaque
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {PROXIMOS.map((e) => (
              <article key={e.titulo} style={{ border: `1px solid ${BORDER}`, padding: "2rem", borderLeft: `4px solid ${RED}` }}>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.6rem", fontWeight: 800, color: INK, lineHeight: 1.25, margin: 0 }}>
                  {e.titulo}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginTop: "1rem" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: SANS, fontSize: "0.85rem", color: BLUE, fontWeight: 600 }}>
                    <Calendar size={14} /> {e.data}
                  </span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: SANS, fontSize: "0.85rem", color: MUTED }}>
                    <MapPin size={14} /> {e.local}
                  </span>
                </div>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.75, marginTop: "1.25rem" }}>
                  {e.desc}
                </p>
                <Link to="/contato" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1.5rem", fontFamily: SANS, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE, textDecoration: "none", borderBottom: `2px solid ${GOLD}`, paddingBottom: "0.25rem" }}>
                  Confirme presença <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SOFT, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Arquivo
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 2.5rem" }}>
            Eventos marcantes
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {HISTORICOS.map((h) => (
              <li key={h.titulo} style={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: "1.5rem", padding: "1.5rem 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontFamily: SERIF, fontSize: "1.45rem", fontWeight: 900, color: BLUE_DEEP }}>{h.ano}</span>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 700, color: INK, margin: 0 }}>{h.titulo}</h3>
                  <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: MUTED, lineHeight: 1.7, margin: "0.4rem 0 0" }}>{h.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
