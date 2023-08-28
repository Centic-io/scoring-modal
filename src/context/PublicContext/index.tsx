import React, { useCallback, useContext, useMemo, useState } from "react";
import LocalAppContextProvider from "../AppContext";
import AppTheme from "../../components/AppTheme";
import ScoreModal from "../../components/ScoreModal";

import WagmiConfigWraper from "../../components/wagmi/config";

type PublicContextType = {
  open: boolean;
  start: () => void;
  close: () => void;
  score: number | undefined;
};
export const PublicContext = React.createContext<PublicContextType>(
  null as any
);
export default function ScoringContextProvider({
  children,
  apiKey,
}: {
  children: React.ReactNode;
  apiKey: string;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [score, setScore] = useState<number | undefined>(undefined);

  const start = useCallback(() => {
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);
  const contextValue = useMemo(() => {
    return { open, start, close, score };
  }, [open, start, close, score]);
  return (
    <PublicContext.Provider value={contextValue}>
      <WagmiConfigWraper>
        <LocalAppContextProvider apiKey={apiKey} setScore={setScore}>
          <AppTheme>
            <ScoreModal />
          </AppTheme>
        </LocalAppContextProvider>
      </WagmiConfigWraper>
      {children}
    </PublicContext.Provider>
  );
}
export const useScoringContext = () => useContext(PublicContext);
