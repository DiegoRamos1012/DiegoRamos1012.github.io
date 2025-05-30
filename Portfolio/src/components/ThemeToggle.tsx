import React from "react";
import { type Theme, type LanguageKey } from "../types";

interface ThemeToggleProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  lang: LanguageKey;
  translations: {
    [key in LanguageKey]: {
      theme: {
        light: string;
        dark: string;
      };
    };
  };
}

/**
 * Componente para alternar entre tema claro e escuro
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  setTheme,
  lang,
  translations,
}) => {
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const t = translations[lang];

  return (
    <button
      className="theme-toggle theme-button"
      onClick={toggleTheme}
      aria-label={`Alternar para tema ${
        theme === "light" ? "escuro" : "claro"
      }`}
      type="button"
    >
      {theme === "light" ? `☀️ ${t.theme.light}` : `🌙 ${t.theme.dark}`}
    </button>
  );
};

export default ThemeToggle;
