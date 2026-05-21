import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const partners = [
  { name: "DIPEBS / MEC", full: "Diretoria de Políticas de Educação Bilíngue de Surdos — Ministério da Educação", type: "Governo Federal" },
  { name: "INES", full: "Instituto Nacional de Educação de Surdos", type: "Educação" },
  { name: "FENEIS", full: "Federação Nacional de Educação e Integração dos Surdos", type: "Movimento Surdo" },
  { name: "CAPES", full: "Coordenação de Aperfeiçoamento de Pessoal de Nível Superior", type: "Pesquisa" },
  { name: "FAPERJ", full: "Fundação Carlos Chagas Filho de Amparo à Pesquisa do Estado do Rio de Janeiro", type: "Fomento" },
  { name: "FEBRAPILS", full: "Federação Brasileira das Associações dos Profissionais Tradutores e Intérpretes de Libras", type: "Profissional" },
  { name: "Secretaria Municipal de Cultura", full: "Secretaria Municipal de Cultura do Rio de Janeiro", type: "Governo Municipal" },
  { name: "UERJ", full: "Universidade do Estado do Rio de Janeiro — Departamento de Letras e Libras", type: "Acadêmico" },
];

const social = [
  { platform: "Instagram", handle: "@ciacsrj", url: "https://instagram.com/ciacsrj", desc: "Acompanhe a programação cultural, bastidores e a comunidade surda no dia a dia." },
  { platform: "YouTube", handle: "CIACS RJ", url: "https://youtube.com/@ciacsrj", desc: "Vídeos em Libras, espetáculos gravados, aulas abertas e documentários institucionais." },
  { platform: "Facebook", handle: "CIACS — Arte e Cultura dos Surdos", url: "https://facebook.com/ciacsrj", desc: "Notícias institucionais, eventos e galeria de fotos da comunidade." },
];

const whatWeOffer = [
  { title: "Visibilidade institucional", desc: "Presença em materiais gráficos, site, eventos e redes sociais do CIACS." },
  { title: "Acesso à comunidade surda", desc: "Conexão direta com artistas, educadores e lideranças surdas de todo o Brasil." },
  { title: "Ações conjuntas", desc: "Co-produção de eventos, exposições, workshops e publicações culturais." },
  { title: "Certificado de parceria", desc: "Reconhecimento formal com selo CIACS em documentos e comunicações oficiais." },
];

export function Parcerias() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Redes e Alianças
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Parcerias
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", marginTop: "1.5rem", maxWidth: "560px", lineHeight: 1.7 }}>
            O CIACS constrói pontes entre a comunidade surda e instituições culturais, educacionais e governamentais. Parceiros que compartilham nossa missão ampliam o impacto coletivo.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section style={{ backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Parceiros Institucionais
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem" }}>
            Quem caminha conosco
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1px", backgroundColor: BORDER, border: `1px solid ${BORDER}` }}>
            {partners.map((p) => (
              <div key={p.name} style={{ backgroundColor: "#fff", padding: "2.5rem" }}>
                <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "0.875rem" }}>
                  {p.type}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.25rem", fontWeight: 700, color: TEXT, marginBottom: "0.625rem", lineHeight: 1.3 }}>
                  {p.name}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>
                  {p.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social media */}
      <section style={{ backgroundColor: OFF_WHITE, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Redes Sociais
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: TEXT, marginBottom: "0.75rem" }}>
            Siga o CIACS
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, marginBottom: "3.5rem", maxWidth: "520px" }}>
            Acompanhe a programação, conheça nossos artistas e faça parte da comunidade surda nas redes.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 0, border: `1px solid ${BORDER}` }}>
            {social.map((s, i) => (
              <div
                key={s.platform}
                style={{
                  backgroundColor: "#fff",
                  padding: "2.5rem",
                  borderRight: i < social.length - 1 ? `1px solid ${BORDER}` : "none",
                }}
              >
                <p style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 700, color: TEXT, marginBottom: "0.25rem" }}>
                  {s.platform}
                </p>
                <p style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, color: GREEN, marginBottom: "1rem", letterSpacing: "0.02em" }}>
                  {s.handle}
                </p>
                <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, marginBottom: "1.75rem" }}>
                  {s.desc}
                </p>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
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
                  Seguir <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — new partnership */}
      <section style={{ backgroundColor: "#fff", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
              Seja Parceiro
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Construa conosco a cultura surda no Brasil
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: "0.875rem" }}>
              Buscamos parcerias com instituições culturais, educacionais, empresas e órgãos públicos comprometidos com a acessibilidade e a valorização da cultura surda.
            </p>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Uma parceria com o CIACS significa associar sua marca a 35 anos de excelência, impacto social comprovado e uma rede consolidada na comunidade surda brasileira.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
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
                Propor Parceria <ArrowRight size={13} />
              </Link>
              <a
                href="mailto:ciacsrj@gmail.com"
                style={{
                  fontFamily: SANS,
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  backgroundColor: "transparent",
                  color: TEXT,
                  padding: "0.875rem 2rem",
                  textDecoration: "none",
                  border: `1px solid ${BORDER}`,
                }}
              >
                ciacsrj@gmail.com
              </a>
            </div>
          </div>

          {/* What we offer */}
          <div style={{ backgroundColor: OFF_WHITE, padding: "3rem", border: `1px solid ${BORDER}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1.5rem" }}>
              O que oferecemos
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {whatWeOffer.map((item, i) => (
                <div
                  key={item.title}
                  style={{
                    paddingTop: i > 0 ? "1.5rem" : 0,
                    paddingBottom: i < whatWeOffer.length - 1 ? "1.5rem" : 0,
                    borderBottom: i < whatWeOffer.length - 1 ? `1px solid ${BORDER}` : "none",
                  }}
                >
                  <h4 style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700, color: TEXT, marginBottom: "0.375rem" }}>{item.title}</h4>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
