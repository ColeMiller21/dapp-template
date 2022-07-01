import React, { useState, useEffect } from "react";

const ConnectWalletBtn = ({
  user,
  connectWallet,
  disconnectWallet,
  className,
}) => {
  const [disconnectButtonTxt, setDisconnectButtonTxt] = useState("");

  const formatDisconnectText = (account, chainId) => {
    let text;
    if (chainId === 250) {
      text = `${account.substring(0, 5)}....${account.substring(37, 42)}`;
    } else if (chainId === 4002) {
      text = "Testnet";
    } else {
      text = "Connect to FTM";
    }
    return text;
  };

  useEffect(() => {
    setDisconnectButtonTxt(formatDisconnectText(user?.account, user?.chainId));
  }, [user]);

  return (
    <div>
      {user?.account ? (
        <button
          onClick={disconnectWallet}
          onMouseEnter={() => setDisconnectButtonTxt("Disconnect")}
          onMouseLeave={() =>
            setDisconnectButtonTxt(
              formatDisconnectText(user?.account, user?.chainId)
            )
          }
          className={`${
            className ? className : "p-2 bg-green-500 w-[140px] my-2 rounded-md"
          }`}
        >
          {disconnectButtonTxt}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className={`${
            className ? className : "p-2 bg-red-500 my-2 w-[140px] rounded-md"
          }`}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletBtn;
