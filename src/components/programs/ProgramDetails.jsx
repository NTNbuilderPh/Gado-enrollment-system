import { useState } from "react";
import { COLORS, FONT_HEADING, FONT_BODY, statusColor } from "../../tokens";
import { Badge } from "../ui/SharedUI";
import SUBJECTS from "src/data/subjects.json";

export default function ProgramDetails({ program, onBack }) {
  const [openYear, setOpenYear] = useState(0);
  const sc = statusColor(program.status);
  const getSubject = (id) => SUBJECTS.find((s) => s.id === id);

  return (
    <div style={{ fontFamily: FONT_BODY }}>
      {/* ── Back ── */}
      <button
        onClick={onBack}
        style={{
          display: "flex", alignItems: "center", gap: 8,
          background: "none", border: "none", cursor: "pointer",
          color: COLORS.navy, fontWeight: 700, fontSize: 13,
          marginBottom: 20, padding: 0, fontFamily: FONT_BODY,
        }}
      >
        ← Back to Programs
      </button>

      {/* ── Hero Header ── */}
      <div style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.navyLight} 100%)`,
        borderRadius: 16, padding: "28px 32px", marginBottom: 24, color: COLORS.white,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 12, color: COLORS.goldLight, letterSpacing: 2, textTransform: "uppercase", marginBottom: 6 }}>
              Program Details
            </div>
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 900, fontFamily: FONT_HEADING }}>{program.code}</h1>
            <h2 style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 400, opacity: 0.85, fontFamily: FONT_HEADING }}>
              {program.name}
            </h2>
          </div>
          <Badge label={program.status} style={sc} />
        </div>

        <div style={{ display: "flex", gap: 20, marginTop: 20, flexWrap: "wrap" }}>
          {[["Type", program.type], ["Duration", program.duration], ["Total Units", program.units]].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,.5)", letterSpacing: 1, textTransform: "uppercase" }}>{k}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: COLORS.white, fontFamily: FONT_HEADING }}>{v}</div>
            </div>
          ))}
        </div>

        <p style={{ margin: "18px 0 0", fontSize: 13, opacity: 0.8, lineHeight: 1.7, maxWidth: 600 }}>
          {program.description}
        </p>
      </div>

      {/* ── Year Levels ── */}
      <h3 style={{ fontSize: 15, fontWeight: 700, color: COLORS.navy, margin: "0 0 12px", fontFamily: FONT_HEADING }}>
        Curriculum by Year Level
      </h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {program.yearLevels.map((yl, i) => (
          <div key={i} style={{
            background: COLORS.white, borderRadius: 12,
            border: `1.5px solid ${i === openYear ? COLORS.gold : COLORS.gray200}`,
            overflow: "hidden", transition: "border .2s",
          }}>
            <button
              onClick={() => setOpenYear(i === openYear ? -1 : i)}
              style={{
                width: "100%", padding: "14px 20px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "none", border: "none", cursor: "pointer", fontFamily: FONT_BODY,
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>
                {yl.year}
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: COLORS.gray400 }}>{yl.subjects.length} subjects</span>
                <span style={{ color: COLORS.gold, fontSize: 16 }}>{i === openYear ? "▲" : "▼"}</span>
              </div>
            </button>

            {i === openYear && (
              <div style={{ padding: "0 20px 16px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 10 }}>
                {yl.subjects.map((sid) => {
                  const sub = getSubject(sid);
                  if (!sub) return (
                    <div key={sid} style={{ background: COLORS.gray50, borderRadius: 8, padding: "10px 12px", fontSize: 12, color: COLORS.gray400 }}>
                      {sid}
                    </div>
                  );
                  return (
                    <div key={sid} style={{ background: COLORS.gray50, borderRadius: 8, padding: "10px 12px", border: `1px solid ${COLORS.gray200}` }}>
                      <div style={{ fontSize: 12, fontWeight: 800, color: COLORS.navy, fontFamily: FONT_HEADING }}>{sub.code}</div>
                      <div style={{ fontSize: 11, color: COLORS.gray600, lineHeight: 1.4, marginTop: 2 }}>{sub.title}</div>
                      <div style={{ fontSize: 10, color: COLORS.gray400, marginTop: 6 }}>{sub.units} units · {sub.semester}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
