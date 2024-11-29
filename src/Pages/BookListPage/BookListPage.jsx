import { Link, Outlet, useLoaderData } from "react-router-dom";
import ReadList from "../../Components/ReadList/ReadList";
import { useState } from "react";

const BookListPage = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const handleButton = () =>{
    const tab = !tabIndex;
    setTabIndex(tab)
  }
  // const books = useLoaderData();
  return (
    <div>

      <div className="bg-[#1313130A] p-10 rounded-xl mb-8">
        <h1 className="font-bold text-center text-2xl work-sans ">Books</h1>
      </div>

      <div className="flex items-center mb-8 justify-center">
        <ul className="menu  lg:menu-horizontal bg-[#23BE0A] rounded-box">
          <li>
            <details>
              <summary>Sort By</summary>
              {/* <details open> */}
              <ul className="bg-base-200 w-fit    ">
                <li>
                  <a>Rating</a>
                </li>
                <li>
                  <a>Number of Pages</a>
                </li>
                <li>
                  <a>Published Year</a>
                </li>
              </ul>
              {/* </details>s */}
            </details>
          </li>
        </ul>
      </div>


      <div>
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden mb-4 flex-nowrap ">
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
        <Outlet></Outlet>
      </div>


    </div>
  );
};

export default BookListPage;
