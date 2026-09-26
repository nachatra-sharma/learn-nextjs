"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const Back = () => {
  const currentpage = usePathname();

  return (
    <div className="absolute top-4 left-4">
      {currentpage !== "/" && currentpage !== "/navbar" && (
        <Link href={"/"}>
          <button className="flex cursor-pointer flex-row items-center gap-3 rounded-md bg-gray-200 px-4 py-2">
            <IoMdArrowRoundBack />
            <span>Back to Home</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Back;
