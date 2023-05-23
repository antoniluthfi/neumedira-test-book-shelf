import React, { useContext, useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "~/icons/arrow-down.svg";
import ArrowUpIcon from "~/icons/arrow-up.svg";
import { logout } from "@/utils/auth";
import { AppContext } from "@/context/AppContext";

export default function ProfileShortcut() {
  const { dispatch } = useContext(AppContext);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="w-[20%] h-[49px] rounded-[40px] border-2 bg-white border-gray-200">
      <div
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex justify-between items-center cursor-pointer"
      >
        <Image
          src="/images/user.png"
          width={45}
          height={45}
          alt="User"
          loading="lazy"
        />

        <p className="text-[20px] text-[#4D4D4D]">Kenson</p>
        <button className="w-[15%]">
          {showOptions ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </button>
      </div>

      <div
        className={`profile-options ${
          showOptions ? "profile-slide-down" : "profile-slide-up"
        }`}
      >
        <ul
          className="border-[1px] border-gray-200 rounded-lg bg-white shadow-lg cursor-pointer"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <li className="py-2 px-4 hover:bg-[#F7F7FA] rounded-tl-lg rounded-tr-lg">
            Settings
          </li>
          <li
            className="py-2 px-4 hover:bg-[#F7F7FA] rounded-bl-lg rounded-br-lg"
            onClick={() => logout(dispatch({ type: "LOGOUT" }))}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
