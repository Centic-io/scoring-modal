import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import LocalAppContextProvider from "../AppContext";
import AppTheme from "../../components/AppTheme";
import ScoreModal from "../../components/ScoreModal";

import WagmiConfigWraper from "../../components/wagmi/config";

export type PublicContextType = {
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
  //set font dns
  useEffect(() => {
    let link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    );
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
  }, []);

  const [open, setOpen] = useState<boolean>(false);
  const [score, setScore] = useState<number | undefined>(undefined);

  useEffect(() => {
    let link = document.createElement("link");
    link.setAttribute(
      "href",
      "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    );
    link.setAttribute("rel", "stylesheet");
    document.head.appendChild(link);
  }, []);

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
