import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import styles from "../../styles/Navbar.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";

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

  return (
    <nav className="flex w-full bg-white flex-col justify-center fixed shadow-xl px-2">
      <div className="w-full flex justify-between min-h-[60px] items-center relative">
        <div className="w-2/10 font-oswald">LOGO</div>
        <div
          id="desktop-link-div"
          className={`hidden md:flex ${styles.desktopLinkDiv}`}
        >
          {links.map((link) => {
            return (
              <a
                key={link.name}
                className={`mx-2 cursor-pointer font-quatt nav-link ${styles.navLink}`}
              >
                {link.name}
              </a>
            );
          })}
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
          <ConnectButton accountStatus="full" chainStatus="name" />
        </div>
      </div>
      {showNav && (
        <div className="block md:hidden transition ease-in h-full pb-2">
          <ul className="flex flex-col">
            {links.map((link) => {
              return <li className="p-1 cursor-pointer">{link.name}</li>;
            })}
            <li>
              <ConnectButton
                accountStatus={{
                  smallScreen: "full",
                  largeScreen: "full",
                }}
                chainStatus="none"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
