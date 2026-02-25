import { COLORS, FONT_HEADING, FONT_BODY } from "../tokens";

export default function NotFound({ onGoHome }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", minHeight: "60vh", fontFamily: FONT_BODY,
      textAlign: "center", gap: 16,
    }}>
      <div style={{ fontSize: 64 }}>🗺️</div>
      <h1 style={{ fontSize: 36, fontWeight: 900, color: COLORS.navy, margin: 0, fontFamily: FONT_HEADING }}>
        404
      </h1>
      <p style={{ color: COLORS.gray400, fontSize: 15 }}>Page not found.</p>
      <button
        onClick={onGoHome}
        style={{
          padding: "10px 24px", borderRadius: 8, border: "none",
          background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
          cursor: "pointer", fontSize: 13, fontWeight: 700,
          color: COLORS.navy, fontFamily: "inherit",
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
}