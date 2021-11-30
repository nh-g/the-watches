//NPM Packages
import { useState } from "react";

//Project files
import flag_en from "../assets/images/flag_en.svg";
import flag_se from "../assets/images/flag_se.svg";
import i18n from "../i18n";

export default function LanguageSwitcher() {
  // Local state
  const [language, setLanguage] = useState("en");

  // Methods
  function toggleLanguage() {
    switch (language) {
      case "en":
        i18n.changeLanguage("se");
        setLanguage("se");
        break;
      case "se":
        i18n.changeLanguage("en");
        setLanguage("en");
        break;
      default:
        console.log("No languages chosen")
    }
  }

  return (
    <button className="language-switcher" onClick={toggleLanguage}>
      <p className="description-small">{language}</p>
      {language === "en" && <img src={flag_en} alt="British flag" />}
      {language === "se" && <img src={flag_se} alt="Swedish flag" />}
    </button>
  );
}
