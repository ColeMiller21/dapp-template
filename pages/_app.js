import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const fantomChain = {
  id: 250,
  name: "Fantom",
  network: "fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM",
  },
  rpcUrls: {
    default: "https://rpc.ankr.com/fantom/",
  },
  blockExplorers: {
    default: { name: "FTMScan", url: " https://ftmscan.com/" },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.mainnet, fantomChain],
  [
    jsonRpcProvider({
      priority: 0,
      rpc: (chain) => {
        if (chain.id !== fantomChain.id) return null;
        return { http: chain.rpcUrls.default };
      },
    }),
    alchemyProvider({ apiKey: "OSJnQ5JMZqgm8FdLA2s9-VgexHponnEX" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Template dApp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} initialChain={chain.mainnet}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RainbowKitProvider>
        </WagmiConfig>
      </>
    );
  }
}

export default MyApp;
