import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

export default function WagmiConfigWraper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
