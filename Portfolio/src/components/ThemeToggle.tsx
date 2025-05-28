import React from "react";

// Botão para alternar entre tema claro e escuro
const ThemeToggle: React.FC<{
  theme: "light" | "dark";
  setTheme: (t: "light" | "dark") => void;
}> = ({ theme, setTheme }) => {
  return (
    <button
      className={`theme-toggle${
        theme === "dark" ? " active-dark" : " active-light"
      }`}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Alternar tema"
      type="button"
      style={{ right: "2rem", left: "auto" }}
    >
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
