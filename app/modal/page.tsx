"use client";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";

const Modal = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="bg-neutral-900 h-screen flex-col gap-10 flex justify-center items-center">
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
              className="w-30 h-30 bg-cyan-500 rounded-xl"
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
        className="bg-gray-800 px-10 py-2 rounded-md text-gray-200 cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
    </div>
  );
};

export default Modal;
