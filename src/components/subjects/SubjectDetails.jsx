import { COLORS, FONT_HEADING, FONT_BODY, termColor } from "../../tokens";
import { Badge } from "../ui/SharedUI";
import SUBJECTS from "../../data/subjects.json";

function getSubjectCode(id) {
  const s = SUBJECTS.find((x) => x.id === id);
  return s ? s.code : id.toUpperCase();
}

export default function SubjectDetails({ subject, onClose }) {
  const tc = termColor(subject.termType);

  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(15,32,68,.55)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.white, borderRadius: 16, padding: "32px 36px",
          width: 540, maxWidth: "95vw", maxHeight: "88vh", overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)", fontFamily: FONT_BODY,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ── */}
        <div style={{
          background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.navyLight})`,
          borderRadius: 12, padding: "20px 24px", marginBottom: 24, color: COLORS.white,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <span style={{ fontSize: 22, fontWeight: 900, fontFamily: FONT_HEADING }}>{subject.code}</span>
              <p style={{ margin: "4px 0 0", fontSize: 14, opacity: 0.85 }}>{subject.title}</p>
            </div>
            <Badge
              label={subject.termType === "semester" ? "Semester" : subject.termType === "term" ? "Term" : "Both"}
              style={tc}
            />
          </div>
        </div>

        {/* ── Info Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
          {[["Units/Credits", `${subject.units} units`], ["Semester/Term", subject.semester], ["Program", subject.program]].map(([k, v]) => (
            <div key={k} style={{ background: COLORS.gray50, borderRadius: 8, padding: "12px 14px" }}>
              <div style={{ fontSize: 10, color: COLORS.gray400, letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>{k}</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>{v}</div>
            </div>
          ))}
        </div>

        {/* ── Description ── */}
        <div style={{ marginBottom: 18 }}>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: COLORS.gray400, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px", fontFamily: FONT_HEADING }}>
            Description
          </h4>
          <p style={{ fontSize: 13, color: COLORS.gray800, lineHeight: 1.7, margin: 0 }}>{subject.description}</p>
        </div>

        {/* ── Pre-requisites ── */}
        <div style={{ marginBottom: 14 }}>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: COLORS.gray400, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px", fontFamily: FONT_HEADING }}>
            Pre-requisites
          </h4>
          {subject.prereqs.length === 0
            ? <span style={{ fontSize: 13, color: COLORS.gray400, fontStyle: "italic" }}>None</span>
            : (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {subject.prereqs.map((id) => (
                  <span key={id} style={{
                    fontSize: 12, background: "#FEF9E7", color: COLORS.reviewOrange,
                    border: `1px solid ${COLORS.reviewOrange}33`, borderRadius: 6,
                    padding: "3px 10px", fontWeight: 700,
                  }}>
                    {getSubjectCode(id)}
                  </span>
                ))}
              </div>
            )
          }
        </div>

        {/* ── Co-requisites ── */}
        <div style={{ marginBottom: 24 }}>
          <h4 style={{ fontSize: 12, fontWeight: 700, color: COLORS.gray400, textTransform: "uppercase", letterSpacing: 1, margin: "0 0 8px", fontFamily: FONT_HEADING }}>
            Co-requisites
          </h4>
          {subject.coreqs.length === 0
            ? <span style={{ fontSize: 13, color: COLORS.gray400, fontStyle: "italic" }}>None</span>
            : (
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {subject.coreqs.map((id) => (
                  <span key={id} style={{
                    fontSize: 12, background: "#EBF5FB", color: "#1A5276",
                    border: "1px solid #AED6F133", borderRadius: 6,
                    padding: "3px 10px", fontWeight: 700,
                  }}>
                    {getSubjectCode(id)}
                  </span>
                ))}
              </div>
            )
          }
        </div>

        <button
          onClick={onClose}
          style={{
            width: "100%", padding: "12px", borderRadius: 8, border: "none",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            cursor: "pointer", fontSize: 13, fontWeight: 700,
            color: COLORS.navy, fontFamily: "inherit",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}