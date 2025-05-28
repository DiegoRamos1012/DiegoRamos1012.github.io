import React from "react";
import ReactCountryFlag from "react-country-flag";

// Botão para alternar o idioma do site (Português/Inglês)
const LanguageToggle: React.FC<{
  lang: "pt" | "en";
  setLang: (l: "pt" | "en") => void;
}> = ({ lang, setLang }) => {
  return (
    <button
      className="theme-toggle"
      style={{
        left: "2rem",
        right: "auto",
        display: "flex",
        alignItems: "center",
        gap: "0.5em",
      }}
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label="Switch language"
      type="button"
    >
      {lang === "pt" ? (
        <>
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
          <span style={{ fontWeight: 600 }}>PT-BR</span>
        </>
      ) : (
        <>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ width: "1.5em", height: "1.5em" }}
          />
          <span style={{ fontWeight: 600 }}>EN</span>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;
