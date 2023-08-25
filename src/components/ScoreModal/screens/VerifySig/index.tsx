import { Box, Typography } from "@mui/material";
import Steps from "../../Steps";
import { ScreenComponentProps } from "../../type";
import { useEffect } from "react";
import CenticLoading from "../../../CenticLoading";

export default function VerifySig({ setScreen }: ScreenComponentProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setScreen("calculateScore");
    }, 3000);
    return () => clearTimeout(timer);
  }, [setScreen]);

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
        Verifying ownership
      </Typography>

      <Box sx={{ my: 3 }}>
        <Steps active={1} />
      </Box>
      {/* <Button
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => setScreen("verifySig")}
      >
        Connect
      </Button> */}
    </Box>
  );
}
