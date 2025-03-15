import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    lng: 'jp',
    fallbackLng: 'en',
    ns: ["Common"],
  });

  export default i18n;