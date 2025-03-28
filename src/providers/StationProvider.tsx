import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getStations } from "../api/stations.api";
import { IStation } from "../interface/station.interface";

interface StationContextType {
  allStations: IStation[];
}

const StationContext = createContext<StationContextType>({
  allStations: [],
});

export const useStations = () => {
  return useContext(StationContext);
};

export default function StationProvider({ children }) {
  const [allStations, setAllStations] = useState<IStation[]>([]);

  useEffect(() => {
    getStations().then((res) => {
      if (res.data.length > 0) {
        setAllStations(res.data);
      }
    });
  }, []);

  return (
    <StationContext.Provider value={{ allStations }}>
      {children}
    </StationContext.Provider>
  );
}
