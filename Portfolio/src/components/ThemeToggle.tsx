import React from "react";
import { type Theme } from "../types";
interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

/**
 * Componente para alternar entre tema claro e escuro
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <button
      className="theme-toggle theme-button"
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${
        theme === "light" ? "escuro" : "claro"
      }`}
      type="button"
    >
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
