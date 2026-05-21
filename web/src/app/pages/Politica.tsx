import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE_DEEP, BLUE, GOLD, INK, MUTED, BORDER } from "../constants";

const SECOES = [
  {
    titulo: "1. Quem somos",
    corpo: "O Centro de Integração de Arte e Cultura dos Surdos (CIACS), CNPJ 32.361.230/0001-72, é uma associação sem fins lucrativos sediada na Rua do Catete, 247 — sala 704, Catete, Rio de Janeiro · RJ. É responsável pelo tratamento dos dados pessoais coletados neste site, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).",
  },
  {
    titulo: "2. Quais dados coletamos",
    corpo: "Coletamos apenas os dados estritamente necessários para a finalidade declarada em cada formulário — por exemplo, nome, e-mail, telefone e CPF nas inscrições em cursos; nome e mensagem no formulário de contato; documentos enviados como comprovantes de matrícula. Cookies técnicos são utilizados para preservar suas preferências de navegação e o consentimento ao banner LGPD.",
  },
  {
    titulo: "3. Finalidades do tratamento",
    corpo: "Tratamos os seus dados para: (i) confirmar e administrar a sua matrícula em cursos; (ii) responder a contatos e dúvidas; (iii) emitir certificados, declarações e recibos; (iv) cumprir obrigações legais aplicáveis a entidades culturais sem fins lucrativos; (v) preservar a memória institucional do CIACS, com o devido cuidado quanto à imagem.",
  },
  {
    titulo: "4. Base legal",
    corpo: "Tratamos seus dados com base no consentimento que você nos fornece ao preencher os formulários, no cumprimento de obrigação legal e regulatória, na execução de contrato ou procedimento preliminar a contrato (por exemplo, sua inscrição em um curso) e no legítimo interesse para fins históricos e culturais.",
  },
  {
    titulo: "5. Compartilhamento",
    corpo: "O CIACS não vende, aluga ou cede seus dados pessoais a terceiros. Eles podem ser compartilhados apenas com parceiros institucionais expressamente autorizados (por exemplo, instituições parceiras na realização de cursos e eventos), prestadores de serviços essenciais (hospedagem, e-mail, plataformas educacionais) e autoridades públicas mediante obrigação legal.",
  },
  {
    titulo: "6. Seus direitos",
    corpo: "Você pode, a qualquer momento, solicitar a confirmação da existência do tratamento, o acesso aos seus dados, a correção de dados incompletos, inexatos ou desatualizados, a anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade, a portabilidade, a informação sobre compartilhamento e a revogação do consentimento. Para exercer qualquer direito, envie um e-mail para ciacsrj@gmail.com.",
  },
  {
    titulo: "7. Retenção",
    corpo: "Mantemos seus dados pelo tempo necessário ao cumprimento das finalidades para as quais foram coletados, observando os prazos legais aplicáveis. Após esse período, os dados são eliminados ou anonimizados, ressalvada a manutenção de informação para preservação de memória cultural quando autorizada por você.",
  },
  {
    titulo: "8. Segurança",
    corpo: "Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados contra acessos não autorizados, perdas e usos indevidos. Em caso de incidente de segurança que ofereça risco ou dano relevante, você será comunicado e a ANPD será notificada.",
  },
  {
    titulo: "9. Atualizações",
    corpo: "Esta política pode ser atualizada para refletir mudanças legais, técnicas ou organizacionais. A versão vigente está sempre disponível nesta página, com a data da última revisão indicada ao final.",
  },
];

export function Politica() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 4rem", color: "#fff" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Documento institucional
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Política de Privacidade
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Última revisão: 21 de maio de 2026 — conforme Lei nº 13.709/2018 (LGPD).
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          {SECOES.map((s) => (
            <article key={s.titulo} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 800, color: INK, margin: "0 0 0.75rem" }}>{s.titulo}</h2>
              <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.85, margin: 0 }}>{s.corpo}</p>
            </article>
          ))}

          <div style={{ marginTop: "3rem", padding: "1.75rem", backgroundColor: "rgba(29,78,216,0.05)", borderLeft: `4px solid ${BLUE}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: INK, lineHeight: 1.75, margin: 0 }}>
              <strong>Dúvidas?</strong> Escreva para <a href="mailto:ciacsrj@gmail.com" style={{ color: BLUE, textDecoration: "underline" }}>ciacsrj@gmail.com</a>. Você também pode dirigir-se à Autoridade Nacional de Proteção de Dados (ANPD).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
