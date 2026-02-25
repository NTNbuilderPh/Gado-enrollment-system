import { useState, useMemo } from "react";
import { COLORS, FONT_HEADING, FONT_BODY, termColor } from "../../tokens";
import { Badge } from "../ui/SharedUI";
import SubjectCard    from "./SubjectCard";
import SubjectDetails from "./SubjectDetails";
import FilterBar      from "./FilterBar";
import SUBJECTS from "../../data/subjects.json";

export default function SubjectList() {
  const [search,        setSearch]        = useState("");
  const [semFilter,     setSemFilter]     = useState("");
  const [unitsFilter,   setUnitsFilter]   = useState("");
  const [prereqFilter,  setPrereqFilter]  = useState("");
  const [programFilter, setProgramFilter] = useState("");
  const [selected,      setSelected]      = useState(null);

  const filtered = useMemo(() =>
    SUBJECTS.filter((s) => {
      const q = search.toLowerCase();
      if (q && !s.code.toLowerCase().includes(q) && !s.title.toLowerCase().includes(q)) return false;
      if (semFilter     && s.semester !== semFilter) return false;
      if (unitsFilter   && s.units    !== Number(unitsFilter)) return false;
      if (prereqFilter  === "with"    && s.prereqs.length === 0)  return false;
      if (prereqFilter  === "without" && s.prereqs.length > 0)    return false;
      if (programFilter && s.program !== programFilter && s.program !== "All Programs") return false;
      return true;
    }),
    [search, semFilter, unitsFilter, prereqFilter, programFilter]
  );

  return (
    <div style={{ fontFamily: FONT_BODY }}>
      {/* ── Page Header ── */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: COLORS.navy, margin: 0, fontFamily: FONT_HEADING }}>
          Subject Offerings
        </h1>
        <p style={{ color: COLORS.gray400, fontSize: 13, marginTop: 4 }}>{filtered.length} subjects found</p>
      </div>

      {/* ── Term Type Legend ── */}
      <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, color: COLORS.gray600, fontWeight: 600 }}>Term type:</span>
        {[["semester", "Semester"], ["term", "Term"], ["both", "Both"]].map(([k, v]) => (
          <Badge key={k} label={v} style={termColor(k)} />
        ))}
      </div>

      {/* ── Filters ── */}
      <FilterBar
        search={search}               setSearch={setSearch}
        semFilter={semFilter}         setSemFilter={setSemFilter}
        unitsFilter={unitsFilter}     setUnitsFilter={setUnitsFilter}
        prereqFilter={prereqFilter}   setPrereqFilter={setPrereqFilter}
        programFilter={programFilter} setProgramFilter={setProgramFilter}
      />

      {/* ── Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
        {filtered.map((s) => (
          <SubjectCard key={s.id} subject={s} onClick={() => setSelected(s)} />
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: COLORS.gray400 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
            <p>No subjects match your filters.</p>
          </div>
        )}
      </div>

      {selected && <SubjectDetails subject={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
