"use client";

import { BooksContext } from "@/context/BooksContext";
import { BookType } from "@/type/book.type";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { toast, Bounce } from "react-toastify";

const ReadButton = ({ book }: { book: BookType }) => {
  const { readBooks, setReadBooks, wishlists, setWishlists } = useContext(
    BooksContext,
  ) as {
    readBooks: BookType[];
    setReadBooks: Dispatch<SetStateAction<BookType[]>>;
    wishlists: BookType[];
    setWishlists: Dispatch<SetStateAction<BookType[]>>;
  };

  const isBookSelected = readBooks.some(
    (readBook) => readBook.bookId === book.bookId,
  );

  const isWishlistSelected = wishlists.some(
    (wishlist) => wishlist.bookId === book.bookId,
  );

  const handleReadbook = () => {
    if (isBookSelected) {
      toast.error(`${book.bookName} Already Added to read`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setReadBooks([...readBooks, book]);
    toast.success(`${book.bookName} Added to read`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleWishlist = () => {
    if (isWishlistSelected) {
      toast.error(`${book.bookName} already added in Wishlist`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }
    setWishlists([...wishlists, book]);
    toast.success(`${book.bookName} Added in Wishlist`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  return (
    <div className="flex items-center gap-4">
      <button
        className={`btn btn-soft  ${isBookSelected ? "cursor-no-drop" : "cursor-pointer"}  `}
        onClick={() => handleReadbook()}
      >
        Mark as Read
      </button>
      <button
        className={`btn btn-active btn-success text-white  ${isWishlistSelected ? "cursor-no-drop" : "cursor-pointer"}`}
        onClick={() => handleWishlist()}
      >
        Add to wishlist
      </button>
    </div>
  );
};

export default ReadButton;
