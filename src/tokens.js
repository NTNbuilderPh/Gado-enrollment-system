// ─────────────────────────────────────────────
// DESIGN TOKENS
// ─────────────────────────────────────────────

export const FONT_HEADING = "'Source Serif 4', Georgia, serif";
export const FONT_BODY    = "'Source Sans 3', 'Helvetica Neue', Arial, sans-serif";

export const COLORS = {
  navy:         "#0F2044",
  navyLight:    "#1A3260",
  green:        "#1A6B3C",
  greenLight:   "#22854C",
  gold:         "#C9A227",
  goldLight:    "#E3B845",
  goldPale:     "#FFF8E7",
  white:        "#FFFFFF",
  gray50:       "#F8F9FA",
  gray100:      "#F1F3F5",
  gray200:      "#E9ECEF",
  gray400:      "#868E96",
  gray600:      "#495057",
  gray800:      "#212529",
  phasedRed:    "#C0392B",
  reviewOrange: "#D68910",
};

export const statusColor = (s) => {
  if (s === "Active")      return { bg: "#E6F4EE", text: "#1A6B3C", border: "#A8D8BC" };
  if (s === "Phased Out")  return { bg: "#FDECEA", text: "#C0392B", border: "#F5B7B1" };
  return                          { bg: "#FEF9E7", text: "#D68910", border: "#FAD7A0" };
};

export const termColor = (t) => {
  if (t === "semester") return { bg: "#EBF5FB", text: "#1A5276", border: "#AED6F1" };
  if (t === "term")     return { bg: "#F4ECF7", text: "#6C3483", border: "#D2B4DE" };
  return                       { bg: "#E8F8F5", text: "#1A6B3C", border: "#A9DFBF" };
};