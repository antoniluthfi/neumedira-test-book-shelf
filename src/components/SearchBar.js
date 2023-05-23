import React, { useContext, useEffect, useRef, useState } from "react";
import ArrowDownIcon from "~/icons/arrow-down.svg";
import ArrowUpIcon from "~/icons/arrow-up.svg";
import SearchIcon from "~/icons/search.svg";
import BarcodeIcon from "~/icons/barcode.svg";
import { AppContext } from "@/context/AppContext";

export default function SearchBar() {
  const { searchBookKeyword, setSearchBookKeyword } = useContext(AppContext);
  const [showOptions, setShowOptions] = useState(false);
  const categoryRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (categoryRef.current && !categoryRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoryRef]);

  return (
    <div className="w-[50%] h-[49px] rounded-[40px] border-2 bg-white border-gray-200 flex items-center">
      <div
        ref={categoryRef}
        onClick={() => setShowOptions((prev) => !prev)}
        className="flex justify-center items-center gap-[10px] w-[20%] h-full bg-[#F7F7FA] rounded-bl-[40px] rounded-tl-[40px] cursor-pointer"
      >
        <span className="text-[20px] text-[#4D4D4D]">All</span>
        {showOptions ? <ArrowDownIcon /> : <ArrowUpIcon />}
      </div>

      <div
        className={`category-search ${
          showOptions ? "category-slide-down" : "category-slide-up"
        } absolute`}
      >
        <ul
          className="border-[1px] border-gray-200 rounded-lg bg-white shadow-lg cursor-pointer"
          onClick={() => setShowOptions((prev) => !prev)}
        >
          <li className="py-2 px-4 hover:bg-[#F7F7FA] rounded-tl-lg rounded-tr-lg">
            All Books
          </li>
          <li className="py-2 px-4 hover:bg-[#F7F7FA]">Favourite</li>
          <li className="py-2 px-4 hover:bg-[#F7F7FA]">Borrowed Books</li>
          <li className="py-2 px-4 hover:bg-[#F7F7FA]">E-Books</li>
          <li className="py-2 px-4 hover:bg-[#F7F7FA]">Audio Books</li>
          <li className="py-2 px-4 hover:bg-[#F7F7FA] rounded-bl-lg rounded-br-lg">
            Articles & Journals
          </li>
        </ul>
      </div>

      <input
        name="search"
        type="text"
        placeholder="Search"
        className="w-[65%] h-full pl-4 focus:outline-none"
        value={searchBookKeyword}
        onChange={(e) => setSearchBookKeyword(e.target.value)}
      />
      <div className="w-[20%] h-full flex justify-center items-center gap-[11px]">
        <button>
          <SearchIcon fill="#F76B56" />
        </button>
        <div className="border-[1px] h-[80%]" />
        <button>
          <BarcodeIcon fill="#F76B56" />
        </button>
      </div>
    </div>
  );
}
