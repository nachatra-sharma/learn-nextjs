"use client";
import { AnimatePresence, motion } from "motion/react";
import { Links } from "@/constant/Links";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
  const [open, setOpen] = useState(false);
  const parentVariants = {
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const childrenVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    close: {
      y: -10,
      opacity: 0,
    },
  };
  return (
    <div className="h-screen w-full bg-neutral-900">
      <div className="px-4 py-4">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cyan-400"
        >
          {open ? (
            <RxCross2 color="white" size={20} />
          ) : (
            <GiHamburgerMenu color="white" size={20} />
          )}
        </motion.button>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={parentVariants}
              initial="close"
              animate="open"
              exit="close"
              className="absolute mt-7 flex flex-col gap-7"
              transition={{
                delayChildren: 0.3,
                duration: 0.3,
              }}
            >
              {Links.map((link) => (
                <motion.div key={link.id} variants={childrenVariants}>
                  <Link
                    href={link.link}
                    className="rounded-md bg-cyan-200 px-3 py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
