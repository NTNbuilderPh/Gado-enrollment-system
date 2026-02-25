import { COLORS, FONT_HEADING, FONT_BODY, statusColor, termColor } from "../../tokens";
import { StatCard } from "../ui/SharedUI";
import { Badge }    from "../ui/SharedUI";
import ProgramChart from "./ProgramChart";
import SubjectChart from "./SubjectChart";
import PROGRAMS     from "../../data/programs.json";
import SUBJECTS     from "../../data/subjects.json";

export default function Dashboard({ onNavigate }) {
  const totalPrograms        = PROGRAMS.length;
  const totalSubjects        = SUBJECTS.length;
  const activePrograms       = PROGRAMS.filter((p) => p.status === "Active").length;
  const subjectsWithPrereqs  = SUBJECTS.filter((s) => s.prereqs.length > 0).length;

  const semData = [
    { name: "1st Sem", count: SUBJECTS.filter((s) => s.semester === "1st Semester").length },
    { name: "2nd Sem", count: SUBJECTS.filter((s) => s.semester === "2nd Semester").length },
    { name: "Summer",  count: SUBJECTS.filter((s) => s.semester === "Summer").length },
  ];

  const statusData = [
    { name: "Active",       value: activePrograms },
    { name: "Phased Out",   value: PROGRAMS.filter((p) => p.status === "Phased Out").length },
    { name: "Under Review", value: PROGRAMS.filter((p) => p.status === "Under Review").length },
  ];

  const subjectsPerProgram = PROGRAMS
    .filter((p) => p.status === "Active")
    .map((p) => ({
      name:  p.code,
      count: p.yearLevels.reduce((a, y) => a + y.subjects.length, 0),
    }));

  const recentPrograms = [...PROGRAMS]
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
    .slice(0, 3);

  const recentSubjects = SUBJECTS.slice(-4);

  return (
    <div style={{ fontFamily: FONT_BODY }}>
      {/* ── Page Header ── */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: COLORS.navy, margin: 0, fontFamily: FONT_HEADING }}>
          Dashboard
        </h1>
        <p style={{ color: COLORS.gray400, fontSize: 13, marginTop: 4 }}>
          Academic Programs Overview — University of Tagum
        </p>
      </div>

      {/* ── Stat Cards ── */}
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 }}>
        <StatCard icon="🎓" label="Total Programs"      value={totalPrograms}       sub="All program types"                     accent={COLORS.navy}      />
        <StatCard icon="📚" label="Total Subjects"      value={totalSubjects}       sub="Across all programs"                   accent={COLORS.gold}      />
        <StatCard icon="✅" label="Active Programs"     value={activePrograms}      sub={`${totalPrograms - activePrograms} inactive`} accent={COLORS.green} />
        <StatCard icon="🔗" label="With Pre-requisites" value={subjectsWithPrereqs} sub={`${totalSubjects - subjectsWithPrereqs} have none`} accent={COLORS.goldLight} />
      </div>

      {/* ── Charts ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 28 }}>
        <ProgramChart title="Subjects per Semester" data={semData}            color={COLORS.navy} />
        <SubjectChart data={statusData} />
        <ProgramChart title="Subjects per Program"  data={subjectsPerProgram} color={COLORS.gold} />
      </div>

      {/* ── Recent ── */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Recently Added Programs */}
        <div style={{ background: COLORS.white, borderRadius: 14, padding: "20px 24px", boxShadow: "0 2px 16px rgba(15,32,68,.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>
              Recently Added Programs
            </h3>
            <button
              onClick={() => onNavigate("programs")}
              style={{ fontSize: 11, color: COLORS.gold, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}
            >
              View All →
            </button>
          </div>
          {recentPrograms.map((p) => (
            <div key={p.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.gray100}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>{p.code}</div>
                <div style={{ fontSize: 11, color: COLORS.gray400 }}>{p.name}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Badge label={p.status} style={statusColor(p.status)} />
                <span style={{ fontSize: 10, color: COLORS.gray400 }}>{p.dateAdded}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Recently Added Subjects */}
        <div style={{ background: COLORS.white, borderRadius: 14, padding: "20px 24px", boxShadow: "0 2px 16px rgba(15,32,68,.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <h3 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>
              Recently Added Subjects
            </h3>
            <button
              onClick={() => onNavigate("subjects")}
              style={{ fontSize: 11, color: COLORS.gold, background: "none", border: "none", cursor: "pointer", fontWeight: 700 }}
            >
              View All →
            </button>
          </div>
          {recentSubjects.map((s) => (
            <div key={s.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${COLORS.gray100}` }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: COLORS.navy, fontFamily: FONT_HEADING }}>{s.code}</div>
                <div style={{ fontSize: 11, color: COLORS.gray400 }}>{s.title}</div>
              </div>
              <Badge
                label={s.termType === "semester" ? "Semester" : s.termType === "term" ? "Term" : "Both"}
                style={termColor(s.termType)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}