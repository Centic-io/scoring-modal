import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type PublicContextType = {
    open: boolean;
    start: () => void;
    close: () => void;
    score: number | undefined;
};
declare function ScoringContextProvider({ children, apiKey, }: {
    children: React.ReactNode;
    apiKey: string;
}): react_jsx_runtime.JSX.Element;
declare const useScoringContext: () => PublicContextType;

export { ScoringContextProvider, useScoringContext };
