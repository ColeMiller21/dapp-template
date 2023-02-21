import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconContext } from "react-icons";
import { pageLinks } from "../../data/links/pageLinks";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Navbar = ({ toggleAudio, muted }) => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <IconContext.Provider
      value={{
        color: "#000000",
        size: "1.5rem",
        className: "icons hover:text-blue-500",
      }}
    >
      <nav className="fixed top-0 left-0 above-all min-w-[100vw] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 min-h-[60px] flex justify-between items-center px-[1rem] md:px-[1.5rem] border-b-[1px] border-slate-700">
        <Link href="/">
          <h3 className="font-pixel text-black cursor-pointer hover:text-blue-500">
            Dapp Template
          </h3>
        </Link>
        <ul className="hidden font-pixel md:flex gap-[1rem]">
          {pageLinks.map((link, i) => {
            return (
              <Link href={link.href} key={`${link.title}-${i}`}>
                <motion.li className="font-vcr cursor-pointer hover:text-blue-400">
                  {link.title}{" "}
                </motion.li>
              </Link>
            );
          })}
        </ul>
        <ul className="flex font-pixel md:hidden gap-[1rem]">
          <li onClick={toggleNav}>
            {navOpen ? <FaTimes /> : <GiHamburgerMenu />}
          </li>
        </ul>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              key="answer"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{ opacity: 0, transition: { duration: 0.4 } }}
              className="w-screen flex font-vcr absolute top-[60px] left-0 bg-white above-all"
            >
              <ul className="flex flex-col divide-y divide-black w-full border-b border-black">
                {pageLinks.map((link, i) => {
                  return (
                    <Link href={link.href} key={`${link.title}-${i}`}>
                      <motion.li
                        className="font-vcr cursor-pointe hover:text-blue-500 py-[1rem] px-[.8rem]"
                        onClick={toggleNav}
                      >
                        {link.title}{" "}
                      </motion.li>
                    </Link>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
