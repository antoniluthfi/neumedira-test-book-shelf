"use client";

import BookCard from "@/components/BookCard";
import Categories from "@/components/Categories";
import Loading from "@/components/Loading";
import { getAllBooks } from "@/utils/book";
import { useEffect, useState } from "react";

export default function Search() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

  const getData = async () => {
    setLoading(true);
    const res = await getAllBooks();
    setBooks(res);
    setLoading(false);
  };

  useEffect(() => {
    getData();

    return () => {
      setBooks([]);
      setLoading(false);
    };
  }, []);

  return (
    <div>
      <h2 className="text-[25px] text-[#4D4D4D] font-bold mt-9 mb-[37px]">
        Your <span className="text-[#EF8361]">Shelf</span>
      </h2>
      <Categories />

      {loading ? (
        <div className="mt-[34px] flex justify-center items-center w-full h-80">
          <Loading />
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-3 2xl:grid-cols-4 mt-[34px]">
          {books.length > 0 &&
            books.map((book, i) => (
              <BookCard key={`${i}_${book?.id}`} {...book} />
            ))}
        </div>
      )}
    </div>
  );
}
