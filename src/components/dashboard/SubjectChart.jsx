import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { COLORS, FONT_HEADING } from "../../tokens";

const PIE_COLORS = [COLORS.green, COLORS.phasedRed, COLORS.reviewOrange];

/**
 * Pie chart showing program status breakdown.
 * Props: data (array of { name, value })
 */
export default function SubjectChart({ data }) {
  return (
    <div
      style={{
        background: COLORS.white,
        borderRadius: 14,
        padding: "20px 20px 10px",
        boxShadow: "0 2px 16px rgba(15,32,68,.08)",
      }}
    >
      <h3
        style={{
          margin: "0 0 16px",
          fontSize: 13,
          fontWeight: 700,
          color: COLORS.navy,
          fontFamily: FONT_HEADING,
        }}
      >
        Program Status
      </h3>
      <ResponsiveContainer width="100%" height={160}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={55}
            dataKey="value"
            label={({ name, value }) => `${name}: ${value}`}
            labelLine={false}
            fontSize={10}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
