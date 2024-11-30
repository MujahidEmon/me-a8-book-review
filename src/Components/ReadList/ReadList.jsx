import { useEffect, useState } from "react";

import { getItem } from "../../Utils/LocalStorage";
import ReadBookCard from "../ReadBookCard/ReadBookCard";

const ReadList = () => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const readBooks = getItem()
    setBooks(readBooks)
  },[])
  
  return (
    <div>
      {
        books.map(book => <ReadBookCard key={book.id} book={book}></ReadBookCard>)
      }
    </div>
  );
};

export default ReadList;
