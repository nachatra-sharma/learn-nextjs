"use client";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Card = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-900">
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
            className="h-2/4 w-xs rounded-lg border border-gray-200 bg-white shadow-2xl"
          >
            <div className="mx-auto flex w-[90%] flex-col gap-2 py-4">
              <h2 className="text-base font-semibold text-neutral-600">
                Aceternity UI Components
              </h2>
              <p className="text-sm text-gray-600">
                A collection of ui component for your project, get on with it.
              </p>
              <div className="mx-auto mt-2">
                <button
                  className="flex cursor-pointer flex-row items-center gap-3 rounded-lg px-4 py-1 text-sm font-semibold shadow-md"
                  onClick={() => setOpen(!open)}
                >
                  Aceternity{" "}
                  <span>
                    <RxCross2 />
                  </span>
                </button>
              </div>
              <div className="relative mt-4 h-60 w-full rounded-lg border border-gray-200 bg-neutral-100">
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
                  className="absolute inset-0 h-full w-full rounded-lg bg-red-500"
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
