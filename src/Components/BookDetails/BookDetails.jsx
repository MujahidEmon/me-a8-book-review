
import {useLoaderData, useParams } from "react-router-dom";
import {saveItems } from "../../Utils/LocalStorage";
import { deleteItem, saveWishBook } from "../../Utils/LsWishlist";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  
  const handleRead = (item) =>{
    // getItem(id);
    saveItems(item)
    deleteItem(item.id)
  }
  const handleWishlist = (book) => {
    saveWishBook(book)
  }
  const book = books.find((book) => book.id === id);
  const tag = book.tags
  console.log(book);
  return (
    <div
      to={`/book/${id}`}
      className="flex lg:flex-row gap-10 justify-between  flex-col px-7 md:px-3 py-6"
    >
      <figure className=" bg-[#F3F3F3] w-full lg:w-1/3 lg:p-12 p-5 rounded-xl flex items-center justify-center">
        <img
          src={book.image}
          alt={book.bookName}
          className="lg:w-full w-48"
        />
      </figure>
      <div className="lg:w-2/3 w-full">
        <div className=" flex flex-col gap-y-2">
            <h2 className="font-bold text-2xl playFair">{book.bookName}</h2>
            <p className="font-medium text-base">
            By : <span>{book.author}</span>
            </p>

            <div className="divider my-0"></div>
                <p>{book.category}</p>

                <div className="divider my-0"></div>
                 
                <p className="font-bold">Review: <span className="font-normal text-[#131313B3] text-base">{book.review}</span></p>
            </div>

        <div className="flex work-sans flex-row items-center gap-2 my-3">
            <p className="font-bold">Tag: </p>
            {
            tag.map(t => <h3 key={t} className="bg-[#23BE0A0A] text-sm text-[#23BE0A] w-fit px-3 py-1 font-bold rounded-full">#{t}</h3>)
            }
        </div>
        <div className="divider my-0"></div>
            <div className="my-3 flex flex-col gap-y-2">
                <p className="text-[#131313B3]">Number of Pages: <span className="font-bold text-black">{book.totalPages}</span></p>
                <p className="text-[#131313B3]">Publisher: <span className="font-bold text-black">{book.publisher}</span></p>
                <p className="text-[#131313B3]">Year of Publishing: <span className="font-bold text-black">{book.yearOfPublishing}</span></p>
                <p className="text-[#131313B3]">Rating: <span className="font-bold text-black">{book.rating}</span></p>
            </div>
            <div className="flex gap-1 items-center">
                <button onClick={() => handleRead(book)} className="btn btn-outline">Read</button>
                <button onClick={() => handleWishlist(book)} className="btn btn-accent text-white">Wishlist</button>
            </div>
        </div>
    </div>
    
  );
};

export default BookDetails;
