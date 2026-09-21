"use client";

import BookList from "@/Components/bookcomp/BookList";
import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type/book.type";
import { useContext } from "react";

const ListedBooks = () => {
  const { readBooks, wishlists } = useContext(BooksContext) as {
    readBooks: BookType[];
    wishlists: BookType[];
  };

  return (
    <div>
      <div className="container mx-auto w-full py-8.5 rounded-2xl bg-[#f3f3f3]">
        <h2 className="text-3xl font-bold text-center">Book List</h2>
      </div>
      <div className="container mx-auto mt-20">
        <div className="tabs tabs-lift">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Readed Books"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {readBooks.map((readBook:BookType)=>{
                return <BookList key={readBook.bookId} book={readBook}></BookList>
            })}
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist"
            
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            {wishlists.map((wishlist:BookType)=>{
                return <BookList key={wishlist.bookId} book={wishlist}></BookList>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
