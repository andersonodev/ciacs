import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE_DEEP, GOLD, INK, MUTED, BORDER } from "../constants";

const CLAUSULAS = [
  {
    titulo: "1. Objeto",
    corpo: "Este Termo de Compromisso regula a participação da pessoa inscrita em cursos, oficinas, eventos e demais atividades promovidas pelo Centro de Integração de Arte e Cultura dos Surdos (CIACS), associação cultural sem fins lucrativos sediada no Rio de Janeiro · RJ.",
  },
  {
    titulo: "2. Inscrição",
    corpo: "A inscrição é confirmada após o recebimento da documentação solicitada (documento de identidade com foto e comprovante bancário, quando aplicável) e da contribuição financeira correspondente, quando houver. Vagas são limitadas e atribuídas por ordem de confirmação.",
  },
  {
    titulo: "3. Acessibilidade e ambiente bilíngue",
    corpo: "Todas as atividades acontecem em ambiente bilíngue (Libras + Português). O CIACS compromete-se a oferecer materiais e mediação acessíveis. A pessoa inscrita compromete-se a respeitar a centralidade da Libras e o protagonismo da comunidade surda.",
  },
  {
    titulo: "4. Frequência e certificação",
    corpo: "Para emissão de certificado é exigida frequência mínima de 75% das aulas e a entrega das atividades previstas. Justificativas devem ser apresentadas com antecedência, sempre que possível.",
  },
  {
    titulo: "5. Convivência",
    corpo: "Espera-se conduta respeitosa entre estudantes, professores, intérpretes e equipe. Atitudes capacitistas, discriminatórias ou desrespeitosas implicarão desligamento sem reembolso, observado o contraditório.",
  },
  {
    titulo: "6. Uso de imagem",
    corpo: "Sempre que necessário, o CIACS solicitará autorização específica para uso de imagem em divulgação institucional, materiais didáticos e preservação de memória. A recusa não impede a participação nas atividades.",
  },
  {
    titulo: "7. Cancelamentos e reembolsos",
    corpo: "Pedidos de cancelamento devem ser feitos por escrito. As condições de reembolso seguem o Código de Defesa do Consumidor e as regras específicas de cada curso, comunicadas no momento da matrícula.",
  },
  {
    titulo: "8. Vigência",
    corpo: "Este Termo vigora pelo período de duração da atividade em que a pessoa estiver inscrita. Alterações são comunicadas com antecedência mínima de 30 dias.",
  },
  {
    titulo: "9. Foro",
    corpo: "Fica eleito o foro da Comarca da Capital do Estado do Rio de Janeiro para dirimir quaisquer controvérsias relativas a este Termo.",
  },
];

export function Termo() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 4rem", color: "#fff" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Documento institucional
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Termo de Compromisso
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Vigente desde 21 de maio de 2026.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          {CLAUSULAS.map((c) => (
            <article key={c.titulo} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.5rem", marginBottom: "2.5rem" }}>
              <h2 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 800, color: INK, margin: "0 0 0.75rem" }}>{c.titulo}</h2>
              <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.85, margin: 0 }}>{c.corpo}</p>
            </article>
          ))}

          <div style={{ marginTop: "3rem", padding: "1.75rem", backgroundColor: "#fff", border: `1px solid ${BORDER}` }}>
            <p style={{ fontFamily: SANS, fontSize: "0.9rem", color: MUTED, lineHeight: 1.75, margin: 0 }}>
              Ao concluir sua inscrição, você declara que leu e concorda com este Termo de Compromisso.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
