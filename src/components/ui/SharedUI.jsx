import { COLORS, FONT_HEADING, FONT_BODY } from "../../tokens";

// ─────────────────────────────────────────────
// Badge
// ─────────────────────────────────────────────
export function Badge({ label, style }) {
  return (
    <span style={{
      display: "inline-block", padding: "2px 10px", borderRadius: 20,
      fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
      border: `1px solid ${style.border}`,
      background: style.bg, color: style.text,
    }}>
      {label}
    </span>
  );
}

// ─────────────────────────────────────────────
// StatCard
// ─────────────────────────────────────────────
export function StatCard({ icon, label, value, sub, accent }) {
  return (
    <div style={{
      background: COLORS.white, borderRadius: 14, padding: "22px 26px",
      boxShadow: "0 2px 16px rgba(15,32,68,.08)",
      borderLeft: `5px solid ${accent}`,
      display: "flex", flexDirection: "column", gap: 6,
      flex: "1 1 180px", minWidth: 160,
    }}>
      <div style={{ fontSize: 26 }}>{icon}</div>
      <div style={{ fontSize: 32, fontWeight: 800, color: COLORS.navy, lineHeight: 1, fontFamily: FONT_HEADING }}>
        {value}
      </div>
      <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.gray600 }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: COLORS.gray400 }}>{sub}</div>}
    </div>
  );
}

// ─────────────────────────────────────────────
// SearchInput
// ─────────────────────────────────────────────
export function SearchInput({ value, onChange, placeholder }) {
  return (
    <div style={{ position: "relative" }}>
      <span style={{
        position: "absolute", left: 12, top: "50%",
        transform: "translateY(-50%)", color: COLORS.gray400, fontSize: 16,
      }}>
        🔍
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          paddingLeft: 38, paddingRight: 14, height: 38, borderRadius: 8,
          border: `1.5px solid ${COLORS.gray200}`, background: COLORS.white,
          fontSize: 13, color: COLORS.gray800, outline: "none", width: "100%",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Select
// ─────────────────────────────────────────────
export function Select({ value, onChange, options, label }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        height: 38, borderRadius: 8, border: `1.5px solid ${COLORS.gray200}`,
        background: COLORS.white, fontSize: 13, color: COLORS.gray800,
        padding: "0 12px", outline: "none", cursor: "pointer", fontFamily: "inherit",
      }}
    >
      <option value="">{label}</option>
      {options.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}