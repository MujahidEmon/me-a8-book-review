import ReadBookCard from "../ReadBookCard/ReadBookCard";
import { useOutletContext } from "react-router-dom";

const ReadList = () => {
  const {readBook} = useOutletContext();

  return (
    <div>
      {
        readBook.map(book => <ReadBookCard key={book.id} book={book}></ReadBookCard>)
      }
    </div>
  );
};

export default ReadList;
