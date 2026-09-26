"use client";
import Modal from "@/component/modal";
import { songs, type Songs } from "@/constant/play";
import { useState } from "react";
import { motion } from "motion/react";

const Spotify = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-gray-100">
      {songs.map((song) => {
        return <Card data={song} key={song.id} />;
      })}
    </div>
  );
};

const Card = ({ data }: { data: Songs }) => {
  const [song, setSong] = useState<null | Songs>(null);

  return (
    <>
      {song && <Modal song={song} setSong={setSong} />}
      <motion.div
        layoutId={`card-${data.title}`}
        className="flex min-w-3xl flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-xs"
        onClick={() => setSong(data)}
      >
        <div className="flex flex-row gap-3">
          <div>
            <motion.img
              layoutId={`card-image-${data.title}`}
              src={data.image}
              alt={data.title}
              className="rounded-md bg-cover"
              width={100}
              height={100}
            />
          </div>
          <div>
            <motion.h1
              layoutId={`card-heading-${data.title}`}
              className="font-semibold tracking-tight"
            >
              {data.title}
            </motion.h1>
            <motion.p
              layoutId={`card-author-${data.title}`}
              className="text-xs text-gray-400"
            >
              {data.artist}
            </motion.p>
          </div>
        </div>
        <div>
          <motion.button
            layoutId={`card-play-${data.title}`}
            className="cursor-pointer rounded-full bg-[#4f772d] px-4 py-1 text-sm text-white"
          >
            Play
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

export default Spotify;
