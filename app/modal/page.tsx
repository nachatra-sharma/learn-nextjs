"use client";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-neutral-900">
      <div className="h-30">
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="h-30 w-30 rounded-xl bg-cyan-500"
            ></motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          duration: 0.3,
          type: spring,
        }}
        className="cursor-pointer rounded-md bg-gray-800 px-10 py-2 text-gray-200"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
};

export default Modal;
