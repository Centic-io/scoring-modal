import { MetaMaskConnector } from "wagmi/dist/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

export const metamaskConnector = new MetaMaskConnector({
  options: {
    shimDisconnect: true,
  },
});

export const walletConnectConnector = new WalletConnectConnector({
  options: {
    projectId: "e798d9e6ae31f96eeb80c8396b17611b",
    showQrModal: true,
  },
});
