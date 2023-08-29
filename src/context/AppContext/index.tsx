import React, { useCallback, useMemo } from "react";
import { calculateCustomScore } from "../../api";
import { useAccount } from "wagmi";

type AppContextType = {
  // score: number;
  calculateScore: () => Promise<void>;
};

const LocalAppContext = React.createContext<AppContextType>(null as any);
type Props = { children: React.ReactNode; apiKey?: string; setScore: any };
export default function LocalAppContextProvider({
  children,
  apiKey,
  setScore,
}: Props) {
  const { address } = useAccount();
  console.log("🚀 ~ file: index.tsx:18 ~ address:", address);
  const calculateScore = useCallback(async () => {
    if (!address) {
      return;
    }
    try {
      const scoreResult = await calculateCustomScore(address, apiKey || "");
      setScore(scoreResult.score);
    } catch (error) {} // need handle
  }, [apiKey, setScore, address]);

  const contextValue: AppContextType = useMemo(() => {
    return {
      calculateScore,
    };
  }, [calculateScore]);

  return (
    <LocalAppContext.Provider value={contextValue}>
      {children}
    </LocalAppContext.Provider>
  );
}
export const useLocalScoringContext = () => React.useContext(LocalAppContext);
