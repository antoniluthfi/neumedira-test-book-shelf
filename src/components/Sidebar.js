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
    <div className="bg-white basis-[20%] min-h-screen rounded-bl-[10px] rounded-tl-[10px] py-5 px-14 flex flex-col justify-between">
      <div>
        <Image
          src="/images/login-logo.png"
          width={120}
          height={74}
          alt="Login logo"
          loading="lazy"
        />

        <ul className="mt-[100px] flex flex-col gap-[32px]">
          <li className="hover:scale-105 ease-in-out duration-300">
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
          <li className="hover:scale-105 ease-in-out duration-300">
            <Link
              href="/search"
              className={`flex gap-3 items-center ${
                pathname === "/search" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
              } text-[20px] leading-6`}
            >
              <SearchIcon
                fill={pathname === "/search" ? "#4D4D4D" : "#8A8A8A"}
              />
              Search
            </Link>
          </li>
          <li className="hover:scale-105 ease-in-out duration-300">
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
          <li className="hover:scale-105 ease-in-out duration-300">
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

      <ul className="mt-[100px] flex flex-col gap-[15px] mb-10">
        <li className="hover:scale-105 ease-in-out duration-300">
          <Link
            href="/about"
            className={`flex gap-3 items-center ${
              pathname === "/about" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[15px] leading-[18px]`}
          >
            About
          </Link>
        </li>
        <li className="hover:scale-105 ease-in-out duration-300">
          <Link
            href="/support"
            className={`flex gap-3 items-center ${
              pathname === "/support" ? "text-[#4D4D4D]" : "text-[#8A8A8A]"
            } text-[15px] leading-[18px]`}
          >
            Support
          </Link>
        </li>
        <li className="hover:scale-105 ease-in-out duration-300">
          <Link
            href="/terms-condition"
            className={`flex gap-3 items-center ${
              pathname === "/terms-condition"
                ? "text-[#4D4D4D]"
                : "text-[#8A8A8A]"
            } text-[15px] leading-[18px]`}
          >
            Terms & Condition
          </Link>
        </li>
      </ul>
    </div>
  );
}
