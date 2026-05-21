import { useState } from "react";
import { useForm } from "react-hook-form";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

const contactInfo = [
  { label: "Endereço", value: "Tijuca, Rio de Janeiro — RJ, Brasil" },
  { label: "E-mail", value: "ciacsrj@gmail.com", href: "mailto:ciacsrj@gmail.com" },
  { label: "WhatsApp", value: "(21) 99999-9999", href: "https://wa.me/5521999999999" },
  { label: "Instagram", value: "@ciacsrj", href: "https://instagram.com/ciacsrj" },
  { label: "YouTube", value: "CIACS RJ", href: "https://youtube.com/@ciacsrj" },
  { label: "Facebook", value: "CIACS — Arte e Cultura dos Surdos", href: "https://facebook.com/ciacsrj" },
];

const fieldBase: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 0",
  border: "none",
  borderBottom: `1px solid ${BORDER}`,
  background: "transparent",
  fontFamily: "'Inter', system-ui, sans-serif",
  fontSize: "0.95rem",
  color: "#1A1A1A",
  outline: "none",
  boxSizing: "border-box",
};

export function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (_: FormData) => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Fale Conosco
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Contato
          </h1>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "6rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "7rem",
            alignItems: "start",
          }}
        >
          {/* Left — Contact info */}
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
              Informações
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem", lineHeight: 1.2 }}>
              Como nos encontrar
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    paddingTop: i > 0 ? "1.75rem" : 0,
                    paddingBottom: "1.75rem",
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <p style={{ fontFamily: SANS, fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginBottom: "0.375rem" }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      style={{ fontFamily: SANS, fontSize: "0.95rem", color: TEXT, textDecoration: "none", borderBottom: `1px solid ${BORDER}`, paddingBottom: "1px" }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: TEXT, margin: 0 }}>{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "2.5rem", padding: "1.5rem", backgroundColor: OFF_WHITE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${GREEN}` }}>
              <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: TEXT, display: "block", marginBottom: "0.25rem" }}>Privacidade (LGPD)</strong>
                Seus dados serão utilizados exclusivamente para responder à sua mensagem, em conformidade com a Lei Geral de Proteção de Dados.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
              Formulário
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 700, color: TEXT, marginBottom: "3rem", lineHeight: 1.2 }}>
              Envie uma mensagem
            </h2>

            {submitted ? (
              <div style={{ padding: "3rem 0", borderTop: `1px solid ${BORDER}` }}>
                <p style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 700, color: GREEN, marginBottom: "0.75rem" }}>
                  Mensagem recebida.
                </p>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.7 }}>
                  Obrigado pelo contato. Nossa equipe responderá em até 48 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {/* Nome */}
                <div>
                  <label style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "0.25rem" }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    style={{ ...fieldBase, borderBottomColor: errors.nome ? "#b91c1c" : BORDER }}
                    {...register("nome", { required: "Nome é obrigatório" })}
                  />
                  {errors.nome && (
                    <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#b91c1c", marginTop: "0.375rem" }}>
                      {errors.nome.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "0.25rem" }}>
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    style={{ ...fieldBase, borderBottomColor: errors.email ? "#b91c1c" : BORDER }}
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Endereço de e-mail inválido" },
                    })}
                  />
                  {errors.email && (
                    <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#b91c1c", marginTop: "0.375rem" }}>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Assunto */}
                <div>
                  <label style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "0.25rem" }}>
                    Assunto
                  </label>
                  <select
                    style={{ ...fieldBase, cursor: "pointer", borderBottomColor: errors.assunto ? "#b91c1c" : BORDER }}
                    defaultValue=""
                    {...register("assunto", { required: "Selecione um assunto" })}
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="cursos">Informações sobre Cursos</option>
                    <option value="inscricao">Inscrição / Matrícula</option>
                    <option value="parceria">Parceria Institucional</option>
                    <option value="doacao">Doação / Apoio Financeiro</option>
                    <option value="imprensa">Imprensa</option>
                    <option value="outro">Outro</option>
                  </select>
                  {errors.assunto && (
                    <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#b91c1c", marginTop: "0.375rem" }}>
                      {errors.assunto.message}
                    </p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "0.25rem" }}>
                    Mensagem
                  </label>
                  <textarea
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    style={{ ...fieldBase, resize: "vertical", borderBottomColor: errors.mensagem ? "#b91c1c" : BORDER }}
                    {...register("mensagem", {
                      required: "Mensagem é obrigatória",
                      minLength: { value: 20, message: "Mensagem muito curta (mínimo 20 caracteres)" },
                    })}
                  />
                  {errors.mensagem && (
                    <p style={{ fontFamily: SANS, fontSize: "0.72rem", color: "#b91c1c", marginTop: "0.375rem" }}>
                      {errors.mensagem.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    style={{
                      fontFamily: SANS,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      backgroundColor: GREEN,
                      color: "#fff",
                      border: "none",
                      padding: "1rem 2.5rem",
                      cursor: "pointer",
                    }}
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
