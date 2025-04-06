import React, { createContext, useContext, useMemo } from "react";

interface StationContextType {
  systemLanguage: { value: string; name: string };
  supportedLanguages: { value: string; name: string }[];
}

const StationContext = createContext<StationContextType>({
  systemLanguage: { value: "en", name: "English" },
  supportedLanguages: [],
});

export const useStations = () => {
  return useContext(StationContext);
};

export default function StationProvider({ children }) {
  return (
    <StationContext.Provider value={{}}>{children}</StationContext.Provider>
  );
}
