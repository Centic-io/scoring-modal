export type Screens =
  | "intro"
  | "authen"
  | "verifySig"
  | "calculateScore"
  | "result";

export type ScreenComponentProps = {
  setScreen: React.Dispatch<React.SetStateAction<Screens>>;
};
