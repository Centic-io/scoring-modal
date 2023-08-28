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
  const { data, error, isLoading, signMessage, variables } = useSignMessage();
  const calculateScore = useCallback(async () => {
    if (!address) {
      return;
    }
    try {
      const scoreResult = await calculateCustomScore(address, apiKey || "");
      setScore(scoreResult.score);
    } catch (error) {} // need handle
  }, [apiKey, setScore, address]);
  const sign = useCallback(async () => {
    await signMessage({ message: "Test 123" });
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
