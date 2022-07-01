import { useState, useEffect } from "react";
import Script from "next/script";
import Layout from "../components/layout/Layout";
import {
  connectWalletThruModel,
  getWeb3Modal,
  getChainIdFromString,
} from "../helpers/Web3Client";
import { UserContext } from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [user, setUser] = useState(null);

  const connectWallet = async () => {
    let userInfo = await connectWalletThruModel();
    setUser(userInfo);
    if (userInfo?.provider) {
      await connectToProviderEvents(userInfo.provider);
    }
    if (account) {
      setAccount(account);
    }
    if (chainId) {
      setChainId(chainId);
    }
    return;
  };

  const connectToProviderEvents = async (provider) => {
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
      setAccount(accounts[0]);
    });

    // Subscribe to chainId change
    provider.on("chainChanged", async (cId) => {
      let c = await getChainIdFromString(provider);
      setChainId(c);
    });

    // Subscribe to provider connection
    provider.on("connect", (info) => {
      // console.log(info);
    });

    // Subscribe to provider disconnection
    provider.on("disconnect", (error) => {
      // console.log(error);
    });
  };

  const disconnectWallet = async () => {
    try {
      let web3Modal = getWeb3Modal();
      web3Modal.clearCachedProvider();
      clearUserData();
    } catch (err) {
      // console.log("Error Disconnecting", err);
    }
  };

  const clearUserData = () => {
    setAccount(null);
    setChainId(null);
    setUser(null);
  };

  useEffect(() => {
    setUser({ ...user, chainId });
  }, [chainId]);

  useEffect(() => {
    setUser({ ...user, account });
  }, [account]);

  useEffect(() => {
    let web3Modal = getWeb3Modal();
    if (web3Modal.cachedProvider) {
      const connect = async () => {
        await connectWallet();
      };
      connect().catch((err) => console.log("Error connecting: ", err));
    }
  }, []);
  return (
    <>
      <UserContext.Provider
        value={{
          user,
          connectWallet,
          disconnectWallet,
          getWeb3Modal,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
