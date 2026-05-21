import { useState } from "react";
import { Link } from "react-router";
import { Copy, Check, ArrowRight } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

const PIX_KEY = "ciacsrj@gmail.com";

const impacts = [
  { value: "R$ 30", desc: "Paga o material didático de um aluno por um mês" },
  { value: "R$ 60", desc: "Cobre o acesso de um aluno ao Google Classroom por um semestre" },
  { value: "R$ 150", desc: "Apoia a realização de um workshop cultural aberto ao público" },
  { value: "R$ 300", desc: "Patrocina a participação de um artista em festival externo" },
];

const bank = [
  { label: "Banco", value: "Banco do Brasil" },
  { label: "Agência", value: "1234-5" },
  { label: "Conta Corrente", value: "00012345-6" },
  { label: "Favorecido", value: "CIACS — Centro de Integração da Arte e Cultura dos Surdos" },
  { label: "CNPJ", value: "XX.XXX.XXX/0001-XX" },
];

export function Doacao() {
  const [copiedPix, setCopiedPix] = useState(false);
  const [copiedBank, setCopiedBank] = useState(false);

  const copy = (text: string, which: "pix" | "bank") => {
    navigator.clipboard.writeText(text);
    if (which === "pix") { setCopiedPix(true); setTimeout(() => setCopiedPix(false), 2000); }
    else { setCopiedBank(true); setTimeout(() => setCopiedBank(false), 2000); }
  };

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Apoie o CIACS
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Faça uma Doação
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.7)", marginTop: "1.5rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Sua doação mantém viva a arte e a cultura surda no Brasil. Cada contribuição faz diferença real na vida de artistas surdos.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: OFF_WHITE, borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "4rem 2rem", textAlign: "center" }}>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: MUTED, lineHeight: 1.9 }}>
            O CIACS é uma organização sem fins lucrativos que depende de doações e parcerias para manter seus programas gratuitos ou de baixo custo acessíveis à comunidade surda. Em 35 anos, já formamos mais de{" "}
            <strong style={{ color: TEXT }}>500 artistas surdos</strong> — e com o seu apoio, continuaremos escrevendo esta história.
          </p>
        </div>
      </section>

      {/* Impact */}
      <section style={{ backgroundColor: "#fff" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Seu Impacto
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem" }}>
            O que sua doação financia
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0, border: `1px solid ${BORDER}` }}>
            {impacts.map((im, i) => (
              <div
                key={im.value}
                style={{
                  padding: "2rem",
                  borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : "none",
                  borderBottom: i < 2 ? `1px solid ${BORDER}` : "none",
                }}
              >
                <p style={{ fontFamily: SERIF, fontSize: "1.8rem", fontWeight: 900, color: GREEN, marginBottom: "0.5rem" }}>{im.value}</p>
                <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6, margin: 0 }}>{im.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section style={{ backgroundColor: OFF_WHITE, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "5rem 2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Formas de Doação
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem" }}>
            Como contribuir
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {/* Pix */}
            <div style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, padding: "2.5rem" }}>
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GREEN, marginBottom: "1.25rem" }}>
                Pix
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: MUTED, marginBottom: "0.5rem" }}>Chave Pix (e-mail):</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem", backgroundColor: OFF_WHITE, padding: "0.875rem 1rem", border: `1px solid ${BORDER}`, marginBottom: "0.75rem" }}>
                <span style={{ fontFamily: SANS, fontSize: "0.9rem", fontWeight: 600, color: TEXT }}>{PIX_KEY}</span>
                <button
                  onClick={() => copy(PIX_KEY, "pix")}
                  style={{ background: "none", border: "none", cursor: "pointer", color: copiedPix ? GREEN : MUTED, display: "flex", alignItems: "center", gap: "0.3rem", fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, flexShrink: 0 }}
                >
                  {copiedPix ? <Check size={14} /> : <Copy size={14} />}
                  {copiedPix ? "Copiado" : "Copiar"}
                </button>
              </div>
              <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED }}>Transferências instantâneas, qualquer valor.</p>
            </div>

            {/* Bank */}
            <div style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, padding: "2.5rem" }}>
              <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GREEN, marginBottom: "1.25rem" }}>
                Transferência Bancária
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.25rem" }}>
                {bank.map((b) => (
                  <div key={b.label}>
                    <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, marginBottom: "0.1rem" }}>{b.label}</p>
                    <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: TEXT, margin: 0 }}>{b.value}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => copy(bank.map((b) => `${b.label}: ${b.value}`).join("\n"), "bank")}
                style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", background: "none", border: `1px solid ${BORDER}`, padding: "0.5rem 1rem", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.4rem", color: copiedBank ? GREEN : MUTED }}
              >
                {copiedBank ? <Check size={13} /> : <Copy size={13} />}
                {copiedBank ? "Dados copiados" : "Copiar dados bancários"}
              </button>
            </div>
          </div>

          {/* After donation */}
          <div style={{ marginTop: "2rem", padding: "1.5rem 2rem", backgroundColor: "#fff", border: `1px solid ${BORDER}`, borderLeft: `4px solid ${GREEN}` }}>
            <p style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 700, color: TEXT, marginBottom: "0.375rem" }}>
              Após realizar sua doação
            </p>
            <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Envie o comprovante para <strong style={{ color: TEXT }}>ciacsrj@gmail.com</strong> ou pelo WhatsApp. Você receberá um agradecimento e, se desejar, seu nome será incluído na nossa lista de apoiadores.
            </p>
          </div>
        </div>
      </section>

      {/* Thank you */}
      <section style={{ backgroundColor: GREEN, padding: "5rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem", lineHeight: 1.2 }}>
          Muito obrigado pelo seu apoio
        </h2>
        <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 2rem" }}>
          Cada doação fortalece nossa missão e permite que continuemos formando artistas surdos e promovendo a cultura surda brasileira.
        </p>
        <Link to="/contato"
          style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: "0.4rem", backgroundColor: GOLD, color: TEXT, padding: "0.875rem 2rem", textDecoration: "none" }}>
          Fale Conosco <ArrowRight size={13} />
        </Link>
      </section>
    </div>
  );
}
