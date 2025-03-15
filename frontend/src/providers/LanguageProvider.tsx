import React, { createContext, useContext, useMemo, useState } from "react";

interface LanguageContextType {
  systemLanguage: { value: string; name: string };
  handleSystemLanguage: (value: string) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  systemLanguage: { value: "en", name: "English" },
  handleSystemLanguage: () => {},
});

export const useLanguageSettings = () => {
  return useContext(LanguageContext);
};

export default function LanguageProvider({ children }) {
  const [systemLanguage, setSystemLanguage] = useState<{
    value: string;
    name: string;
  }>({ value: "en", name: "English" });

  const handleSystemLanguage = (value: string) => {
    const selected = supportedLanguages.find(
      (language) => language.value === value
    );
    setSystemLanguage(selected);
  };

  const supportedLanguages = useMemo(() => {
    return [{ value: "en", name: "English" }];
  }, []);

  return (
    <LanguageContext.Provider value={{ systemLanguage, handleSystemLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
