"use client";
import { FaChevronRight } from "react-icons/fa";
import Logo from "@/assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { motion } from "motion/react";

const Links = ["Services", "How it works", "About", "Blog", "Contact"];

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<null | number>(null);
  return (
    <div className="relative mx-auto mt-4 flex w-[90%] flex-row items-center justify-between rounded-full bg-white px-6 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.08)] lg:max-w-4xl xl:max-w-6xl">
      <Image
        width={30}
        height={30}
        src={Logo}
        className="h-14 w-40"
        alt="logo"
      />

      <div className="hidden list-none flex-row items-center lg:flex">
        {Links.map((link, idx) => (
          <li
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="relative z-20 cursor-pointer px-3 py-2 text-sm text-gray-500"
          >
            {hovered === idx && (
              <motion.span
                style={{ borderRadius: 999 }}
                layoutId="hover"
                className="absolute inset-0 -z-10 h-full w-full bg-black"
              ></motion.span>
            )}
            <motion.span
              initial={false}
              animate={{ color: hovered === idx ? "#ffffff" : "#6b7280" }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              {link}
            </motion.span>
          </li>
        ))}
      </div>
      <div>
        <button className="hidden items-center gap-4 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white lg:flex">
          Book a call{" "}
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-700">
            <FaChevronRight />
          </span>
        </button>
      </div>
      <div className="flex lg:hidden" onClick={() => setOpen(!open)}>
        {open ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} />}
      </div>
      {open && (
        <div className="absolute top-full left-0 z-50 mt-2 w-full rounded-2xl bg-white p-6 shadow-lg lg:hidden">
          <div className="flex flex-col items-start gap-6">
            {Links.map((link, idx) => (
              <span
                key={idx}
                className="cursor-pointer text-sm text-gray-500 hover:text-gray-900"
              >
                {link}
              </span>
            ))}
          </div>
          <div className="mt-5">
            <button className="flex items-center gap-4 rounded-full bg-neutral-900 px-6 py-3 text-sm text-white">
              Book a call{" "}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-700">
                <FaChevronRight />
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavbarComponent;
