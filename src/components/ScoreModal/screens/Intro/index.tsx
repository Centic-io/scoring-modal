import { Box, Button, Typography } from "@mui/material";
import { CenticLogo } from "../../../../icon";
import { ScreenComponentProps } from "../../type";
import { useAccount, useDisconnect } from "wagmi";
import { useEffect } from "react";
import { LoadingButton } from "@mui/lab";

export default function Intro({ setScreen }: ScreenComponentProps) {
  const { disconnect } = useDisconnect();
  const { status } = useAccount();
  console.log("🚀 ~ file: index.tsx:10 ~ Intro ~ status:", status);
  useEffect(() => {
    if (status === "connected") {
      disconnect();
    }
  }, [disconnect]);
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
      <CenticLogo
        sx={{
          width: "60px",
          height: "60px",
          mb: 3,
        }}
      />
      <Typography variant="h1" color={"text.primary"}>
        Welcome to Centic score calculator
      </Typography>
      <Typography
        variant="body2"
        color={"text.secondary"}
        pt={2}
        textAlign={"center"}
      >
        We will provide the credit score as well as its relative information
        base on your wallet data
      </Typography>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
          p: 3,
          borderRadius: 4,
          my: 5,
        })}
      >
        <Typography variant="body1" color={"text.secondary"}>
          We won't share the wallet address or any other relative information to
          the third party app, only credit score information will be provided.
        </Typography>
      </Box>
      <Button fullWidth variant="outlined" sx={{ mb: 2 }}>
        FAQ
      </Button>
      <LoadingButton
        loading={status !== "disconnected"}
        color="primary"
        variant="contained"
        fullWidth
        onClick={() => {
          setScreen("authen");
        }}
      >
        Continue
      </LoadingButton>
    </Box>
  );
}
