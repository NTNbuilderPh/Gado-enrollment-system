import { COLORS, FONT_HEADING, FONT_BODY } from "../../tokens";

const FIELDS = [
  ["Program Code",  "text",   "e.g., BSIT"],
  ["Program Name",  "text",   "Full program name"],
  ["Program Type",  "text",   "Bachelor's / Diploma"],
  ["Duration",      "text",   "e.g., 4 years"],
  ["Total Units",   "number", "e.g., 144"],
];

export default function ProgramModal({ onClose }) {
  return (
    <div
      style={{
        position: "fixed", inset: 0, background: "rgba(15,32,68,.55)",
        zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.white, borderRadius: 16, padding: "32px 36px",
          width: 480, maxWidth: "90vw",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)", fontFamily: FONT_BODY,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 style={{ margin: "0 0 20px", fontSize: 20, color: COLORS.navy, fontFamily: FONT_HEADING }}>
          Add New Program
        </h2>

        {FIELDS.map(([lbl, type, ph]) => (
          <div key={lbl} style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 700, color: COLORS.gray600, display: "block", marginBottom: 5 }}>
              {lbl}
            </label>
            <input
              type={type}
              placeholder={ph}
              style={{
                width: "100%", height: 38, borderRadius: 8,
                border: `1.5px solid ${COLORS.gray200}`,
                padding: "0 12px", fontSize: 13, fontFamily: "inherit",
                boxSizing: "border-box", outline: "none",
              }}
            />
          </div>
        ))}

        <div style={{ marginBottom: 20 }}>
          <label style={{ fontSize: 12, fontWeight: 700, color: COLORS.gray600, display: "block", marginBottom: 5 }}>
            Description
          </label>
          <textarea
            rows={3}
            style={{
              width: "100%", borderRadius: 8,
              border: `1.5px solid ${COLORS.gray200}`,
              padding: "8px 12px", fontSize: 13, fontFamily: "inherit",
              resize: "vertical", boxSizing: "border-box", outline: "none",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            style={{
              padding: "10px 20px", borderRadius: 8,
              border: `1.5px solid ${COLORS.gray200}`,
              background: COLORS.white, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              padding: "10px 24px", borderRadius: 8, border: "none",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              cursor: "pointer", fontSize: 13, fontWeight: 700,
              fontFamily: "inherit", color: COLORS.navy,
            }}
          >
            Save Program
          </button>
        </div>
      </div>
    </div>
  );
}