import { useState, useMemo } from "react";
import { COLORS, FONT_HEADING, FONT_BODY } from "../../tokens";
import { SearchInput, Select } from "../ui/SharedUI";
import ProgramCard    from "./ProgramCard";
import ProgramDetails from "./ProgramDetails";
import ProgramModal   from "./ProgramModal";
import PROGRAMS from "../../data/programs.json";

export default function ProgramList() {
  const [search,       setSearch]       = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter,   setTypeFilter]   = useState("");
  const [selected,     setSelected]     = useState(null);
  const [showModal,    setShowModal]     = useState(false);

  const filtered = useMemo(() =>
    PROGRAMS.filter((p) => {
      const q = search.toLowerCase();
      if (q && !p.code.toLowerCase().includes(q) && !p.name.toLowerCase().includes(q)) return false;
      if (statusFilter && p.status !== statusFilter) return false;
      if (typeFilter   && p.type   !== typeFilter)   return false;
      return true;
    }),
    [search, statusFilter, typeFilter]
  );

  if (selected) return <ProgramDetails program={selected} onBack={() => setSelected(null)} />;

  return (
    <div style={{ fontFamily: FONT_BODY }}>
      {/* ── Header ── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 26, fontWeight: 800, color: COLORS.navy, margin: 0, fontFamily: FONT_HEADING }}>
            Program Offerings
          </h1>
          <p style={{ color: COLORS.gray400, fontSize: 13, marginTop: 4 }}>{filtered.length} programs found</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          style={{
            padding: "10px 20px", borderRadius: 8, border: "none", cursor: "pointer",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
            color: COLORS.navy, fontWeight: 800, fontSize: 13, fontFamily: "inherit",
            boxShadow: "0 2px 10px rgba(201,162,39,.35)",
          }}
        >
          + Add Program
        </button>
      </div>

      {/* ── Filters ── */}
      <div style={{ display: "flex", gap: 12, marginBottom: 22, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 200px" }}>
          <SearchInput value={search} onChange={setSearch} placeholder="Search by code or name..." />
        </div>
        <Select value={statusFilter} onChange={setStatusFilter} options={["Active","Phased Out","Under Review"]} label="All Statuses" />
        <Select value={typeFilter}   onChange={setTypeFilter}   options={["Bachelor's","Diploma"]}              label="All Types"    />
      </div>

      {/* ── Grid ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {filtered.map((p) => (
          <ProgramCard key={p.id} program={p} onClick={() => setSelected(p)} />
        ))}
        {filtered.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: COLORS.gray400 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <p>No programs match your filters.</p>
          </div>
        )}
      </div>

      {showModal && <ProgramModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
