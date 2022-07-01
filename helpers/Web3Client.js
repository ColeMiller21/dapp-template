import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        250: "https://rpc.ftm.tools",
        4002: "https://rpc.testnet.fantom.network/",
      },
      network: "fantom",
    },
  },
};

export const getWeb3Modal = () => {
  let web3Modal;
  if (typeof window !== undefined) {
    web3Modal = new Web3Modal({
      // network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });
    return web3Modal;
  }
};

export const connectWalletThruModel = async () => {
  let web3Modal = getWeb3Modal();
  const provider = await web3Modal.connect();
  const web3 = new Web3(provider);
  let account = await web3.eth.getAccounts();
  account = account[0];
  let chainId = await web3.eth.getChainId();
  if (chainId !== 250) {
    requestChainChange(provider);
  }
  return { provider, account, chainId };
};

export const requestChainChange = (provider) => {
  const ftmMainnet = "0xfa";
  provider.request({
    method: "wallet_switchEthereumChain",
    params: [{ chainId: ftmMainnet }],
  });
};

export const getChainIdFromString = async (provider) => {
  if (!provider) {
    return;
  }
  const web3 = new Web3(provider);
  let chainId = await web3.eth.getChainId();
  return chainId;
};
