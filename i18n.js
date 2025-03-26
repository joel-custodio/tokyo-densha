import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: 'jp',
    fallbackLng: 'en',
    ns: ["Common"],
    react: {
      bindI18n: 'loaded languageChanged',
      bindI18nStore: 'added',
      useSuspense: true,
    },
  });

  export default i18n;