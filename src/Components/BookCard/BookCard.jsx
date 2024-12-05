import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

const BookCard = ({book}) => {
    const { id, bookName,author, image, rating, category} = book;
    const tag = book.tags;
  return (
    <Link to={`/${id}`} className="card  p-5 border-2 w-96 shadow-xl">
      <figure className=" bg-[#F3F3F3] w-[326px] mx-auto rounded-xl p-5">
        <img
          src={image}
          alt={bookName}
          className=" h-[166px] w-[134px]"
        />
      </figure>
      <div className="flex work-sans flex-row items-center gap-2 mt-3">
        {
            tag.map(t => <h3 key={t} className="bg-[#23BE0A0A] text-sm text-[#23BE0A] w-fit px-3 py-1 font-bold rounded-full">{t}</h3>)
        }
      </div>
      <div className=" flex flex-col gap-y-2">
        <h2 className="font-bold text-2xl playFair">{bookName}</h2>
        <p className="font-medium text-base">By : <span>{author}</span></p>
        <div className="divider my-0"></div>
        <div className="flex flex-row justify-between font-medium text-base">
            <p>{category}</p>
            <div className="flex items-center flex-row gap-1">
                <p>{rating}</p>
                <CiStar></CiStar>
            </div>
        </div>
      </div>
    </Link>
  );
};

BookCard.propTypes = {
  book: PropTypes.array
}
export default BookCard;
