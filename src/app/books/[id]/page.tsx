import ReadButton from "@/Components/bookcomp/ReadButton";
import { BookType } from "@/type/book.type";
import Image from "next/image";

interface bookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: bookDetailsProps) => {
  const { id } = await params;
  const bookData = await getBooks();

  const book = bookData.find(
    (book: BookType) => book.bookId === Number(id),
  ) as BookType;

  return (
    <div className="mt-10">
      <div className="container mx-auto flex items-center justify-center">
        <div className="w-full bg-[#F4F4F4] rounded-2xl px-10 py-20 shadow-sm flex flex-col md:flex-row gap-8 items-center">
          {/* Left Side: Book Cover Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={book.image}
              alt={book.bookName}
              className="w-full max-w-xs drop-shadow-2xl object-contain"
              width={1000}
              height={600}
              
            />
          </div>

          {/* Right Side: Book Details */}
          <div className="w-full md:w-1/2 flex flex-col">
            {/* Title & Author */}
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              {book.bookName}
            </h1>
            <p className="text-sm text-gray-600 mt-1">By : {book.author}</p>

            <hr className="my-4 border-gray-300" />

            {/* Genre / Category */}
            <div className="text-sm text-gray-800 font-medium mb-4">
              {book.category}
            </div>

            {/* Review Section */}
            <div className="text-sm text-gray-600 space-y-3 leading-relaxed mb-6">
              <p>
                <strong className="text-gray-900">Review :</strong>{" "}
                {book.review}
              </p>
            </div>

            {/* Tags */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm text-gray-800 font-medium">Tag</span>
              {book.tags.map((tag, ind) => {
                return (
                  <span
                    key={ind}
                    className="rounded-full bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-600"
                  >
                    {tag}
                  </span>
                );
              })}
            </div>

            {/* Metadata Grid */}
            <div className="space-y-2 text-sm text-gray-700 mb-8">
              <div className="flex">
                <span className="w-40 text-gray-500">Number of Pages:</span>
                <span className="font-semibold text-gray-900">{book.totalPages}</span>
              </div>
              <div className="flex">
                <span className="w-40 text-gray-500">Publisher:</span>
                <span className="font-semibold text-gray-900">
                  {book.publisher}
                </span>
              </div>
              <div className="flex">
                <span className="w-40 text-gray-500">Year of Publishing:</span>
                <span className="font-semibold text-gray-900">
                    {book.yearOfPublishing}
                </span>
              </div>
              <div className="flex">
                <span className="w-40 text-gray-500">Rating:</span>
                <span className="font-semibold text-gray-900">
                    {book.rating}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <ReadButton book={book}></ReadButton>
              <button className=" bg-[#53A5C2] text-white font-medium py-2.5 px-6 rounded-lg hover:bg-[#458da7] transition">
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
