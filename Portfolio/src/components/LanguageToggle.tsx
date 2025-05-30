import React from "react";
import ReactCountryFlag from "react-country-flag";
import { type LanguageKey } from "../types";

interface LanguageToggleProps {
  lang: LanguageKey;
  setLang: (lang: LanguageKey) => void;
}

/**
 * Componente para alternar o idioma do site (Português/Inglês)
 */
const LanguageToggle: React.FC<LanguageToggleProps> = ({ lang, setLang }) => {
  const toggleLanguage = () => setLang(lang === "pt" ? "en" : "pt");

  return (
    <button
      className="theme-toggle language-button"
      onClick={toggleLanguage}
      aria-label={`Mudar para ${lang === "pt" ? "inglês" : "português"}`}
      type="button"
    >
      {lang === "pt" ? (
        <>
          <ReactCountryFlag countryCode="BR" svg className="flag-icon" />
          <span className="toggle-text">PT-BR</span>
        </>
      ) : (
        <>
          <ReactCountryFlag countryCode="US" svg className="flag-icon" />
          <span className="toggle-text">EN</span>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;
