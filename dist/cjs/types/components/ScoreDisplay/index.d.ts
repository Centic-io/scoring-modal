type Props = {
    score: number;
    text?: string;
};
type scoreConfig = {
    color: string;
    image: string;
    text: string;
};
export declare const getWalletScoreConfig: (score: number) => scoreConfig | undefined;
export default function ScoreDisplay({ score, text }: Props): import("react/jsx-runtime").JSX.Element;
export {};
