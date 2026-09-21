"use client"

import { createContext, ReactNode, useState } from "react";

export const BooksContext = createContext({});

const BooksProvider = ({children}:{children: ReactNode}) => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlists, setWishlists] = useState([]);

    const shareData = {
        readBooks,
        setReadBooks,
        wishlists,
        setWishlists,
    };
    
    return (
        <BooksContext.Provider value={shareData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;