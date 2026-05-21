import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Instagram, Facebook, Youtube, Plus, Minus } from "lucide-react";
import { LibrasButton } from "../components/LibrasButton";
import { SERIF, SANS, BLUE, BLUE_DEEP, RED, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const HERO_VIDEO = "https://videos.pexels.com/video-files/10373877/10373877-hd_1920_1080_30fps.mp4";
const BAND_VIDEO = "https://videos.pexels.com/video-files/10374288/10374288-hd_1920_1080_30fps.mp4";

const NEWS_HERO = [
  {
    tag: "Destaque",
    date: "21 MAI · 2026",
    title: "35 anos do CIACS: arte e cultura surda em movimento",
    excerpt: "Uma trajetória de quatro décadas integrando pessoas surdas e ouvintes pelo encontro da arte, da Libras e da educação cultural no Rio de Janeiro.",
    image: "https://images.pexels.com/photos/5184961/pexels-photo-5184961.jpeg?auto=compress&w=1600",
  },
  {
    tag: "Evento",
    date: "10 MAI · 2026",
    title: "Oficinas abertas de Libras acontecem o ano todo",
    excerpt: "Turmas para iniciantes e intermediários em ambiente bilíngue conduzidas por professores surdos.",
    image: "https://images.pexels.com/photos/4127449/pexels-photo-4127449.jpeg?auto=compress&w=1600",
  },
  {
    tag: "Cultura",
    date: "01 MAI · 2026",
    title: "Vídeos em Libras: conteúdo bilíngue para toda a comunidade",
    excerpt: "Nosso canal no YouTube reúne 48 produções acessíveis em LIBRAS para alunos, intérpretes e familiares.",
    image: "https://images.pexels.com/photos/8923037/pexels-photo-8923037.jpeg?auto=compress&w=1600",
  },
];

const NEWS_SMALL = [
  { date: "20 MAI · 2026", tag: "Notícia", title: "Novas turmas de Libras abertas para o segundo semestre" },
  { date: "15 MAI · 2026", tag: "Cultura", title: "VV — Visual Vernacular: a poesia visual da cultura surda" },
  { date: "08 MAI · 2026", tag: "Comunidade", title: "Workshop de Espanhol para Surdos com Nelson Pimenta" },
  { date: "02 MAI · 2026", tag: "Memória", title: "Sócios e convidados celebram os aniversários do CIACS" },
];

const PILLARS = [
  { n: "01", t: "Educação", d: "Formação em Libras e arte. Cursos regulares de Libras, oficinas artísticas e formação de professores e intérpretes em ambiente bilíngue." },
  { n: "02", t: "Cultura", d: "Produção artística surda. Apoio à criação, à pesquisa e à difusão de obras de artistas surdos em teatro, dança, artes visuais e literatura." },
  { n: "03", t: "Acessibilidade", d: "Conteúdo bilíngue. Vídeos institucionais em Libras, materiais didáticos acessíveis e tradução cultural com revisão da comunidade surda." },
  { n: "04", t: "Comunidade", d: "Rede e pertencimento. Encontros, festivais e ações de convivência que fortalecem a identidade surda e o diálogo com ouvintes aliados." },
];

const FAQS = [
  { q: "Preciso saber Libras para participar dos cursos?", a: "Não. Temos turmas para todos os níveis, incluindo iniciantes que nunca tiveram contato com Libras. Todas as nossas atividades acontecem em ambiente bilíngue." },
  { q: "O CIACS atende apenas pessoas surdas?", a: "Não. Atendemos pessoas surdas, ouvintes, familiares, intérpretes, educadores, artistas e qualquer pessoa interessada em cultura surda e Libras." },
  { q: "As atividades são gratuitas?", a: "A maior parte de nossas atividades comunitárias é gratuita. Alguns cursos formativos têm contribuição simbólica e bolsas integrais para pessoas em vulnerabilidade." },
  { q: "Como posso apoiar o CIACS?", a: "Você pode se inscrever em cursos, participar como voluntário, divulgar nossas atividades ou apoiar institucionalmente. Entre em contato para saber mais." },
  { q: "Onde fica a sede do CIACS?", a: "Estamos na Rua do Catete, 247 — sala 704, Catete, Rio de Janeiro. Entre em contato para agendar uma visita." },
];

const ACERVO = [
  { mes: "ABR", ano: "2020", titulo: "Conheça a nova diretoria do CIACS (2020–2022)", resumo: "Eleita em assembleia geral, a chapa traz nomes históricos e novos sócios comprometidos com a continuidade da missão cultural." },
  { mes: "FEV", ano: "2018", titulo: "Veja como foi o jantar de comemoração pelos 29 anos do CIACS", resumo: "Sócios, parceiros e convidados especiais celebraram quase três décadas de atuação ininterrupta pela arte surda." },
  { mes: "JAN", ano: "2018", titulo: "CIACS comemora seus 29 anos", resumo: "Um marco para uma das instituições culturais surdas mais longevas do Brasil — agora rumo aos 30." },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          cursor: "pointer",
          textAlign: "left",
          color: INK,
        }}
        aria-expanded={open}
      >
        <span style={{ fontFamily: SERIF, fontSize: "1.2rem", fontWeight: 700 }}>{q}</span>
        <span
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            borderRadius: "999px",
            backgroundColor: open ? GOLD : "transparent",
            border: `1px solid ${open ? GOLD : BORDER}`,
            color: open ? "#fff" : GOLD,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s, color 0.2s",
          }}
          aria-hidden
        >
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <p style={{ fontFamily: SANS, fontSize: "0.98rem", color: MUTED, lineHeight: 1.75, padding: "0 0 1.75rem", margin: 0, maxWidth: "780px" }}>
          {a}
        </p>
      )}
    </div>
  );
}

