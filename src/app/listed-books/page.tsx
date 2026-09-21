"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type/book.type";
import { useContext } from "react";

const ListedBooks = () => {
  const { readBooks } = useContext(BooksContext) as { readBooks: BookType[] };
  console.log(readBooks);

  return <div></div>;
};

export default ListedBooks;
