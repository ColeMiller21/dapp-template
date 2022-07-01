import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "../../styles/Navbar.module.css";
import ConnectWalletBtn from "../ConnectWalletBtn";

const links = [
  { name: "About", link: "community" },
  { name: "Rarity/Perks", link: "rarity" },
  { name: "FiendzMap", link: "roadmap" },
  { name: "Team", link: "team" },
  { name: "FAQs", link: "faqs" },
];

const Navbar = () => {
  const router = useRouter();
  const { user, connectWallet, disconnectWallet } = useContext(UserContext);

  return (
    <nav className="flex w-full bg-white justify-between items-center fixed shadow-xl px-2">
      <div>LOGO</div>
      <div>LINKS</div>
      <div>
        {" "}
        <ConnectWalletBtn
          user={user}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
        />
      </div>
    </nav>
  );
};

export default Navbar;
