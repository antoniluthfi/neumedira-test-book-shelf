"use client";

import BookCard from "@/components/BookCard";
import Categories from "@/components/Categories";
import Loading from "@/components/Loading";
import { AppContext } from "@/context/AppContext";
import { bookFilter, getAllBooks } from "@/utils/book";
import { useContext, useEffect, useState } from "react";

export default function Search() {
  const { searchBookKeyword } = useContext(AppContext);
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
        Search <span className="text-[#EF8361]">Books</span>
      </h2>
      <Categories />

      {loading ? (
        <div className="mt-[34px] flex justify-center items-center w-full h-80">
          <Loading />
        </div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-3 2xl:grid-cols-4 mt-[34px] overflow-y-scroll max-h-[420px]">
          {books.length > 0 &&
            books
              .filter((book) => bookFilter(book, searchBookKeyword))
              .map((book, i) => (
                <BookCard key={`${i}_${book?.id}`} {...book} />
              ))}
        </div>
      )}
    </div>
  );
}
