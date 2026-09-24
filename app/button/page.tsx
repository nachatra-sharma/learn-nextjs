"use client";
import { motion, spring } from "motion/react";

const Button = () => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-neutral-900"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <motion.button
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          type: spring,
          duration: 0.3,
        }}
        className="group relative cursor-pointer rounded-md bg-neutral-950 px-10 py-3 text-gray-400"
      >
        Subscribe
        <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 bg-linear-to-r from-transparent via-cyan-500 to-transparent"></span>
        <span className="absolute inset-x-0 bottom-px mx-auto h-0.5 w-full bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"></span>
      </motion.button>
    </div>
  );
};

export default Button;
