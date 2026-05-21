import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import logo from "../../imports/image.png";
import { Menu, X, ChevronUp, MessageCircle } from "lucide-react";
import { SERIF, SANS, BLUE, BLUE_DEEP, RED, GOLD, INK, MUTED, BORDER, SOFT } from "../constants";

const navLinks = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "História", to: "/historia" },
  { label: "Diretoria", to: "/diretoria" },
  { label: "Cursos", to: "/cursos" },
  { label: "Notícias", to: "/noticias" },
  { label: "Eventos", to: "/eventos" },
  { label: "Galeria", to: "/galeria" },
  { label: "Artistas", to: "/artistas" },
  { label: "Contato", to: "/contato" },
];

const footerSecondary = [
  { label: "Inscrições", to: "/inscricoes" },
  { label: "Associe-se", to: "/associe-se" },
  { label: "Doação", to: "/doacao" },
  { label: "Parcerias", to: "/parcerias" },
  { label: "Vídeos em Libras", to: "/videos-em-libras" },
  { label: "Programação", to: "/programacao" },
];

const footerLegal = [
  { label: "Política de Privacidade", to: "/politica-de-privacidade" },
  { label: "Termo de Compromisso", to: "/termo-de-compromisso" },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);
  const [cookieDismissed, setCookieDismissed] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("ciacs_cookie_v2") === "1" : true
  );
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowBackTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const dismiss = () => {
    localStorage.setItem("ciacs_cookie_v2", "1");
    setCookieDismissed(true);
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", color: INK, fontFamily: SANS }}>
      {/* Header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: "#fff",
          borderBottom: `1px solid ${scrolled ? BORDER : "transparent"}`,
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
          transition: "border-color 0.3s, box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img src={logo} alt="CIACS" style={{ height: "48px", width: "auto" }} />
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden lg:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: active ? BLUE : MUTED,
                    textDecoration: "none",
                    padding: "0.5rem 0.625rem",
                    borderBottom: active ? `2px solid ${GOLD}` : "2px solid transparent",
                    transition: "color 0.2s, border-color 0.2s",
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = INK; }}
                  onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLAnchorElement).style.color = MUTED; }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: INK, padding: "0.5rem" }}
            aria-label="Menu"
            className="lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ backgroundColor: "#fff", borderTop: `1px solid ${BORDER}` }} className="lg:hidden">
            <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "1rem 2rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navLinks.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    style={{
                      fontFamily: SANS,
                      fontSize: "0.8rem",
                      fontWeight: active ? 600 : 400,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: active ? BLUE : MUTED,
                      textDecoration: "none",
                      padding: "0.625rem 0",
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main style={{ flex: 1, paddingTop: "72px" }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: BLUE_DEEP, color: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "4rem 2rem 3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Logo + tagline */}
          <div>
            <img src={logo} alt="CIACS" style={{ height: "52px", width: "auto", marginBottom: "1.25rem" }} />
            <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: 0 }}>
              Centro de Integração da Arte e Cultura dos Surdos.
              <br />Promovendo arte e identidade surda desde 1989.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1.25rem",
              }}
            >
              Institucional
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Participe */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1.25rem",
              }}
            >
              Participe
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {footerSecondary.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: SANS,
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontFamily: SANS,
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: GOLD,
                marginBottom: "1.25rem",
              }}
            >
              Contato
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Endereço", value: "Rua do Catete, 247 — sala 704 · Catete, Rio de Janeiro · RJ" },
                { label: "E-mail", value: "ciacsrj@gmail.com" },
                { label: "CNPJ", value: "32.361.230/0001-72" },
                { label: "Fundação", value: "28 de fevereiro de 1989" },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontFamily: SANS, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.125rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: SANS, fontSize: "0.875rem", color: "rgba(255,255,255,0.8)", margin: 0 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "1.25rem 2rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.75rem",
            }}
          >
            <p style={{ fontFamily: SANS, fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", margin: 0 }}>
              &copy; {new Date().getFullYear()} CIACS — Centro de Integração de Arte e Cultura dos Surdos
            </p>
            <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              {footerLegal.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontFamily: SANS, fontSize: "0.78rem", color: "rgba(255,255,255,0.4)", textDecoration: "underline" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp */}
      <a
        href="https://wa.me/5521999999999"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 50,
          backgroundColor: "#25D366",
          color: "#fff",
          width: "52px",
          height: "52px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
          textDecoration: "none",
          transition: "transform 0.2s",
          borderRadius: 0,
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
      >
        <MessageCircle size={22} />
      </a>

      {/* Back to top */}
      {showBackTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Voltar ao topo"
          style={{
            position: "fixed",
            bottom: "5rem",
            right: "1.5rem",
            zIndex: 50,
            backgroundColor: "#fff",
            color: INK,
            border: `1px solid ${BORDER}`,
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.2s",
            borderRadius: 0,
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = SOFT; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fff"; }}
        >
          <ChevronUp size={18} />
        </button>
      )}

      {/* LGPD Banner */}
      {!cookieDismissed && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            backgroundColor: "#fff",
            borderTop: `1px solid ${BORDER}`,
            padding: "1rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            boxShadow: "0 -4px 20px rgba(0,0,0,0.06)",
          }}
        >
          <p style={{ fontFamily: SANS, fontSize: "0.82rem", color: MUTED, margin: 0, maxWidth: "640px", lineHeight: 1.6 }}>
            Este site utiliza cookies para melhorar sua experiência, em conformidade com a{" "}
            <strong style={{ color: INK }}>Lei Geral de Proteção de Dados (LGPD)</strong>.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", flexShrink: 0 }}>
            <button
              onClick={dismiss}
              style={{
                fontFamily: SANS,
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backgroundColor: BLUE,
                color: "#fff",
                border: "none",
                padding: "0.5rem 1.5rem",
                cursor: "pointer",
              }}
            >
              Aceitar
            </button>
            <button
              onClick={dismiss}
              style={{
                fontFamily: SANS,
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backgroundColor: "transparent",
                color: MUTED,
                border: `1px solid ${BORDER}`,
                padding: "0.5rem 1.25rem",
                cursor: "pointer",
              }}
            >
              Recusar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
