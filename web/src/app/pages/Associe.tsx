import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const benefits = [
  "Desconto em todos os cursos do CIACS",
  "Acesso prioritário a inscrições e eventos",
  "Participação nas assembleias e decisões institucionais",
  "Acervo digital exclusivo de materiais culturais",
  "Boletim informativo mensal com agenda cultural",
  "Carteirinha de associado reconhecida por parceiros",
  "Ingresso gratuito ou com desconto em espetáculos",
  "Apoio ao movimento de cultura surda no Brasil",
];

const steps = [
  { num: "01", title: "Entre em contato", desc: "Envie uma mensagem pelo WhatsApp, e-mail ou formulário de contato manifestando seu interesse em se associar." },
  { num: "02", title: "Preencha o formulário", desc: "Nossa equipe enviará o formulário de associação com seus dados pessoais e os termos de adesão." },
  { num: "03", title: "Contribuição mensal", desc: "Escolha sua modalidade e efetue a contribuição via Pix ou transferência bancária." },
  { num: "04", title: "Seja bem-vindo", desc: "Você recebe sua carteirinha digital e passa a ter acesso a todos os benefícios de associado." },
];

const plans = [
  { name: "Estudante", price: "R$ 20", period: "/mês", desc: "Para estudantes e membros da comunidade surda em formação.", features: ["Desconto em cursos", "Boletim mensal", "Eventos com desconto"] },
  { name: "Associado", price: "R$ 50", period: "/mês", featured: true, desc: "A modalidade completa para quem quer participar ativamente do CIACS.", features: ["Todos os benefícios Estudante", "Acesso prioritário a eventos", "Carteirinha digital", "Participação nas assembleias"] },
  { name: "Apoiador", price: "R$ 100", period: "/mês", desc: "Para quem quer apoiar com maior contribuição e obter reconhecimento institucional.", features: ["Todos os benefícios Associado", "Nome nos materiais institucionais", "Reconhecimento no site do CIACS"] },
];

export function Associe() {
  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Faça Parte
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Como se Associar
          </h1>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
              Por que associar-se
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: TEXT, marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Benefícios de ser Associado
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: "2rem" }}>
              Como associado, você faz parte ativa da história e do futuro do CIACS. Sua contribuição sustenta programas culturais, cursos e eventos que beneficiam centenas de pessoas na comunidade surda.
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {benefits.map((b) => (
                <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", fontFamily: SANS, fontSize: "0.9rem", color: MUTED }}>
                  <span style={{ width: "5px", height: "1px", backgroundColor: GREEN, flexShrink: 0, marginTop: "0.7em", display: "block" }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div style={{ backgroundColor: OFF_WHITE, padding: "2.5rem", border: `1px solid ${BORDER}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1.5rem" }}>
              Como funciona
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {steps.map((s, i) => (
                <div key={s.num} style={{ display: "flex", gap: "1.5rem", paddingBottom: "1.75rem", marginBottom: i < steps.length - 1 ? "1.75rem" : 0, borderBottom: i < steps.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                  <div style={{ flexShrink: 0 }}>
                    <p style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 900, color: GREEN, lineHeight: 1, margin: 0 }}>{s.num}</p>
                  </div>
                  <div>
                    <h4 style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 700, color: TEXT, marginBottom: "0.375rem" }}>{s.title}</h4>
                    <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ backgroundColor: OFF_WHITE, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "6rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Modalidades
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem" }}>
            Planos de Associação
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 0, border: `1px solid ${BORDER}` }}>
            {plans.map((p, i) => (
              <div
                key={p.name}
                style={{
                  backgroundColor: p.featured ? GREEN : "#fff",
                  padding: "2.5rem",
                  borderRight: i < plans.length - 1 ? `1px solid ${BORDER}` : "none",
                  position: "relative",
                }}
              >
                {p.featured && (
                  <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem" }}>
                    Mais Popular
                  </p>
                )}
                <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, color: p.featured ? "#fff" : TEXT, marginBottom: "0.25rem" }}>{p.name}</h3>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.25rem", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: SERIF, fontSize: "2.2rem", fontWeight: 900, color: p.featured ? GOLD : GREEN }}>{p.price}</span>
                  <span style={{ fontFamily: SANS, fontSize: "0.875rem", color: p.featured ? "rgba(255,255,255,0.6)" : MUTED }}>{p.period}</span>
                </div>
                <p style={{ fontFamily: SANS, fontSize: "0.85rem", color: p.featured ? "rgba(255,255,255,0.75)" : MUTED, lineHeight: 1.6, marginBottom: "1.5rem" }}>{p.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ fontFamily: SANS, fontSize: "0.85rem", color: p.featured ? "rgba(255,255,255,0.85)" : MUTED, paddingLeft: "1rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, top: "0.6em", width: "5px", height: "1px", backgroundColor: p.featured ? GOLD : GREEN, display: "block" }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contato"
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    display: "block",
                    textAlign: "center",
                    padding: "0.75rem",
                    textDecoration: "none",
                    backgroundColor: p.featured ? GOLD : "transparent",
                    color: p.featured ? TEXT : GREEN,
                    border: p.featured ? "none" : `1px solid ${GREEN}`,
                  }}
                >
                  Associar-se
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#fff", borderTop: `1px solid ${BORDER}`, padding: "5rem 2rem", textAlign: "center" }}>
        <h3 style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 700, color: TEXT, marginBottom: "1rem" }}>
          Pronto para se associar?
        </h3>
        <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, marginBottom: "2rem" }}>
          Entre em contato pelo WhatsApp ou e-mail para iniciar o processo de associação.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/5521999999999" target="_blank" rel="noreferrer"
            style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", backgroundColor: GREEN, color: "#fff", padding: "0.875rem 2rem", textDecoration: "none" }}>
            WhatsApp
          </a>
          <Link to="/contato"
            style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", backgroundColor: "transparent", color: TEXT, padding: "0.875rem 2rem", textDecoration: "none", border: `1px solid ${BORDER}`, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            Formulário de Contato <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </div>
  );
}
