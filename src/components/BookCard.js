import React from "react";
import Image from "next/image";

export default function BookCard({
  Title,
  author,
  image,
  rating,
  published,
  description,
}) {
  return (
    <div className="w-full h-[260px] bg-white rounded-[10px] p-4 flex justify-between gap-5 hover:scale-105 ease-in-out duration-300">
      <div>
        <div className="xl:w-[123px] xl:h-[170px] 2xl:w-[100px] 2xl:h-[150px] border-[1px] rounded-[5px] flex items-center mb-3">
          <Image
            src={image}
            width={123}
            height={170}
            alt="Book Image"
            loading="lazy"
            className="object-cover relative"
          />
        </div>

        <p className="text-[#4D4D4D] xl:text-xs 2xl:text-[11px]">{Title}</p>
        <p className="text-[#4D4D4D] text-[10px]">{author}</p>
        <p className="text-[#4D4D4D] text-[10px]">
          {/* 4.5<span className="text-[#A7A7A7]">/5</span> */}
          {rating}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#4D4D4D] xl:text-[15px] 2xl:text-[13px]">
          Borrowed On
        </p>
        <p className="text-[#747373] xl:text-[10px] 2xl:text-[9px]">
          11 Mar 2023 09:00 AM
        </p>
        <p className="text-[#4D4D4D] xl:text-[15px] 2xl:text-[13px]">
          Submission Due
        </p>
        <p className="text-[#747373] xl:text-[10px] 2xl:text-[9px]">
          14 Mar 2023
        </p>

        <div className="w-full h-10 rounded-[5px] bg-[#A0A0A0] flex justify-center items-center">
          <p className="text-white text-sm font-semibold">Borrowed</p>
        </div>

        <button className="w-full h-10 rounded-[5px] border-[1px] border-[#F76B56] flex justify-center items-center">
          <p className="text-[#F76B56] text-sm font-semibold">Return</p>
        </button>
      </div>
    </div>
  );
}
