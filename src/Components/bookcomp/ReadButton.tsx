"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type/book.type";
import { useContext, type Dispatch, type SetStateAction } from "react";

const ReadButton = ({ book }: { book: BookType }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext) as {
    readBooks: BookType[];
    setReadBooks: Dispatch<SetStateAction<BookType[]>>;
  };

  const handleReadbook = () => {
    setReadBooks([...readBooks, book]);
    
  };

  return (
    <button
      className=" bg-white border border-gray-300 text-gray-800 font-medium py-2.5 px-6 rounded-lg hover:bg-gray-50 transition cursor-pointer"
      onClick={() => handleReadbook()}
    >
      Mark as Read
    </button>
  );
};

export default ReadButton;
