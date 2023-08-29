import React from "react";
export type PublicContextType = {
    open: boolean;
    start: () => void;
    close: () => void;
    score: number | undefined;
};
export declare const PublicContext: React.Context<PublicContextType>;
export default function ScoringContextProvider({ children, apiKey, }: {
    children: React.ReactNode;
    apiKey: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const useScoringContext: () => PublicContextType;
