import { COLORS, FONT_BODY } from "../../tokens";
import { SearchInput, Select } from "../ui/SharedUI";
import PROGRAMS from "../../data/programs.json";

const SEM_OPTIONS   = ["1st Semester", "2nd Semester", "Summer", "Both"];
const UNITS_OPTIONS = ["2", "3", "6"];
const PROGRAM_CODES = PROGRAMS.map((p) => p.code);

export default function FilterBar({
  search, setSearch,
  semFilter, setSemFilter,
  unitsFilter, setUnitsFilter,
  prereqFilter, setPrereqFilter,
  programFilter, setProgramFilter,
}) {
  return (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
      <div style={{ flex: "1 1 200px" }}>
        <SearchInput value={search} onChange={setSearch} placeholder="Search by code or title..." />
      </div>

      <Select value={semFilter}     onChange={setSemFilter}     options={SEM_OPTIONS}   label="All Semesters" />
      <Select value={unitsFilter}   onChange={setUnitsFilter}   options={UNITS_OPTIONS} label="All Units"     />
      <Select value={programFilter} onChange={setProgramFilter} options={PROGRAM_CODES} label="All Programs"  />

      <select
        value={prereqFilter}
        onChange={(e) => setPrereqFilter(e.target.value)}
        style={{
          height: 38, borderRadius: 8, border: `1.5px solid ${COLORS.gray200}`,
          background: COLORS.white, fontSize: 13, color: COLORS.gray800,
          padding: "0 12px", fontFamily: FONT_BODY,
        }}
      >
        <option value="">All (Pre-req)</option>
        <option value="with">With Pre-req</option>
        <option value="without">Without Pre-req</option>
      </select>
    </div>
  );
}