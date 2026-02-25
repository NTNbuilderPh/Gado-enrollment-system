import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { COLORS, FONT_HEADING } from "../../tokens";

/**
 * Reusable bar chart card used on the Dashboard.
 * Props: title, data (array of { name, count }), color
 */
export default function ProgramChart({ title, data, color }) {
  return (
    <div style={{
      background: COLORS.white, borderRadius: 14,
      padding: "20px 20px 10px",
      boxShadow: "0 2px 16px rgba(15,32,68,.08)",
    }}>
      <h3 style={{
        margin: "0 0 16px", fontSize: 13, fontWeight: 700,
        color: COLORS.navy, fontFamily: FONT_HEADING,
      }}>
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke={COLORS.gray100} />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip />
          <Bar dataKey="count" fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
