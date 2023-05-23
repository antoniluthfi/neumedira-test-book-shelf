import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "~/icons/arrow-down.svg";
import ArrowUpIcon from "~/icons/arrow-up.svg";
import { logout } from "@/utils/auth";
import { AppContext } from "@/context/AppContext";

export default function ProfileShortcut() {
  const { auth, dispatch } = useContext(AppContext);
  const [showOptions, setShowOptions] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileRef]);

  return (
    <div className="w-[20%] h-[49px] rounded-[40px] border-2 bg-white border-gray-200">
      <div
        ref={profileRef}
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex justify-between items-center cursor-pointer"
      >
        <Image
          src={auth?.data?.image}
          width={45}
          height={45}
          alt="User"
          loading="lazy"
          className="rounded-full"
        />

        <p className="text-[20px] text-[#4D4D4D]">{auth?.data?.username}</p>
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
