type calculateScoreReturnType = {
    score: number;
    rank: number;
    scoreBreakdown: {
        assets: number;
        transactions: number;
        loan: number;
        circulatingAssets: number;
        trustworthinessAssets: number;
    };
    entityId: string;
};
export declare const calculateCustomScore: (address: string, apiKey: string) => Promise<calculateScoreReturnType>;
export {};
