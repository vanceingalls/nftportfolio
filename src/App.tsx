import "@rainbow-me/rainbowkit/styles.css";

import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import "./App.css";
import { Gallery } from "./Gallery";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    publicProvider(),
    alchemyProvider({
      apiKey: process.env.ALCHEMY_API_KEY ?? "",
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "NFT List",
  projectId: process.env.REACT_APP_RAINBOW_PROJECT_ID ?? "",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
  webSocketPublicClient,
});

function App() {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        modalSize="compact"
        initialChain={chains[0]}
        chains={chains}
      >
        <div className="absolute top-2 right-2">
          <ConnectButton></ConnectButton>
        </div>

        <Gallery />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
