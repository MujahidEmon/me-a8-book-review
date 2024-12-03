import { Link, Outlet} from "react-router-dom";
import { useEffect, useState } from "react";
import { getItem } from "../../Utils/LocalStorage";
import { getWishlistBook } from "../../Utils/LsWishlist";

const BookListPage = () => {
  const [tabIndex, setTabIndex] = useState(0)


  const [readBook, setReadBook] = useState([]); // Read Books
  const [wishlistBooks, setWishlistBooks] = useState([]); // Wishlist Books
  const [originalReadBooks, setOriginalReadBooks] = useState([]); // For Resetting Read Books
  const [originalWishlistBooks, setOriginalWishlistBooks] = useState([]); // For Resetting Wishlist Books

  // Load Books on Mount
  useEffect(() => {
    const storedBooks = getItem();
    const storedWishlistBooks = getWishlistBook();
    setReadBook(storedBooks);
    setOriginalReadBooks(storedBooks); // Keep Original Copy
    setWishlistBooks(storedWishlistBooks);
    setOriginalWishlistBooks(storedWishlistBooks); // Keep Original Copy
  }, []);

  const handleSort = (field) => {
    if(tabIndex === 0){
      const sortedBooks = [...readBook].sort((a, b) => {
        if (field === "rating") return a.rating - b.rating;
        if (field === "pages") return a.totalPages - b.totalPages;
        if (field === "year") return a.yearOfPublishing - b.yearOfPublishing;
        return 0;
      });
      setReadBook(sortedBooks);
    }
    else if(tabIndex === 1){
      const sortedWBooks = [...wishlistBooks].sort((a, b) => {
        if (field === "rating") return a.rating - b.rating;
        if (field === "pages") return a.totalPages - b.totalPages;
        if (field === "year") return a.yearOfPublishing - b.yearOfPublishing;
        return 0;
      });
      setWishlistBooks(sortedWBooks)
    }
  };

  return (
    <div>

      <div className="bg-[#1313130A] lg:p-10 p-5 rounded-xl mb-8">
        <h1 className="font-bold text-center text-2xl work-sans ">Books</h1>
      </div>

      <div className="flex items-center mb-8 justify-center">
        <ul className="menu  lg:menu-horizontal bg-[#23BE0A] rounded-box">
          <li>
            <details>
              <summary>Sort By</summary>
              {/* <details open> */}
              <ul className="bg-base-200 w-fit  rounded-lg  ">
                <li>
                  <button onClick={() => {
                     handleSort('rating')
                     }}>Rating</button>
                </li>
                <li>
                  <button onClick={() => {
                    handleSort('pages')
                    }}>Number of Pages</button>
                </li>
                <li>
                  <button onClick={() => {
                    handleSort('year')
                  }}>Published Year</button>
                </li>
              </ul>
              {/* </details>s */}
            </details>
          </li>
        </ul>
      </div>


      <div>
        <div className="flex lg:justify-start justify-center items-center mx-4 overflow-x-auto overflow-y-hidden mb-4 flex-nowrap ">
          <Link
            to={""}
            onClick={() =>setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  text-gray-400 dark:text-gray-600 ${tabIndex === 0 ? "border-2 border-b-0 " : "border-b-2"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Books</span>
          </Link>
          <Link
            onClick={() => setTabIndex(1)}
            to={`wishlist`}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg  text-gray-50 dark:text-gray-900 ${tabIndex === 1 ? "border-2 border-b-0" : "border-b-2"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist Books</span>
          </Link>
        </div>
        <Outlet context={{readBook,wishlistBooks}}></Outlet>
      </div>


    </div>
  );
};

export default BookListPage;
