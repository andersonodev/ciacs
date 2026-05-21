import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { SERIF, SANS, GREEN, GOLD, TEXT, MUTED, BORDER } from "../constants";

const HandSignSvg = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
    aria-hidden="true"
  >
    <path d="M18 11V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3" />
    <path d="M14 9V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3" />
    <path d="M10 9.5V5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v9a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6V11a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
  </svg>
);

function LibrasModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(10,10,10,0.75)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          width: "100%",
          maxWidth: "640px",
          borderRadius: 0,
        }}
      >
        {/* Modal header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.5rem 2rem",
            borderBottom: `1px solid ${BORDER}`,
          }}
        >
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "1.4rem",
              fontWeight: 700,
              color: TEXT,
              margin: 0,
            }}
          >
            Tradução em Libras
          </h2>
          <button
            onClick={onClose}
            aria-label="Fechar"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: MUTED,
              padding: "0.25rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Video placeholder */}
        <div style={{ padding: "2rem" }}>
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "#F0EDE8",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              border: `1px solid ${BORDER}`,
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke={GREEN}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 11V8a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3" />
              <path d="M14 9V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v3" />
              <path d="M10 9.5V5a2 2 0 0 0-2-2 2 2 0 0 0-2 2v9a6 6 0 0 0 6 6h2a6 6 0 0 0 6-6V11a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
            </svg>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "0.875rem",
                color: MUTED,
                textAlign: "center",
                maxWidth: "280px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              O vídeo em Libras será adicionado pela equipe do CIACS
            </p>
          </div>
          <p
            style={{
              fontFamily: SANS,
              fontSize: "0.78rem",
              color: MUTED,
              marginTop: "1rem",
              textAlign: "center",
              letterSpacing: "0.03em",
            }}
          >
            Conteúdo traduzido para Língua Brasileira de Sinais
          </p>
        </div>
      </div>
    </div>
  );
}

interface LibrasButtonProps {
  size?: "sm" | "default";
}

export function LibrasButton({ size = "default" }: LibrasButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          fontFamily: SANS,
          fontSize: size === "sm" ? "0.7rem" : "0.75rem",
          fontWeight: 500,
          color: GOLD,
          backgroundColor: "transparent",
          border: `1px solid ${GOLD}`,
          borderRadius: "20px",
          padding: size === "sm" ? "3px 8px" : "4px 12px",
          cursor: "pointer",
          letterSpacing: "0.04em",
          transition: "background-color 0.2s, color 0.2s",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = GOLD;
          (e.currentTarget as HTMLButtonElement).style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
          (e.currentTarget as HTMLButtonElement).style.color = GOLD;
        }}
        aria-label="Ver em Libras"
      >
        <HandSignSvg />
        VER EM LIBRAS
      </button>

      {open && createPortal(
        <LibrasModal onClose={() => setOpen(false)} />,
        document.body
      )}
    </>
  );
}
