import { Songs } from "@/constant/play";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import type { Dispatch, SetStateAction } from "react";
import { motion } from "motion/react";
const Modal = ({
  song,
  setSong,
}: {
  song: Songs;
  setSong: Dispatch<SetStateAction<Songs | null>>;
}) => {
  const ref = useOutsideClick(() => setSong(null));
  return (
    <>
      <motion.div
        initial={{
          filter: "blur(10px)",
          opacity: 0,
        }}
        animate={{
          filter: "blur(0px)",
          opacity: 1,
        }}
        transition={{
          delay: 0.1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 min-h-screen min-w-screen bg-neutral-800/20 backdrop-blur-xs"
      ></motion.div>
      <motion.div
        className="fixed z-10 h-[70%] max-w-lg min-w-lg rounded-2xl bg-white py-4"
        ref={ref}
        layoutId={`card-${song.title}`}
      >
        <motion.img
          layoutId={`card-image-${song.title}`}
          src={song.image}
          className="mx-auto aspect-square h-[50%] w-[95%] rounded-2xl"
          alt="Song Thumbnail"
          width={400}
          height={300}
        />
        <div className="flex flex-row justify-between gap-3 p-4">
          <div>
            <motion.h1
              layoutId={`card-heading-${song.title}`}
              className="font-semibold tracking-tight"
            >
              {song.title}
            </motion.h1>
            <motion.p
              layoutId={`card-author-${song.title}`}
              className="text-xs text-gray-400"
            >
              {song.artist}
            </motion.p>
          </div>
          <div>
            <motion.button
              layoutId={`card-play-${song.title}`}
              className="cursor-pointer rounded-full bg-[#4f772d] px-4 py-1 text-sm text-white"
            >
              Playing...
            </motion.button>
          </div>
        </div>
        <div className="max-h-40 overflow-y-auto px-4 text-sm font-medium text-wrap text-gray-700">
          {song.details}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
