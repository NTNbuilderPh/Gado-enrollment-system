import { COLORS, FONT_HEADING, FONT_BODY } from "../../tokens";

export default function Sidebar({ active, setActive }) {
  const items = [
    { key: "dashboard", icon: "📊", label: "Dashboard" },
    { key: "programs",  icon: "🎓", label: "Programs"  },
    { key: "subjects",  icon: "📚", label: "Subjects"  },
  ];

  return (
    <div style={{
      width: 220, minHeight: "100vh", background: COLORS.navy,
      display: "flex", flexDirection: "column", flexShrink: 0,
      fontFamily: FONT_BODY,
    }}>
      {/* ── Brand ── */}
      <div style={{ padding: "28px 20px 24px", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: "50%",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, flexShrink: 0,
          }}>
            🏛️
          </div>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 700, color: COLORS.goldLight,
              letterSpacing: 1.5, textTransform: "uppercase", fontFamily: FONT_BODY,
            }}>
              University of
            </div>
            <div style={{ fontSize: 15, fontWeight: 800, color: COLORS.white, letterSpacing: 0.5, fontFamily: FONT_HEADING }}>
              Tagum
            </div>
          </div>
        </div>
      </div>

      {/* ── Nav ── */}
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        <div style={{
          fontSize: 10, color: "rgba(255,255,255,.4)",
          letterSpacing: 2, padding: "0 8px 10px", textTransform: "uppercase",
        }}>
          Navigation
        </div>

        {items.map((item) => (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            style={{
              display: "flex", alignItems: "center", gap: 12,
              width: "100%", padding: "12px 14px", borderRadius: 10,
              border: "none", cursor: "pointer",
              background: active === item.key
                ? `linear-gradient(90deg, ${COLORS.gold}22, ${COLORS.gold}11)`
                : "transparent",
              color: active === item.key ? COLORS.goldLight : "rgba(255,255,255,.65)",
              fontSize: 13, fontWeight: active === item.key ? 700 : 500,
              textAlign: "left", marginBottom: 4, fontFamily: "inherit",
              borderLeft: active === item.key
                ? `3px solid ${COLORS.gold}`
                : "3px solid transparent",
              transition: "all .2s",
            }}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* ── Footer ── */}
      <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,.3)" }}>Est. 2024 · Philippines</div>
      </div>
    </div>
  );
}
