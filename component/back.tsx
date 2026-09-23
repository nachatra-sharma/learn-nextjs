"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const Back = () => {
  const currentpage = usePathname();

  return (
    <div className="absolute top-4 left-4">
      {currentpage !== "/" && (
        <Link href={"/"}>
          <button className="flex flex-row gap-3 items-center bg-gray-200 rounded-md px-4 py-2 cursor-pointer">
            <IoMdArrowRoundBack />
            <span>Back to Home</span>
          </button>
        </Link>
      )}
    </div>
  );
};

export default Back;
