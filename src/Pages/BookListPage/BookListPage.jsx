import { useLoaderData } from "react-router-dom";
import ReadList from "../../Components/ReadList/ReadList";


const BookListPage = () => {
    const books = useLoaderData()
    return (
        <div>
            {
                books.map(book => <ReadList key={book.id} book={book}></ReadList>)
            }
        </div>
    );
};

export default BookListPage;