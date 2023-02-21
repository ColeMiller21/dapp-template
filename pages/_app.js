import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "../helpers/walletConnect";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
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
