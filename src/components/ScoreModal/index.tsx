import { Box, Dialog, IconButton } from "@mui/material";

import { useEffect, useState } from "react";
import Intro from "./screens/Intro";
import { CloseIcon } from "../../icon";
import Authen from "./screens/Authen";
import { Screens } from "./type";
import VerifySig from "./screens/VerifySig";
import CalculateScore from "./screens/CalculateScore";
import Result from "./screens/Result";
import { useScoringContext } from "../../context/PublicContext";

export default function ScoreModal() {
  const { open, close } = useScoringContext();
  const [screen, setScreen] = useState<Screens>("intro");

  useEffect(() => {
    if (!open) {
      const timedReset = setTimeout(() => {
        setScreen("intro");
      }, 500);
      return () => clearTimeout(timedReset);
    }
  }, [open]);
  return (
    <Dialog
      open={open}
      PaperProps={{
        style: {
          borderRadius: "16px",
        },
      }}
    >
      <Box
        sx={{
          p: 3.5,
          width: {
            xs: "236px",
            xsm: "286px",
            sm: "400px",
          },
          fontFamily: "Montserrat !important",
        }}
      >
        <Box display={"flex"} justifyContent={"flex-end"} marginBottom={1}>
          <IconButton onClick={close}>
            <CloseIcon sx={{ fontSize: "1rem" }} />
          </IconButton>
        </Box>
        {screen === "intro" && <Intro setScreen={setScreen} />}
        {screen === "authen" && <Authen setScreen={setScreen} />}
        {screen === "verifySig" && <VerifySig setScreen={setScreen} />}
        {screen === "calculateScore" && (
          <CalculateScore setScreen={setScreen} />
        )}
        {screen === "result" && <Result />}
      </Box>
    </Dialog>
  );
}
