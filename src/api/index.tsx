const BASE_URL = "https://api-integrate.centic.io";

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
export const calculateCustomScore = async (
  address: string,
  apiKey: string
): Promise<calculateScoreReturnType> => {
  if (!address || !apiKey) {
    throw Error("Invalid address or api key");
  }
  try {
    const result = await fetch(
      BASE_URL + "/centic/services/calculateCustomScore/" + address,
      {
        headers: {
          "x-apikey": apiKey,
        },
      }
    );
    return result.json() as Promise<calculateScoreReturnType>;
  } catch (error) {
    throw error;
  }
};