export function Home() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setSlide((s) => (s + 1) % NEWS_HERO.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    el.scrollTo({ left: slide * el.clientWidth, behavior: "smooth" });
  }, [slide]);

  const go = (dir: 1 | -1) => setSlide((s) => (s + dir + NEWS_HERO.length) % NEWS_HERO.length);

  return (
    <div>
      {/* === FAIXA 1 — HERO VÍDEO === */}
      <section
        aria-label="Apresentação CIACS"
        style={{ position: "relative", height: "min(92vh, 820px)", color: "#fff", overflow: "hidden", backgroundColor: BLUE_DEEP }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(115deg, rgba(15,23,42,0.92) 0%, rgba(30,58,138,0.75) 45%, rgba(15,23,42,0.55) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1280px", margin: "0 auto", padding: "9rem 2rem 6rem", display: "grid", gap: "2rem" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            35 anos · desde 1989
          </p>
          <h1 style={{ fontFamily: SERIF, fontSize: "clamp(2.8rem, 6.2vw, 5.6rem)", fontWeight: 900, lineHeight: 1.05, margin: 0, maxWidth: "16ch" }}>
            Arte e cultura surda <em style={{ color: GOLD, fontStyle: "italic" }}>no CIACS</em>
          </h1>
          <p style={{ fontFamily: SANS, fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.7, maxWidth: "62ch", color: "rgba(255,255,255,0.85)", margin: 0 }}>
            O CIACS é um centro brasileiro dedicado à integração entre pessoas surdas e ouvintes pelo encontro
            da arte, da Libras e da educação cultural. Atuamos no Rio de Janeiro desde 1989.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
            <Link
              to="/inscricoes"
              style={{
                fontFamily: SANS, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                backgroundColor: RED, color: "#fff", padding: "1rem 1.75rem", textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
              }}
            >
              Inscreva-se <ArrowRight size={16} />
            </Link>
            <Link
              to="/sobre"
              style={{
                fontFamily: SANS, fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                backgroundColor: "transparent", color: "#fff", padding: "1rem 1.75rem", textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.5)",
              }}
            >
              Conheça o CIACS
            </Link>
            <Link
              to="/videos-em-libras"
              style={{
                fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                color: GOLD, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}
            >
              Vídeos em Libras →
            </Link>
            <LibrasButton />
          </div>
        </div>
        <svg
          aria-hidden
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: -1, left: 0, width: "100%", height: "80px", zIndex: 2, display: "block" }}
        >
          <path d="M0,40 C360,90 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,80 L0,80 Z" fill="#fff" />
        </svg>
      </section>

      {/* === FAIXA 2 — STATS === */}
      <section aria-label="Estatísticas do CIACS" style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2.5rem" }}>
          {[
            { n: "35+", l: "anos de história" },
            { n: "6", l: "eras artísticas" },
            { n: "48", l: "vídeos no canal YouTube" },
            { n: "6,6K", l: "seguidores no Instagram" },
          ].map((s) => (
            <div key={s.l} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem" }}>
              <p style={{ fontFamily: SERIF, fontSize: "clamp(2.5rem, 4vw, 3.4rem)", fontWeight: 900, color: BLUE_DEEP, lineHeight: 1, margin: 0 }}>
                {s.n}
              </p>
              <p style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, marginTop: "0.6rem" }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* === FAIXA 3 — FEATURE 2-COL COM PULL-QUOTE === */}
      <section aria-label="Acessibilidade é prioridade" style={{ backgroundColor: SOFT, padding: "6rem 2rem", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "minmax(280px, 1fr) 1.2fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "4/5", overflow: "hidden" }}>
            <img
              src="https://images.pexels.com/photos/8923098/pexels-photo-8923098.jpeg?auto=compress&w=1200"
              alt="Sala de aula bilíngue do CIACS"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
              Nossa filosofia
            </p>
            <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 900, color: INK, lineHeight: 1.1, marginTop: "0.75rem", marginBottom: "1.5rem" }}>
              Acessibilidade é a nossa prioridade
            </h2>
            <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, margin: 0 }}>
              Acessibilidade está no centro de tudo o que fazemos no CIACS. Você percebe isso na qualidade
              do ensino bilíngue, nos materiais traduzidos para Libras e na escuta ativa com a comunidade surda.
            </p>
            <blockquote
              style={{
                margin: "2rem 0",
                padding: "1.5rem 1.75rem",
                borderLeft: `4px solid ${GOLD}`,
                backgroundColor: "#fff",
                fontFamily: SERIF,
                fontSize: "1.25rem",
                fontStyle: "italic",
                color: BLUE_DEEP,
                lineHeight: 1.6,
              }}
            >
              &ldquo;Essa filosofia se estende aos nossos cursos, eventos e produções artísticas.&rdquo;
            </blockquote>
            <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: MUTED, lineHeight: 1.8, margin: 0 }}>
              Trabalhamos para que pessoas surdas, ouvintes e familiares tenham acesso a uma educação cultural
              de excelência em ambiente bilíngue, com protagonismo surdo em todas as etapas.
            </p>
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <Link
                to="/inscricoes"
                style={{
                  fontFamily: SANS, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase",
                  backgroundColor: RED, color: "#fff", padding: "0.9rem 1.5rem", textDecoration: "none",
                }}
              >
                Inscreva-se
              </Link>
              <Link
                to="/sobre"
                style={{
                  fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase",
                  color: BLUE, padding: "0.9rem 0", textDecoration: "none", borderBottom: `2px solid ${GOLD}`,
                }}
              >
                Saiba mais ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === FAIXA 4 — 4 PILARES === */}
      <section aria-label="Como atuamos" style={{ backgroundColor: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Nossos pilares
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 900, color: INK, marginTop: "0.5rem", marginBottom: "3rem" }}>
            Como atuamos
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {PILLARS.map((p) => (
              <article
                key={p.n}
                style={{
                  backgroundColor: "#fff",
                  border: `1px solid ${BORDER}`,
                  borderTop: `4px solid transparent`,
                  padding: "2rem 1.75rem",
                  transition: "border-top-color 0.2s, transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderTopColor = GOLD;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 32px rgba(15,23,42,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderTopColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <p style={{ fontFamily: SANS, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.18em", color: GOLD, margin: 0 }}>
                  {p.n}
                </p>
                <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 800, color: INK, margin: "0.5rem 0 1rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                  {p.t}
                </h3>
                <p style={{ fontFamily: SANS, fontSize: "0.95rem", color: MUTED, lineHeight: 1.7, margin: 0 }}>
                  {p.d}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === FAIXA 5 — VIDEO BAND: SONHE ALTO === */}
      <section
        aria-label="Sonhe alto, prospere aqui"
        style={{ position: "relative", color: "#fff", overflow: "hidden", backgroundColor: BLUE_DEEP, padding: "8rem 2rem" }}
      >
        <video autoPlay loop muted playsInline aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.55, zIndex: 0 }}>
          <source src={BAND_VIDEO} type="video/mp4" />
        </video>
        <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(135deg, rgba(30,58,138,0.7), rgba(15,23,42,0.7))" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 900, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.01em", margin: 0 }}>
            Sonhe alto<br /><span style={{ color: GOLD }}>Prospere aqui!</span>
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "1.1rem", lineHeight: 1.7, maxWidth: "62ch", color: "rgba(255,255,255,0.85)", margin: "2rem auto 0" }}>
            No CIACS, sua identidade surda é o ponto de partida — e o protagonismo é seu.
            Encontre cursos, eventos e uma rede de pertencimento que potencializam tudo o que você é.
          </p>
          <Link
            to="/cursos"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              fontFamily: SANS, fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              backgroundColor: GOLD, color: BLUE_DEEP, padding: "1rem 1.75rem", marginTop: "2.5rem", textDecoration: "none",
            }}
          >
            Explorar cursos <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* === FAIXA 6 — GRID CLARO 3 CARDS === */}
      <section aria-label="Acesso rápido" style={{ backgroundColor: "#fff", padding: "5rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {[
            { kicker: "Formação", titulo: "Cursos de Libras", to: "/cursos" },
            { kicker: "Agenda", titulo: "Eventos culturais", to: "/eventos" },
            { kicker: "Memória", titulo: "Galeria de fotos", to: "/galeria" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              style={{
                display: "block", textDecoration: "none", color: "inherit",
                padding: "2.5rem 2rem", backgroundColor: "#fff", border: `1px solid ${BORDER}`,
                transition: "background-color 0.25s, color 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = BLUE_DEEP;
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = INK;
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
                {c.kicker}
              </p>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.85rem", fontWeight: 800, margin: "0.6rem 0 1.5rem", textTransform: "uppercase", letterSpacing: "0.01em" }}>
                {c.titulo}
              </h3>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: SANS, fontSize: "0.85rem", fontWeight: 600 }}>
                Acessar <ArrowUpRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* === FAIXA 7 — GRID AZUL ILUSTRADO 3 CARDS === */}
      <section
        aria-label="Caminhos para entrar no CIACS"
        style={{
          position: "relative",
          backgroundColor: BLUE_DEEP,
          padding: "6rem 2rem",
          color: "#fff",
          backgroundImage:
            "radial-gradient(circle at 12% 18%, rgba(245,179,0,0.18) 0, transparent 28%), radial-gradient(circle at 88% 78%, rgba(255,255,255,0.08) 0, transparent 32%), radial-gradient(circle at 80% 12%, rgba(245,179,0,0.12) 0, transparent 24%), radial-gradient(circle at 18% 88%, rgba(255,255,255,0.06) 0, transparent 24%)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {[
            { kicker: "Aprenda", titulo: "Libras", desc: "Turmas para todos os níveis em ambiente bilíngue.", to: "/cursos" },
            { kicker: "Pertença", titulo: "Comunidade surda", desc: "Encontros, festivais e rede de apoio mútuo.", to: "/eventos" },
            { kicker: "Engaje", titulo: "Seja voluntário", desc: "Some-se à nossa missão como aliado da causa surda.", to: "/associe-se" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              style={{
                display: "block", textDecoration: "none", color: "#fff",
                padding: "2.25rem 1.75rem", backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                transition: "background-color 0.25s, border-color 0.25s, transform 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(245,179,0,0.16)";
                e.currentTarget.style.borderColor = GOLD;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <p style={{ fontFamily: SANS, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
                {c.kicker}
              </p>
              <h3 style={{ fontFamily: SERIF, fontSize: "1.85rem", fontWeight: 800, margin: "0.5rem 0 0.85rem", textTransform: "uppercase" }}>
                {c.titulo}
              </h3>
              <p style={{ fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(255,255,255,0.78)", margin: 0 }}>
                {c.desc}
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1.5rem", fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: GOLD }}>
                Saiba mais <ArrowUpRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* === FAIXA 8 — NEWS & EVENTS === */}
      <section aria-label="Notícias e Eventos" style={{ backgroundColor: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: "2.5rem", gap: "1.5rem", flexWrap: "wrap" }}>
            <div>
              <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
                Atualidades
              </p>
              <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 0" }}>
                Notícias e eventos
              </h2>
            </div>
            <Link
              to="/noticias"
              style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: BLUE, textDecoration: "none", borderBottom: `2px solid ${GOLD}`, paddingBottom: "0.3rem" }}
            >
              Ver todas
            </Link>
          </div>

          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Notícias em destaque"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            style={{ position: "relative" }}
          >
            <div
              ref={sliderRef}
              style={{
                display: "grid",
                gridAutoFlow: "column",
                gridAutoColumns: "100%",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                scrollbarWidth: "none",
              }}
            >
              {NEWS_HERO.map((n) => (
                <article key={n.title} style={{ scrollSnapAlign: "start", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "2rem", alignItems: "center", padding: "0 0.25rem" }}>
                  <div style={{ aspectRatio: "16/10", overflow: "hidden" }}>
                    <img src={n.image} alt={n.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div>
                    <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                      <span style={{ fontFamily: SANS, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", backgroundColor: GOLD, padding: "0.3rem 0.7rem" }}>
                        {n.tag}
                      </span>
                      <span style={{ fontFamily: SANS, fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em" }}>{n.date}</span>
                    </div>
                    <h3 style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)", fontWeight: 800, color: INK, lineHeight: 1.2, margin: 0 }}>
                      {n.title}
                    </h3>
                    <p style={{ fontFamily: SANS, fontSize: "1rem", color: MUTED, lineHeight: 1.7, marginTop: "1rem" }}>
                      {n.excerpt}
                    </p>
                    <Link
                      to="/noticias"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1.25rem", fontFamily: SANS, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE, textDecoration: "none", borderBottom: `2px solid ${GOLD}`, paddingBottom: "0.3rem" }}
                    >
                      Leia mais <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <button onClick={() => go(-1)} aria-label="Anterior"
              style={{ position: "absolute", left: "-12px", top: "40%", width: "44px", height: "44px", borderRadius: "999px", border: `1px solid ${BORDER}`, backgroundColor: "#fff", color: INK, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => go(1)} aria-label="Próxima"
              style={{ position: "absolute", right: "-12px", top: "40%", width: "44px", height: "44px", borderRadius: "999px", border: `1px solid ${BORDER}`, backgroundColor: "#fff", color: INK, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChevronRight size={18} />
            </button>

            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.75rem" }}>
              {NEWS_HERO.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  style={{
                    width: i === slide ? "32px" : "10px",
                    height: "10px",
                    borderRadius: "999px",
                    border: "none",
                    backgroundColor: i === slide ? GOLD : BORDER,
                    cursor: "pointer",
                    transition: "width 0.25s, background-color 0.25s",
                  }}
                />
              ))}
            </div>
          </div>

          <div style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {NEWS_SMALL.map((n) => (
              <article key={n.title} style={{ borderLeft: `3px solid ${GOLD}`, paddingLeft: "1.25rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: SANS, fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: BLUE_DEEP, backgroundColor: "rgba(29,78,216,0.1)", padding: "0.2rem 0.55rem" }}>
                    {n.tag}
                  </span>
                  <span style={{ fontFamily: SANS, fontSize: "0.72rem", color: MUTED, letterSpacing: "0.08em" }}>{n.date}</span>
                </div>
                <h4 style={{ fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 700, color: INK, lineHeight: 1.35, margin: 0 }}>
                  {n.title}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === FAIXA 9 — PULL-QUOTE DARK === */}
      <section aria-label="Citação" style={{ backgroundColor: BLUE_DEEP, color: "#fff", padding: "7rem 2rem" }}>
        <div style={{ maxWidth: "1080px", margin: "0 auto", textAlign: "center" }}>
          <svg viewBox="0 0 24 24" width="42" height="42" fill={GOLD} aria-hidden style={{ marginBottom: "1.5rem" }}>
            <path d="M7 7h4v4H7a3 3 0 0 0 3 3v3a6 6 0 0 1-6-6V8a1 1 0 0 1 1-1zM15 7h4v4h-4a3 3 0 0 0 3 3v3a6 6 0 0 1-6-6V8a1 1 0 0 1 1-1z" />
          </svg>
          <blockquote style={{ fontFamily: SERIF, fontSize: "clamp(1.6rem, 3.4vw, 2.6rem)", fontWeight: 700, lineHeight: 1.35, fontStyle: "italic", margin: 0 }}>
            A Libras não é só uma língua que usamos para nos comunicar.
            É a forma com que pensamos, criamos arte e construímos comunidade.
          </blockquote>
          <p style={{ fontFamily: SANS, fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginTop: "2.25rem" }}>
            — Equipe CIACS
          </p>
        </div>
      </section>

      {/* === FAIXA 10 — ACERVO VIVO === */}
      <section aria-label="Acervo vivo" style={{ backgroundColor: SOFT, padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Memória do CIACS
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 3rem" }}>
            Acervo vivo
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {ACERVO.map((a) => (
              <article key={a.titulo} style={{ backgroundColor: "#fff", border: `1px solid ${BORDER}`, display: "flex", gap: "1.25rem", padding: "1.5rem" }}>
                <div style={{ flexShrink: 0, backgroundColor: BLUE_DEEP, color: "#fff", padding: "0.85rem 1rem", textAlign: "center", minWidth: "70px" }}>
                  <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em", color: GOLD, margin: 0 }}>{a.mes}</p>
                  <p style={{ fontFamily: SERIF, fontSize: "1.5rem", fontWeight: 900, margin: "0.2rem 0 0" }}>{a.ano}</p>
                </div>
                <div>
                  <h3 style={{ fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 800, color: INK, lineHeight: 1.35, margin: 0 }}>{a.titulo}</h3>
                  <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: MUTED, lineHeight: 1.7, margin: "0.6rem 0 0" }}>{a.resumo}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* === FAIXA 11 — FAQ === */}
      <section aria-label="Perguntas frequentes" style={{ backgroundColor: "#fff", padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Dúvidas comuns
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2rem, 3.6vw, 3rem)", fontWeight: 900, color: INK, margin: "0.4rem 0 2.5rem" }}>
            Perguntas frequentes
          </h2>
          <div>
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* === FAIXA 12 — REDES SOCIAIS === */}
      <section
        aria-label="Conecte-se"
        style={{
          backgroundColor: BLUE_DEEP, color: "#fff", padding: "6rem 2rem",
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(245,179,0,0.16) 0, transparent 28%), radial-gradient(circle at 82% 80%, rgba(255,255,255,0.08) 0, transparent 32%)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0, textAlign: "center" }}>
            Estamos perto de você
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.2rem, 4vw, 3.4rem)", fontWeight: 900, textAlign: "center", margin: "0.5rem 0 3rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
            Conecte-se
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
            {[
              { Icon: Instagram, nome: "Instagram", handle: "@ciacs.artes", desc: "Cobertura visual diária da nossa comunidade.", href: "https://www.instagram.com/ciacs.artes" },
              { Icon: Facebook, nome: "Facebook", handle: "@ciacs.comunidade", desc: "Notícias, eventos e conversas com nossos sócios.", href: "https://www.facebook.com/ciacs.comunidade" },
              { Icon: Youtube, nome: "YouTube", handle: "@ciacscultura7959", desc: "48 vídeos institucionais em Libras e Português.", href: "https://www.youtube.com/@ciacscultura7959" },
            ].map((s) => (
              <a key={s.nome} href={s.href} target="_blank" rel="noreferrer" aria-label={`${s.nome} ${s.handle}`}
                 style={{ display: "block", textDecoration: "none", color: "#fff",
                          padding: "2rem 1.75rem", backgroundColor: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          transition: "background-color 0.2s, border-color 0.2s, transform 0.2s" }}
                 onMouseEnter={(e) => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.backgroundColor = "rgba(245,179,0,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                 onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <s.Icon size={28} color={GOLD} aria-hidden />
                <h3 style={{ fontFamily: SERIF, fontSize: "1.4rem", fontWeight: 800, margin: "1rem 0 0.25rem" }}>{s.nome}</h3>
                <p style={{ fontFamily: SANS, fontSize: "0.85rem", color: GOLD, letterSpacing: "0.08em", margin: 0 }}>{s.handle}</p>
                <p style={{ fontFamily: SANS, fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginTop: "1rem" }}>{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* === FAIXA 13 — CTA FINAL === */}
      <section aria-label="Faça parte da nossa história" style={{ backgroundColor: "#fff", padding: "7rem 2rem", textAlign: "center" }}>
        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          <p style={{ fontFamily: SANS, fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, margin: 0 }}>
            Junte-se à comunidade CIACS
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(2.2rem, 4.4vw, 3.8rem)", fontWeight: 900, color: INK, margin: "0.5rem 0 1.5rem", lineHeight: 1.1 }}>
            Faça parte da nossa história
          </h2>
          <p style={{ fontFamily: SANS, fontSize: "1.05rem", color: MUTED, lineHeight: 1.75, margin: "0 auto 2.5rem", maxWidth: "62ch" }}>
            Há 35 anos construímos arte, cultura e educação ao lado da comunidade surda do Brasil.
            O próximo capítulo pode ter você.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/inscricoes"
                  style={{ fontFamily: SANS, fontSize: "0.86rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                           backgroundColor: RED, color: "#fff", padding: "1.1rem 2rem", textDecoration: "none",
                           display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
              Inscreva-se agora <ArrowRight size={16} />
            </Link>
            <Link to="/contato"
                  style={{ fontFamily: SANS, fontSize: "0.86rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase",
                           backgroundColor: "transparent", color: INK, padding: "1.1rem 2rem", textDecoration: "none",
                           border: `1px solid ${INK}` }}>
              Fale com o CIACS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
