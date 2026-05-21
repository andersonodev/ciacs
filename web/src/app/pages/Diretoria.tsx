import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE_DEEP, BLUE, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const DIRETORIA = [
  { cargo: "Presidente", nome: "A ser publicado", bio: "Representa o CIACS junto a parceiros institucionais e preside as assembleias gerais." },
  { cargo: "Vice-Presidente", nome: "A ser publicado", bio: "Apoia a presidência e responde institucionalmente em sua ausência." },
  { cargo: "1ª Secretária", nome: "A ser publicado", bio: "Responsável pelas atas, comunicação oficial e arquivo institucional." },
  { cargo: "2º Secretário", nome: "A ser publicado", bio: "Apoia a secretaria e o canal de relação com os sócios." },
  { cargo: "1º Tesoureiro", nome: "A ser publicado", bio: "Responde pela gestão financeira e prestação de contas." },
  { cargo: "2ª Tesoureira", nome: "A ser publicado", bio: "Apoia a tesouraria e o controle de doações e contribuições." },
];

const CONSELHO = [
  { papel: "Conselho Fiscal · Titular 1", nome: "A ser publicado" },
  { papel: "Conselho Fiscal · Titular 2", nome: "A ser publicado" },
  { papel: "Conselho Fiscal · Titular 3", nome: "A ser publicado" },
];

const HISTORICAS = [
  { periodo: "2020 — 2022", destaque: "Diretoria atual eleita em assembleia ordinária de abril de 2020." },
  { periodo: "2018 — 2020", destaque: "Posse em janeiro de 2018, sob lema 'continuidade e renovação'." },
  { periodo: "Anteriores", destaque: "Mandatos sucessivos desde 1989, com transições democráticas a cada biênio." },
];

export function Diretoria() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 5rem", color: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Estrutura organizacional
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Diretoria do CIACS
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "62ch", lineHeight: 1.75, margin: 0 }}>
            O CIACS é gerido por uma Diretoria eleita em assembleia ordinária dos sócios, com mandatos de dois anos e prestação de contas anual ao Conselho Fiscal.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: INK, margin: "0 0 2.5rem" }}>
            Mandato 2020 — 2022
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {DIRETORIA.map((d) => (
              <article key={d.cargo} style={{ border: `1px solid ${BORDER}`, padding: "1.75rem", borderLeft: `4px solid ${GOLD}` }}>
                <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE, margin: 0 }}>
                  {d.cargo}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.35rem", fontWeight: 800, color: INK, margin: "0.4rem 0 0.8rem" }}>
                  {d.nome}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>{d.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SOFT, padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(280px, 1fr) 2fr", gap: "3rem" }}>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
              Conselho Fiscal
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "1.9rem", fontWeight: 900, color: INK, margin: "0.5rem 0 1rem" }}>
              Fiscaliza e referenda
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
              Acompanha a prestação de contas anual e referenda as decisões financeiras submetidas à Assembleia Geral.
            </p>
          </div>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            {CONSELHO.map((c) => (
              <div key={c.papel} style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, padding: "1.25rem 1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE_DEEP, margin: 0 }}>{c.papel}</p>
                <p style={{ fontFamily: SERIF, fontSize: "1rem", fontWeight: 700, color: INK, margin: 0 }}>{c.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900, color: INK, margin: "0 0 2rem" }}>
            Diretorias anteriores
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {HISTORICAS.map((h) => (
              <li key={h.periodo} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: "2rem", padding: "1.25rem 0", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontFamily: SANS, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em", color: GOLD }}>{h.periodo}</span>
                <span style={{ fontFamily: SANS, fontSize: "0.98rem", color: MUTED, lineHeight: 1.7 }}>{h.destaque}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
