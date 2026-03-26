import Page from "../components/common/Page";
import Header from "../components/common/Header";
import { hiragana } from "../data/hiragana";

export default function CharactersList() {
  const rowColors = {
    Vowels: { bg: "#fff0f3", accent: "#e63950", label: "#c0253a" },
    "K-row": { bg: "#fff7e6", accent: "#f59e0b", label: "#b45309" },
    "S-row": { bg: "#f0fdf4", accent: "#22c55e", label: "#15803d" },
    "T-row": { bg: "#eff6ff", accent: "#3b82f6", label: "#1d4ed8" },
    "N-row": { bg: "#faf5ff", accent: "#a855f7", label: "#7e22ce" },
    "H-row": { bg: "#fff1f0", accent: "#f97316", label: "#c2410c" },
    "M-row": { bg: "#f0fdfa", accent: "#14b8a6", label: "#0f766e" },
    "Y-row": { bg: "#fefce8", accent: "#eab308", label: "#854d0e" },
    "R-row": { bg: "#fdf4ff", accent: "#d946ef", label: "#a21caf" },
    "W-row": { bg: "#f0f9ff", accent: "#0ea5e9", label: "#0369a1" },
    "N (standalone)": { bg: "#f8fafc", accent: "#64748b", label: "#334155" },
  };

  const rows = Array.from(new Set(hiragana.map((h) => h.row)));

  return (
    <>
      <Page>
        <Header></Header>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
            gap: "0.85rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
        >
          {hiragana.map(({ character, id, row }) => {
            const colors = rowColors[row];
            console.log(colors);
            return (
              <div
                key={id}
                style={{
                  backgroundColor: colors.bg,
                  color: colors.label,
                  borderRadius: "2px",
                  padding: "1rem 0.75rem",
                  textAlign: "center",
                  border: `1.5px solid ${colors.accent}22`,
                }}
              >
                <h4 className="text-2xl font-medium">{character} </h4>
                <small className="text-xs text-gray-400">{id}</small>
              </div>
            );
          })}
        </div>
      </Page>
    </>
  );
}
