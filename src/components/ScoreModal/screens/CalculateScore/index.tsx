import { Box, Typography } from "@mui/material";
import Steps from "../../Steps";
import { ScreenComponentProps } from "../../type";
import { useEffect } from "react";
import CenticLoading from "../../../CenticLoading";
import { useLocalScoringContext } from "../../../../context/AppContext";

export default function CalculateScore({ setScreen }: ScreenComponentProps) {
  const { calculateScore } = useLocalScoringContext();
  useEffect(() => {
    const process = async () => {
      await calculateScore();
      setScreen("result");
    };
    process();
  }, [setScreen, calculateScore]);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CenticLoading showTitle={false} />
      <Typography variant="h1" color={"text.primary"} mt={3}>
        Calculating your score
      </Typography>

      <Box sx={{ my: 3 }}>
        <Steps active={2} />
      </Box>
    </Box>
  );
}
