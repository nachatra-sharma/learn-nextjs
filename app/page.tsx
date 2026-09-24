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
    <div className="bg-neutral-900 h-screen w-full">
      <div className="py-4 px-4">
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
          className="bg-cyan-400 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer"
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
              className="absolute flex flex-col gap-7 mt-7"
              transition={{
                delayChildren: 0.3,
                duration: 0.3,
              }}
            >
              {Links.map((link) => (
                <motion.div key={link.id} variants={childrenVariants}>
                  <Link
                    href={link.link}
                    className="bg-cyan-200 py-2 px-3 rounded-md"
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
