import { FaStar } from "react-icons/fa";

import Image from "next/image";
import { BookType } from "@/type/book.type";

export interface bookprops {
  book: BookType;
}

export default function BookCard({ book }: bookprops) {
  return (
    <div className="max-w-xs rounded-2xl border border-gray-100 bg-white p-4 shadow-sm font-sans">
      <div className="flex h-56 w-full items-center justify-center rounded-xl bg-gray-100 p-4">
        <Image
          src={book.image}
          alt="The Dating Playbook For Men"
          width={1000}
          height={600}
          className="h-full object-contain drop-shadow-md"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {book.tags.map((tag, ind) => {
          return (
            <span key={ind} className="rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-600">
              {tag}
            </span>
          );
        })}
        
      </div>
      <h2 className="mt-3.5 text-xl font-bold tracking-tight text-gray-900 font-serif">
        {book.bookName}
      </h2>
      <p className="mt-1 text-sm text-gray-500">By : {book.author}</p>
      <div className="my-4 border-t border-dashed border-gray-200"></div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">
          {book.category}
        </span>
        <div className="flex items-center space-x-1 text-gray-700">
          <FaStar />
          <span className="text-sm font-semibold">{book.rating}</span>
        </div>
      </div>
    </div>
  );
}
