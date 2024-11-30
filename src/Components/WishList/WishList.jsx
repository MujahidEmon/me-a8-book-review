import { useEffect, useState } from "react";
import { getWishlistBook } from "../../Utils/LsWishlist";
import ReadBookCard from "../ReadBookCard/ReadBookCard";


const WishList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const wishBooks = getWishlistBook()
        setBooks(wishBooks)
    },[])
    return (
        <div>
            {
                books.map(book => <ReadBookCard key={book.id} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default WishList;