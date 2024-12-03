import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { useOutletContext } from "react-router-dom";


const WishList = () => {
    const {wishlistBooks} = useOutletContext();
    return (
        <div>
            {
                wishlistBooks.map(book => <ReadBookCard key={book.id} book={book}></ReadBookCard>)
            }
        </div>
    );
};

export default WishList;