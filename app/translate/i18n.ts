import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesEn from "./translations.en";
import resourcesIt from "./translations.it";

const resources = {
  en: {
    translation: resourcesEn,
  },

  it: {
    translation: resourcesIt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
