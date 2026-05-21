import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE_DEEP, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const ARTISTAS = [
  {
    nome: "Carlos Alberto Goés",
    papel: "Co-fundador · Diretor de teatro",
    bio: "Co-fundador do Grupo Silencioso em 1983 e do CIACS em 1989. Treinou no National Theater of the Deaf (EUA) e dirigiu produções históricas como 'Bar da Vida', 'A Metamorfose' e as óperas 'La Bohème' e 'A Criação'.",
    img: "https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&w=900",
  },
  {
    nome: "Nelson Pimenta",
    papel: "Ator · Professor · Pesquisador",
    bio: "Completou formação profissional em Nova York em 1996. Referência internacional em Visual Vernacular e tradução criativa para Libras, ministrou os workshops de Espanhol para Surdos e VV no CIACS (2021).",
    img: "https://images.pexels.com/photos/8923098/pexels-photo-8923098.jpeg?auto=compress&w=900",
  },
  {
    nome: "Marlene Prado",
    papel: "Co-fundadora",
    bio: "Co-fundadora do Grupo Silencioso (1983), trajetória dedicada à preservação da memória do teatro surdo brasileiro.",
    img: "https://images.pexels.com/photos/4127449/pexels-photo-4127449.jpeg?auto=compress&w=900",
  },
  {
    nome: "Ana Regina Campello",
    papel: "Co-fundadora · Pesquisadora",
    bio: "Co-fundadora do Grupo Silencioso e referência acadêmica na pesquisa de cultura e identidade surdas.",
    img: "https://images.pexels.com/photos/5212343/pexels-photo-5212343.jpeg?auto=compress&w=900",
  },
  {
    nome: "Silas Queiroz",
    papel: "Ator · Diretor",
    bio: "Integrou o grupo a partir do meio dos anos 80, atuou nos espetáculos das décadas de 90 e 2000 e na fase do Teatro Brasileiro de Surdos.",
    img: "https://images.pexels.com/photos/4555456/pexels-photo-4555456.jpeg?auto=compress&w=900",
  },
  {
    nome: "Coletivo Palavras Visíveis",
    papel: "Grupo parceiro",
    bio: "Formado em 2008 a partir do Teatro Brasileiro de Surdos. Mantém parceria contínua com o CIACS em produções, oficinas e festivais.",
    img: "https://images.pexels.com/photos/8923037/pexels-photo-8923037.jpeg?auto=compress&w=900",
  },
];

export function Artistas() {
  return (
    <div>
      <section style={{ backgroundColor: BLUE_DEEP, padding: "6rem 2rem 5rem", color: "#fff" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Memória viva
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1, margin: "0.5rem 0 1.25rem" }}>
            Artistas do CIACS
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "62ch", lineHeight: 1.75, margin: 0 }}>
            Quatro décadas de trajetórias artísticas surdas que fundaram, sustentaram e renovaram o nosso projeto cultural.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <LibrasButton />
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: SOFT, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {ARTISTAS.map((a) => (
            <article key={a.nome} style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                <img src={a.img} alt={a.nome} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "1.75rem" }}>
                <p style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
                  {a.papel}
                </p>
                <h2 style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 800, color: INK, margin: "0.5rem 0 0.9rem", lineHeight: 1.2 }}>
                  {a.nome}
                </h2>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                  {a.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
