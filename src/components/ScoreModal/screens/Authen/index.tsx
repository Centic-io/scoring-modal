import { Box, Typography } from "@mui/material";
import { CenticLogo } from "../../../../icon";
import { ScreenComponentProps } from "../../type";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import ConnectWalletButton from "../../../ConnectWalletButton";

export default function Authen({ setScreen }: ScreenComponentProps) {
  const { address } = useAccount();
  useEffect(() => {
    if (address) {
      setScreen("verifySig");
    }
  }, [address, setScreen]);

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
        Authenticate your wallet
      </Typography>
      <Typography
        variant="body2"
        color={"text.secondary"}
        my={3}
        textAlign={"center"}
      >
        Connect and provide the signature to prove your wallet ownership
      </Typography>
      <ConnectWalletButton />
    </Box>
  );
}
