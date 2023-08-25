import { Button } from "@mui/material";
import { useState } from "react";

export default function ConnectWalletButton() {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const handleOpen = () => {
    setOpenDialog(true);
  };
  return (
    <Button onClick={handleOpen} variant="contained" color="primary">
      Connect
    </Button>
  );
}
