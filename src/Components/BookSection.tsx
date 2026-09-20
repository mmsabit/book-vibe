import { BookType } from "@/type/book.type";
import BookCard from "./BookCard";

const getBooks = async () =>{
    const res = await fetch("http://localhost:3000/booksData.json");
    const data = await res.json();
    return data
}

const BookSection = async () => {
    const Books = await getBooks();
    return (
        <section className="container mx-auto my-20">
            <h2 className="font-bold text-[40px] text-center my-5">Books</h2>
            <div className="grid xl:grid-cols-4 grid-cols-3 gap-6">
                {Books.map((book:BookType) => {
                    return <BookCard key={book.bookId} book={book} />
                })}
            </div>
        </section>
    );
};

export default BookSection;