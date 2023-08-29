import React, { useCallback, useMemo } from "react";
import { calculateCustomScore } from "../../api";
import { useAccount, useSignMessage } from "wagmi";

type AppContextType = {
  // score: number;
  calculateScore: () => Promise<void>;
  sign: () => Promise<void>;
};

const LocalAppContext = React.createContext<AppContextType>(null as any);
type Props = { children: React.ReactNode; apiKey?: string; setScore: any };
export default function LocalAppContextProvider({
  children,
  apiKey,
  setScore,
}: Props) {
  const { address } = useAccount();
  const { signMessage } = useSignMessage();
  const calculateScore = useCallback(async () => {
    if (!address) {
      return;
    }
    try {
      const scoreResult = await calculateCustomScore(address, apiKey || "");
      setScore(scoreResult.score || 0);
    } catch (error) {
      setScore(0);
    } // need handle
  }, [apiKey, setScore, address]);
  const sign = useCallback(async () => {
    signMessage({ message: "Test 123" });
  }, [signMessage]);
  const contextValue: AppContextType = useMemo(() => {
    return {
      calculateScore,
      sign,
    };
  }, [calculateScore, sign]);

  return (
    <LocalAppContext.Provider value={contextValue}>
      {children}
    </LocalAppContext.Provider>
  );
}
export const useLocalScoringContext = () => React.useContext(LocalAppContext);
