import { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { SERIF, SANS, GREEN, GOLD, OFF_WHITE, TEXT, MUTED, BORDER } from "../constants";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  curso: string;
  comprovante: FileList;
  documento: FileList;
  termo: boolean;
};

const inputBase: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: "0.95rem",
  color: TEXT,
  backgroundColor: "transparent",
  border: "none",
  borderBottom: `1px solid ${BORDER}`,
  padding: "0.75rem 0",
  outline: "none",
  width: "100%",
  transition: "border-color 0.2s",
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <label style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED, display: "block", marginBottom: "0.375rem" }}>
    {children}
  </label>
);

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "#B71C1C", marginTop: "0.3rem" }}>{msg}</p> : null;

export function Inscricoes() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  if (submitted) {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", backgroundColor: OFF_WHITE }}>
        <div style={{ maxWidth: "480px", textAlign: "center" }}>
          <div style={{ width: "2px", height: "60px", backgroundColor: GREEN, margin: "0 auto 2rem" }} />
          <h2 style={{ fontFamily: SERIF, fontSize: "2rem", fontWeight: 700, color: TEXT, marginBottom: "1rem" }}>
            Inscrição Recebida
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.8, marginBottom: "2rem" }}>
            Obrigado pela sua inscrição no CIACS. Em breve nossa equipe entrará em contato pelo e-mail informado para confirmar sua matrícula e próximos passos.
          </p>
          <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: MUTED }}>
            Verifique também sua caixa de spam.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              fontFamily: SANS,
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginTop: "2rem",
              backgroundColor: "transparent",
              color: GREEN,
              border: `1px solid ${GREEN}`,
              padding: "0.75rem 1.75rem",
              cursor: "pointer",
            }}
          >
            Nova Inscrição
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section style={{ backgroundColor: GREEN, padding: "6rem 2rem 5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "1rem" }}>
            Matrículas Abertas
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Formulário de Inscrição
          </h1>
        </div>
      </section>

      {/* Form */}
      <section style={{ backgroundColor: OFF_WHITE }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "6rem 2rem" }}>
          <form
            onSubmit={handleSubmit(() => setSubmitted(true))}
            style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, padding: "3rem" }}
          >
            {/* Section: Personal */}
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "2rem" }}>
              Dados Pessoais
            </p>

            <div style={{ marginBottom: "1.75rem" }}>
              <Label>Nome Completo</Label>
              <input type="text" placeholder="Seu nome completo" style={inputBase} {...register("nome", { required: "Campo obrigatório" })} />
              <FieldError msg={errors.nome?.message} />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "1.75rem" }}>
              <div>
                <Label>E-mail</Label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  style={inputBase}
                  {...register("email", {
                    required: "Campo obrigatório",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "E-mail inválido" },
                  })}
                />
                <FieldError msg={errors.email?.message} />
              </div>
              <div>
                <Label>Telefone</Label>
                <input type="tel" placeholder="(21) 99999-9999" style={inputBase} {...register("telefone", { required: "Campo obrigatório" })} />
                <FieldError msg={errors.telefone?.message} />
              </div>
            </div>

            <div style={{ marginBottom: "1.75rem" }}>
              <Label>CPF</Label>
              <input type="text" placeholder="000.000.000-00" style={inputBase} {...register("cpf", { required: "Campo obrigatório" })} />
              <FieldError msg={errors.cpf?.message} />
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <Label>Curso Desejado</Label>
              <select style={{ ...inputBase, cursor: "pointer" }} defaultValue="" {...register("curso", { required: "Selecione um curso" })}>
                <option value="" disabled>Selecione um curso...</option>
                <option value="libras">Libras — Língua Brasileira de Sinais</option>
                <option value="artes">Artes Visuais — Expressão e Criação</option>
                <option value="teatro">Teatro Surdo — Performance e Expressão</option>
                <option value="outro">Outro</option>
              </select>
              <FieldError msg={errors.curso?.message} />
            </div>

            {/* Section: Documents */}
            <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: GOLD, marginBottom: "2rem", paddingTop: "1rem", borderTop: `1px solid ${BORDER}` }}>
              Documentos
            </p>

            {[
              { name: "comprovante" as const, label: "Comprovante Bancário", hint: "Comprovante de pagamento da taxa de matrícula — PDF ou imagem" },
              { name: "documento" as const, label: "Documento Pessoal", hint: "RG, CNH ou outro documento com foto — PDF ou imagem" },
            ].map((f) => (
              <div key={f.name} style={{ marginBottom: "1.75rem" }}>
                <Label>{f.label}</Label>
                <p style={{ fontFamily: SANS, fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{f.hint}</p>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "1rem",
                    border: `1px solid ${BORDER}`,
                    cursor: "pointer",
                    backgroundColor: OFF_WHITE,
                    transition: "border-color 0.2s",
                  }}
                >
                  <ArrowRight size={16} style={{ color: GREEN, flexShrink: 0 }} />
                  <span style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED }}>
                    Selecionar arquivo (PDF, JPG, PNG)
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    style={{ display: "none" }}
                    {...register(f.name, { required: `${f.label} é obrigatório` })}
                  />
                </label>
                <FieldError msg={errors[f.name]?.message} />
              </div>
            ))}

            {/* Termo */}
            <div style={{ marginBottom: "2rem", padding: "1.25rem", border: `1px solid ${BORDER}`, backgroundColor: OFF_WHITE }}>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer" }}>
                <input
                  type="checkbox"
                  style={{ marginTop: "2px", flexShrink: 0, accentColor: GREEN, width: "16px", height: "16px" }}
                  {...register("termo", { required: "Você deve aceitar o Termo de Compromisso" })}
                />
                <span style={{ fontFamily: SANS, fontSize: "0.875rem", color: MUTED, lineHeight: 1.6 }}>
                  Li e aceito o{" "}
                  <a href="#" style={{ color: GREEN, textDecoration: "underline" }} onClick={(e) => e.preventDefault()}>
                    Termo de Compromisso
                  </a>{" "}
                  do CIACS e estou ciente das condições de matrícula.
                </span>
              </label>
              <FieldError msg={errors.termo?.message} />
            </div>

            <button
              type="submit"
              style={{
                fontFamily: SANS,
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                width: "100%",
                backgroundColor: GREEN,
                color: "#fff",
                border: "none",
                padding: "1.125rem",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#154a18"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = GREEN; }}
            >
              Enviar Inscrição
            </button>
          </form>

          {/* LGPD */}
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED, lineHeight: 1.7, marginTop: "1.5rem", textAlign: "center" }}>
            Seus dados serão utilizados exclusivamente para processar sua inscrição, em conformidade com a{" "}
            <strong style={{ color: TEXT }}>Lei Geral de Proteção de Dados (Lei n&ordm; 13.709/2018)</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
