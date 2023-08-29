import { Box, Grid, Typography } from "@mui/material";
import metamaskIcon from "../../../assets/images/wallets/metamask.png";
import walletConnectIcon from "../../../assets/images/wallets/walletconnect.png";
import { Connector, useConnect } from "wagmi";
import {
  metamaskConnector,
  walletConnectConnector,
} from "../../wagmi/connector";

type walletConfig = {
  icon?: string;
  name?: string;
  connector?: Connector;
};
const wallets: walletConfig[] = [
  {
    name: "Metamask",
    icon: metamaskIcon,
    connector: metamaskConnector,
  },
  {
    name: "Walletconnect",
    icon: walletConnectIcon,
    connector: walletConnectConnector,
  },
];

export default function WalletDialog() {
  return (
    <Box>
      <Typography variant="body1" color={"text.secondary"} my={3}>
        Start by connecting with one of the wallets below. Be sure to store your
        private keys or seed phrase securely. Never share them with anyone.
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            outline: "1px solid slategrey",
          },
        }}
      >
        {wallets.map((item, index) => {
          return (
            <Grid item xs={6} sm={3} key={index}>
              <WalletItem
                icon={item.icon}
                name={item.name}
                connector={item.connector}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

function WalletItem({ icon, name, connector }: walletConfig) {
  const { connect } = useConnect({
    connector: connector,
  });
  const handleConnect = () => {
    try {
      connect();
    } catch (error) {}
  };
  return (
    <Box
      sx={{
        p: 0.3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        borderRadius: 2,
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={handleConnect}
    >
      <img
        src={icon}
        alt={"wallet-" + name}
        style={{ width: "50px", height: "50px" }}
      />
      <Typography variant="body2" color={"text.secondary"}>
        {name}
      </Typography>
    </Box>
  );
}
