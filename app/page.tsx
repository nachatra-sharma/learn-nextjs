import { Links } from "@/constant/Links";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-900 h-screen w-full flex justify-center items-center gap-3 flex-wrap">
      {Links.map((link) => (
        <div key={link.id}>
          <Link href={link.link} className="bg-cyan-200 py-2 px-3 rounded-md">
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
