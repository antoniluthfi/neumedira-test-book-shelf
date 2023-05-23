import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyShelfIcon from "~/icons/my-shelf.svg";
import ContributeIcon from "~/icons/contribute.svg";
import HomeIcon from "~/icons/home.svg";
import SearchIcon from "~/icons/search.svg";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-white basis-[20%] min-h-screen rounded-bl-[10px] rounded-tl-[10px] py-5 px-14">
      <Image
        src="/images/login-logo.png"
        width={120}
        height={74}
        alt="Login logo"
        loading="lazy"
      />

      <ul className="mt-[100px] flex flex-col gap-[32px]">
        <li>
          <Link
            href="/"
            className={`flex gap-3 items-center ${
              pathname === "/" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[20px] leading-6`}
          >
            <HomeIcon fill={pathname === "/" ? "#4D4D4D" : "#8A8A8A"} />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className={`flex gap-3 items-center ${
              pathname === "/search" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[20px] leading-6`}
          >
            <SearchIcon fill={pathname === "/search" ? "#4D4D4D" : "#8A8A8A"} />
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/my-shelf"
            className={`flex gap-3 items-center ${
              pathname === "/my-shelf" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[20px] leading-6`}
          >
            <MyShelfIcon
              fill={pathname === "/my-shelf" ? "#4D4D4D" : "#8A8A8A"}
            />
            My Shelf
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className={`flex gap-3 items-center ${
              pathname === "/contribute" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[20px] leading-6`}
          >
            <ContributeIcon
              fill={pathname === "/contribute" ? "#4D4D4D" : "#8A8A8A"}
            />
            Contribute
          </Link>
        </li>
      </ul>
    </div>
  );
}
