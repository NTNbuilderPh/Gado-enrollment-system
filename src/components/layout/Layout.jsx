import Sidebar from "./Sidebar";
import { COLORS, FONT_BODY } from "../../tokens";

export default function Layout({ activePage, setActivePage, children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: COLORS.gray50, fontFamily: FONT_BODY }}>
      <Sidebar active={activePage} setActive={setActivePage} />
      <main style={{ flex: 1, padding: "36px 40px", overflowY: "auto", minWidth: 0 }}>
        {children}
      </main>
    </div>
  );
}