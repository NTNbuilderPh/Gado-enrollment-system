import { COLORS, FONT_HEADING, FONT_BODY, statusColor } from "../../tokens";
import { Badge } from "../ui/SharedUI";

export default function ProgramCard({ program, onClick }) {
  const sc = statusColor(program.status);

  return (
    <div
      onClick={onClick}
      style={{
        background: COLORS.white, borderRadius: 14, padding: "20px 22px",
        boxShadow: "0 2px 14px rgba(15,32,68,.07)",
        border: `1.5px solid ${COLORS.gray100}`,
        cursor: "pointer", transition: "all .2s",
        display: "flex", flexDirection: "column", gap: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(15,32,68,.14)";
        e.currentTarget.style.borderColor = COLORS.gold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 14px rgba(15,32,68,.07)";
        e.currentTarget.style.borderColor = COLORS.gray100;
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: 18, fontWeight: 900, color: COLORS.navy, letterSpacing: 0.5, fontFamily: FONT_HEADING }}>
          {program.code}
        </span>
        <Badge label={program.status} style={sc} />
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gray800, lineHeight: 1.4 }}>
        {program.name}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 }}>
        {[program.type, `⏱ ${program.duration}`, `📋 ${program.units} units`].map((tag) => (
          <span key={tag} style={{
            fontSize: 11, color: COLORS.gray400, background: COLORS.gray50,
            padding: "3px 10px", borderRadius: 20, border: `1px solid ${COLORS.gray200}`,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}