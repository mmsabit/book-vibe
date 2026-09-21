import { BookType } from "@/type/book.type";
import Image from "next/image";
import Link from "next/link";

export interface bookprops {
  book: BookType;
}

const BookList = ({ book }: bookprops) => {
  return (
    <div>
      <div className="w-full bg-white rounded-3xl border border-slate-100 shadow-lg p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start mb-5">
        <div className="w-1/4 h-full p-10 bg-slate-50 rounded-2xl flex items-center justify-center  shadow-sm border border-slate-100/80 shrink-0 relative overflow-hidden">
          <Image
            src={book.image}
            alt={book.bookName}
            width={150}
            height={150}
            className="object-contain"
          ></Image>
        </div>

        <div className="flex-1 flex flex-col justify-between w-full">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mb-1">
              {book.bookName}
            </h1>
            <p className="text-slate-500 text-sm mb-4 font-normal">
              By :
              <span className="text-slate-700 font-medium">{book.author}</span>
            </p>

            {}
            <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
              <span className="font-bold text-slate-900">Tag</span>
              {book.tags.map((tag, ind) => {
                return (
                  <span
                    key={ind}
                    className="bg-emerald-50 text-emerald-600 font-semibold px-3 py-1 rounded-full text-xs"
                  >
                    #{tag}
                  </span>
                );
              })}
              

              <div className="flex items-center gap-1.5 text-slate-500 text-xs ml-auto sm:ml-0">
                <span>Year of Publishing: {book.yearOfPublishing}</span>
              </div>
            </div>

            {}
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <span>Publisher: {book.publisher}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Page {book.totalPages}</span>
              </div>
            </div>
          </div>

          {}
          <hr className="border-slate-200 mb-6" />

          {}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-blue-100/70 text-blue-600 font-medium px-4 py-2 rounded-2xl text-sm">
                Category: {book.category}
              </span>
              <span className="bg-amber-100/60 text-amber-700 font-medium px-4 py-2 rounded-2xl text-sm">
                Rating: {book.rating}
              </span>
            </div>
            <Link href={`/books/${book.bookId}`}>
              <button className="btn btn-success text-white w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
