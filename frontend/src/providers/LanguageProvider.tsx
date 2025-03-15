import React, { createContext, useContext, useMemo } from "react";
import { useTranslation } from "next-i18next";

interface LanguageContextType {
  systemLanguage: { value: string; name: string };
  supportedLanguages: { value: string; name: string }[];
}

const LanguageContext = createContext<LanguageContextType>({
  systemLanguage: { value: "en", name: "English" },
  supportedLanguages: [],
});

export const useLanguageSettings = () => {
  return useContext(LanguageContext);
};

export default function LanguageProvider({ children }) {
  const { i18n } = useTranslation();

  const supportedLanguages = useMemo(() => {
    return [
      { value: "en", name: "English" },
      { value: "jp", name: "Japanese" },
    ];
  }, []);

  const systemLanguage = useMemo(() => {
    return supportedLanguages.find(
      (language) => language.value === i18n.language
    );
  }, [i18n.language, supportedLanguages]);

  return (
    <LanguageContext.Provider value={{ systemLanguage, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}
