"use client";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="h-screen flex justify-center items-center bg-neutral-900">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              scale: 0,
              opacity: 0,
              filter: "blur(100px)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              filter: "blur(100px)",
              scale: 0,
              opacity: 0,
            }}
            transition={{
              ease: "easeInOut",
              type: spring,
              stiffness: 200,
              damping: 20,
            }}
            className="h-2/4 w-xs bg-white border border-gray-200 rounded-lg shadow-2xl"
          >
            <div className="w-[90%] mx-auto py-4 flex flex-col gap-2">
              <h2 className="text-neutral-600 font-semibold text-base">
                Aceternity UI Components
              </h2>
              <p className="text-gray-600 text-sm">
                A collection of ui component for your project, get on with it.
              </p>
              <div className="mx-auto mt-2">
                <button
                  className="px-4 py-1 shadow-md rounded-lg font-semibold text-sm flex flex-row gap-3 items-center cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  Aceternity{" "}
                  <span>
                    <RxCross2 />
                  </span>
                </button>
              </div>
              <div className="relative mt-4 w-full bg-neutral-100 h-60 rounded-lg border border-gray-200">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.85,
                    filter: "blur(10px)",
                  }}
                  whileHover={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.85,
                    filter: "blur(10px)",
                  }}
                  className="absolute inset-0 h-full w-full bg-red-500 rounded-lg"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
