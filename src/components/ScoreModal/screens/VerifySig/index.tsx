import { Box, Button, Typography } from "@mui/material";
import Steps from "../../Steps";
import { ScreenComponentProps } from "../../type";
import React, { useEffect, useState } from "react";
import CenticLoading from "../../../CenticLoading";
import { CenticLogo } from "../../../../icon";
import { useAccount, useSignMessage } from "wagmi";
import { recoverMessageAddress } from "viem";

export default function VerifySig({ setScreen }: ScreenComponentProps) {
  const { signMessage, isLoading, data, variables, error } = useSignMessage();
  const [errorText, setErrorText] = useState<string>("");
  const { address } = useAccount();
  const [success, setSuccess] = useState<boolean>(false);
  const handleSignMessage = async () => {
    try {
      setErrorText("");
      setSuccess(true);
      signMessage({
        message:
          `This is Centic team.` +
          "\n\n" +
          "Note: Sign to prove your wallet ownership. This is free and will not require a transaction.",
      });
    } catch (error) {}
  };
  useEffect(() => {
    const verifySig = async () => {
      if (error) {
        console.log("err:", error);
        setSuccess(false);
        return;
      }
      if (variables?.message && data) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature: data,
        });
        if (recoveredAddress === address) {
          setScreen("calculateScore");
        } else {
          setErrorText("Invalid signature");
        }
      }
    };
    verifySig();
  }, [data, variables, error, address, setScreen]);
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
      {success ? (
        <CenticLoading showTitle={false} />
      ) : (
        <CenticLogo
          sx={{
            width: "60px",
            height: "60px",
            mb: 3,
          }}
        />
      )}
      {success && (
        <Typography variant="h1" color={"text.primary"} mt={3}>
          Verifying ownership
        </Typography>
      )}
      {success && (
        <Box sx={{ my: 3 }}>
          <Steps active={1} />
        </Box>
      )}
      {!success && (
        <>
          <Typography variant="h1" color={"text.primary"} mt={3}>
            Verify wallet ownership
          </Typography>
          <Typography
            variant="body2"
            color={"text.secondary"}
            my={3}
            textAlign={"center"}
          >
            Sign to prove your wallet ownership. This is free and will not
            require any transaction.
          </Typography>
          {errorText && (
            <Typography
              variant="body2"
              color={"text.secondary"}
              my={3}
              textAlign={"center"}
            >
              {errorText}
            </Typography>
          )}
          <Button variant="contained" fullWidth onClick={handleSignMessage}>
            Sign
          </Button>
        </>
      )}
    </Box>
  );
}
