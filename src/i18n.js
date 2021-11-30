// NPM packages
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Project files
import en from './translation/english.json';
import se from './translation/swedish.json';

const resources = {
  en,
  se,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: true, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
