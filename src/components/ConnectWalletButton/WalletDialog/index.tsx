import { Box, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";

import { styled } from "@mui/material";

export const Image = styled("img")({});

function WalletIntro() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography
        align="center"
        mb={3}
        pt={1}
        variant="subtitle1"
        fontWeight={600}
      >
        What's a Web3 Wallet?
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
        }}
      >
        <Box mb={3} sx={{ display: "flex" }}>
          <Box>
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                p: 1.5,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                mr: 2,
              }}
            >
              <LoginIcon />
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600} mb={0.5}>
              Login using a wallet connection
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Connect your wallet with simple clicks instead of creating a new
              account.
            </Typography>
          </Box>
        </Box>
        <Box mb={3} sx={{ display: "flex" }}>
          <Box>
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                p: 1.5,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                mr: 2,
              }}
            >
              <AccountBalanceWalletOutlinedIcon />
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600} mb={0.5}>
              Managing digital assets in an all-in-one place
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Send, receive, store, and display digital assets like Bitcoin and
              NFTs with a wallet.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                p: 1.5,
                bgcolor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "12px",
                mr: 2,
              }}
            >
              <AnalyticsOutlinedIcon />
            </Box>
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600} mb={0.5}>
              Take control of your finance
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Not being limited to exchanging assets in the decentralized
              markets.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
type WalletConfig = {
  icon: string;
  name: string;
};
function WalletItem({ icon, name }: WalletConfig) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        transition: "250ms opacity ease",
        "&:hover": {
          opacity: 0.7,
        },
      }}
    >
      <Image
        src={icon}
        alt={name}
        sx={{ width: 50, height: 50, display: "block", borderRadius: "10px" }}
      />
      <Typography
        variant="small"
        sx={{ mt: 1, fontWeight: 500, whiteSpace: "nowrap" }}
      >
        {name}
      </Typography>
    </Box>
  );
}
