// const BASE_URL = "https://api-gateway.centic.io/staging/v1";
const BASE_URL = "https://develop.centic.io/v1";

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
  apiKey: string,
  scoreId: string
): Promise<calculateScoreReturnType> => {
  if (!address || !apiKey || !scoreId) {
    throw Error("Invalid param");
  }
  try {
    const result = await fetch(
      BASE_URL + "/centic-services/calculateCustomScore/" + address + `?scoreId=${scoreId}`,
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
