import React from "react";
type AppContextType = {
    calculateScore: () => Promise<void>;
    sign: () => Promise<void>;
};
type Props = {
    children: React.ReactNode;
    apiKey?: string;
    setScore: any;
};
export default function LocalAppContextProvider({ children, apiKey, setScore, }: Props): import("react/jsx-runtime").JSX.Element;
export declare const useLocalScoringContext: () => AppContextType;
export {};
