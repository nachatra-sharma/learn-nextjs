import { songs, type Songs } from "@/constant/play";
import Image from "next/image";

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
  return (
    <div className="flex min-w-3xl flex-row items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 shadow-xs">
      <div className="flex flex-row gap-3">
        <div>
          <Image
            src={data.image}
            alt={data.title}
            className="rounded-md bg-cover"
            width={100}
            height={100}
          />
        </div>
        <div>
          <h1 className="font-semibold tracking-tight">{data.title}</h1>
          <p className="text-xs text-gray-400">{data.artist}</p>
        </div>
      </div>
      <div>
        <button className="cursor-pointer rounded-full bg-[#4f772d] px-4 py-1 text-sm text-white">
          Play
        </button>
      </div>
    </div>
  );
};

export default Spotify;
