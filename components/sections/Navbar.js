import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import styles from "../../styles/Navbar.module.css";
import ConnectWalletBtn from "../ConnectWalletBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const links = [
  { name: "LINKS", link: "" },
  { name: "GO", link: "" },
  { name: "HERE", link: "" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();
  const { user, connectWallet, disconnectWallet } = useContext(UserContext);

  return (
    <nav className="flex w-full bg-white flex-col justify-center fixed shadow-xl px-2 ">
      <div className="w-full flex justify-between min-h-[60px] items-center">
        <div className="w-2/10">LOGO</div>
        <div id="desktop-link-div" className="hidden md:block">
          <ul className="flex">
            {links.map((link) => {
              return <li className="px-2 cursor-pointer">{link.name}</li>;
            })}
          </ul>
        </div>
        <div className="md:hidden">
          <span
            className="text-3xl cursor-pointer"
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {showNav ? <FaTimes /> : <GiHamburgerMenu />}
          </span>
        </div>
        <div className="w-2/10 hidden md:block ">
          {" "}
          <ConnectWalletBtn
            user={user}
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet}
          />
        </div>
      </div>
      {showNav && (
        <div className="block md:hidden transition ease-in h-full pb-2">
          <ul className="flex flex-col">
            {links.map((link) => {
              return <li className="p-1 cursor-pointer">{link.name}</li>;
            })}
            <li>
              <ConnectWalletBtn
                user={user}
                connectWallet={connectWallet}
                disconnectWallet={disconnectWallet}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
