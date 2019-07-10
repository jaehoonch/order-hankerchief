import i18n from "i18next";
import { reactI18nextModule  } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';

const fallbackLng = ['ko']; 
const availableLanguages = ['en', 'ko'];

// the translations
const resources = {
  "en": {
    translation: translationEN
  },
  "ko": {
    translation: translationKO
  }
};

i18n
  .use(LanguageDetector)
  .init({
    resources,
    debug: true,
    fallbackLng, // use en if detected lng is not available
    whitelist: availableLanguages,
    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;