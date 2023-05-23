import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyShelfIcon from "~/icons/my-shelf.svg";
import ContributeIcon from "~/icons/contribute.svg";
import HomeIcon from "~/icons/home.svg";
import SearchIcon from "~/icons/search.svg";

export default function Sidebar() {
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
            className="flex gap-3 items-center text-[#8A8A8A] text-[20px] leading-6"
          >
            <HomeIcon fill="#8A8A8A" />
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/search"
            className="flex gap-3 items-center text-[#8A8A8A] text-[20px] leading-6"
          >
            <SearchIcon fill="#8A8A8A" />
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/my-shelf"
            className="flex gap-3 items-center text-[#8A8A8A] text-[20px] leading-6"
          >
            <MyShelfIcon fill="#8A8A8A" />
            My Shelf
          </Link>
        </li>
        <li>
          <Link
            href="/contribute"
            className="flex gap-3 items-center text-[#8A8A8A] text-[20px] leading-6"
          >
            <ContributeIcon fill="#8A8A8A" />
            Contribute
          </Link>
        </li>
      </ul>
    </div>
  );
}
