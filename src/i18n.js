import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './i18n/locales/en.json';
import translationEL from './i18n/locales/el.json';
import translationRU from './i18n/locales/ru.json';

const resources = {
  en: { translation: translationEN },
  el: { translation: translationEL },
  ru: { translation: translationRU }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
