"use client";
import { motion, spring } from "motion/react";

const Button = () => {
  return (
    <div
      className="h-screen bg-neutral-900 flex justify-center items-center"
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
        className="group relative text-gray-400 bg-neutral-950 py-3 px-10 rounded-md cursor-pointer"
      >
        Subscribe
        <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent w-full mx-auto h-0.5 blur-md"></span>
      </motion.button>
    </div>
  );
};

export default Button;
