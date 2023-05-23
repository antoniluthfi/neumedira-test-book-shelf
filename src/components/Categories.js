import React, { useState } from "react";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState("All Books");
  const categories = [
    {
      name: "All Books",
    },
    {
      name: "Favourite",
    },
    {
      name: "Borrowed Books",
    },
    {
      name: "E-Books",
    },
    {
      name: "Audio Books",
    },
    {
      name: "Article & Journals",
    },
  ];

  return (
    <div className="w-full h-[30px] flex gap-[50px]">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <p
            className={`text-[20px] ${
              selectedCategory === category.name
                ? "text-[#4D4D4D]"
                : "text-[#868686]"
            }`}
          >
            {category.name}
          </p>
        </button>
      ))}
    </div>
  );
}
