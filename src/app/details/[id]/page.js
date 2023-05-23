"use client";

import Loading from "@/components/Loading";
import { getBookDetails } from "@/utils/book";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ArrowLeftIcon from "~/icons/arrow-left.svg";
import ArrowDownIcon from "~/icons/arrow-down.svg";
import ReviewIcon from "~/icons/review.svg";
import NotesIcon from "~/icons/notes.svg";
import ShareIcon from "~/icons/share.svg";
import StarIcon from "~/icons/star.svg";

export default function BookDetails() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const params = useParams();
  const router = useRouter();

  const getData = async () => {
    setLoading(true);
    const res = await getBookDetails(params?.id);
    setBook(res);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setBook([]);
      setLoading(false);
    };
  }, []);

  return (
    <div className="mt-[34px]">
      <p className="flex items-center gap-3 cursor-pointer" onClick={router.back}>
        <ArrowLeftIcon /> Back to result
      </p>

      {loading ? (
        <div className="mt-[34px] flex justify-center items-center w-full h-80">
          <Loading />
        </div>
      ) : (
        <div className="flex gap-10 mt-5">
          <div className="w-[273px] h-[405px] bg-white rounded-[10px] flex flex-col items-center justify-center gap-7">
            <div className="w-[209px] h-[277px] flex items-center border-[1px] border-black">
              <Image
                src={book?.image}
                width={273}
                height={405}
                alt="Book Image"
                loading="lazy"
                className="object-cover relative"
              />
            </div>

            <div className="w-[209px] flex justify-around">
              <button className="flex flex-col items-center gap-1">
                <ReviewIcon />
                <p className="text-[11px] text-[#333333] font-bold">Review</p>
              </button>
              <button className="flex flex-col items-center gap-1">
                <NotesIcon />
                <p className="text-[11px] text-[#333333] font-bold">Notes</p>
              </button>
              <button className="flex flex-col items-center gap-1">
                <ShareIcon />
                <p className="text-[11px] text-[#333333] font-bold">Share</p>
              </button>
            </div>
          </div>

          <div className="basis-[70%] overflow-y-scroll max-h-screen">
            <h2 className="text-[35px] text-[#4D4D4D]">
              {book?.Title?.toUpperCase()}
            </h2>
            <p className="text-[15px] leading-[18px] text-[#4D4D4D] mt-[38px]">
              {book?.author}
            </p>
            <p className="text-[15px] leading-[18px] text-[#9A9A9A] mt-[5px]">
              Second Edition
            </p>

            <div className="flex items-center">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(() => (
                  <StarIcon />
                ))}
              </div>

              <p className="text-[#4D4D4D] text-[14px] ml-3 font-medium">
                {book?.rating} Ratings
              </p>
              <p className="text-[#4D4D4D] text-[14px] ml-[19px] font-medium">
                25 Currently reading
              </p>
              <p className="text-[#4D4D4D] text-[14px] ml-[19px] font-medium">
                119 Have read
              </p>
            </div>

            <div className="flex items-center gap-[116px]">
              <button className="mt-[61px] bg-[#F27851] hover:bg-[#dd7451] w-[209px] h-[61px] rounded-[5px] flex justify-center items-center">
                <p className="text-[20px] text-white font-semibold">
                  Baca Buku
                </p>
              </button>

              <button className="mt-[61px] bg-[#4D4D4D] hover:bg-[#3f3f3f] w-[127px] h-10 rounded-[5px] flex justify-center items-center gap-2">
                <p className="text-[15px] text-white">Add to List</p>
                <ArrowDownIcon fill="white" />
              </button>
            </div>

            <p className="text-[12px] leading-[20px] text-[#666666] font-bold mt-[69px]">
              Preview available in:{" "}
              <span className="text-[#F27851] underline">English</span>
            </p>

            <p className="text-[13px] leading-[20px] text-[#333333] mt-9">
              {book?.description}
            </p>

            <div className="w-[507px] h-[609px] bg-white rounded-[5px] border-[1px] border-[#DDDDDD] mt-4 box-border px-10 py-[29px]">
              <h2 className="text-[22px] leading-[27px] text-[#4D4D4D] font-semibold mb-[28px]">
                Book Details
              </h2>

              <h3 className="text-[14px] leading-[17px] text-[#4D4D4D] font-semibold mb-[13px]">
                Published in
              </h3>
              <p className="text-[12px] leading-[20px] text-[#4D4D4D] font-semibold mb-[18px]">
                United States
              </p>

              <h3 className="text-[14px] leading-[17px] text-[#4D4D4D] font-semibold mb-[10px]">
                Edition Notes
              </h3>
              <div className="flex gap-6">
                <p className="basis-[25%] text-[11px] leading-[13px] text-[#4D4D4D] font-semibold mb-[11px]">
                  Series
                </p>
                <p className="basis-[75%] text-[11px] leading-[13px] text-[#4D4D4D] font-semibold mb-[11px]">
                  Dover large print classics
                </p>
              </div>
              <div className="flex gap-6 mb-7">
                <p className="basis-[25%] text-[11px] leading-[13px] text-[#4D4D4D] font-semibold mb-[11px]">
                  Genre
                </p>
                <p className="basis-[75%] text-[11px] leading-[13px] text-[#4D4D4D] font-semibold mb-[11px]">
                  Fiction
                </p>
              </div>

              <h3 className="text-[14px] leading-[17px] text-[#666666] font-semibold mb-[10px]">
                Classifications
              </h3>
              <div className="flex gap-6">
                <p className="basis-[25%] text-[11px] leading-[13px] text-[#666666] font-semibold mb-[11px]">
                  Dewey Decimal Class
                </p>
                <p className="basis-[75%] text-[11px] leading-[13px] text-[#666666] font-semibold mb-[11px]">
                  823/.8
                </p>
              </div>
              <div className="flex gap-6">
                <p className="basis-[25%] text-[11px] leading-[13px] text-[#666666] font-semibold">
                  Library of Congress
                </p>
                <p className="basis-[75%] text-[11px] leading-[13px] text-[#666666] font-semibold">
                  PR5485 .A1 2002
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
