import { COLORS, FONT_HEADING, FONT_BODY, termColor } from "../../tokens";
import { Badge } from "../ui/SharedUI";

export default function SubjectCard({ subject, onClick }) {
  const tc = termColor(subject.termType);

  return (
    <div
      onClick={onClick}
      style={{
        background: COLORS.white, borderRadius: 12, padding: "16px 18px",
        boxShadow: "0 2px 12px rgba(15,32,68,.07)",
        border: `1.5px solid ${COLORS.gray100}`,
        cursor: "pointer", transition: "all .2s",
        display: "flex", flexDirection: "column", gap: 8,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 6px 22px rgba(15,32,68,.13)";
        e.currentTarget.style.borderColor = COLORS.gold;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 2px 12px rgba(15,32,68,.07)";
        e.currentTarget.style.borderColor = COLORS.gray100;
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: 16, fontWeight: 900, color: COLORS.navy, fontFamily: FONT_HEADING }}>
          {subject.code}
        </span>
        <Badge
          label={subject.termType === "semester" ? "Semester" : subject.termType === "term" ? "Term" : "Both"}
          style={tc}
        />
      </div>

      <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gray800, lineHeight: 1.4 }}>
        {subject.title}
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }}>
        {[`${subject.units} units`, subject.semester, subject.program].map((tag) => (
          <span key={tag} style={{
            fontSize: 11, color: COLORS.gray400, background: COLORS.gray50,
            padding: "2px 9px", borderRadius: 20, border: `1px solid ${COLORS.gray200}`,
          }}>
            {tag}
          </span>
        ))}
      </div>

      {subject.prereqs.length > 0 && (
        <div style={{
          fontSize: 10, color: COLORS.reviewOrange, background: "#FEF9E7",
          padding: "3px 8px", borderRadius: 6, border: `1px solid ${COLORS.reviewOrange}22`,
          display: "inline-block", width: "fit-content",
        }}>
          🔗 {subject.prereqs.length} pre-req{subject.prereqs.length > 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}
