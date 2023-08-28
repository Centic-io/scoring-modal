import { Box, Button, Dialog, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import WalletDialog from "./WalletDialog";
import { CloseIcon } from "../../icon";

export default function ConnectWalletButton() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Dialog open={openDialog}>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.background.paper,
            p: 3,
            maxWidth: "400px",
          })}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            marginBottom={1}
            alignItems={"center"}
          >
            <Typography variant="h1" color={"text.primary"}>
              Connect Wallet
            </Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon sx={{ fontSize: "1rem" }} />
            </IconButton>
          </Box>
          <WalletDialog />
        </Box>
      </Dialog>
      <Button
        fullWidth
        onClick={handleOpen}
        variant="contained"
        color="primary"
      >
        Connect
      </Button>
    </>
  );
}
