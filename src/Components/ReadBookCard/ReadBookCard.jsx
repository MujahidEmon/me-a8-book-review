import { HiMiniUsers } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReadBookCard = ({ book }) => {
  const {
    image,
    author,
    bookName,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    id,
  } = book;
  return (
    <div className="flex lg:flex-row gap-10 justify-between border-2 rounded-xl mb-4 lg:h-[250px] h-fit  flex-col p-5 lg:p-7 lg:mx-0 mx-5 md:p-3">
      <figure className=" bg-[#F3F3F3] w-full lg:w-1/5 lg:p-12 p-5 rounded-xl flex items-center justify-center">
        <img src={image} alt={bookName} className="" />
      </figure>
      <div className="lg:w-4/5 w-full ">
        <div className=" flex flex-col gap-y-2">
          <h2 className="font-bold text-2xl playFair">{bookName}</h2>
          <p className="font-medium text-base">
            By : <span>{author}</span>
          </p>
        </div>
        <div className="flex work-sans text-sm lg:text-base flex-row items-center gap-2 my-3">
          <p className="font-bold lg:flex hidden">Tag: </p>
          <div className="text-[#131313B3] flex gap-1 items-center">
            <SlCalender></SlCalender>
            <p>Year of Publishing: {yearOfPublishing}</p>
          </div>
        </div>

        <div className="my-3 flex lg:flex-row flex-col gap-4">
          <div className="text-[#131313B3] flex gap-1 items-center">
            <HiMiniUsers></HiMiniUsers>
            <p>Publisher: {publisher}</p>
          </div>
          <div className="text-[#131313B3] flex items-center gap-1">
            <RiPagesLine></RiPagesLine>
            <p>Pages: {totalPages}</p>
          </div>
        </div>
        <div className="divider my-0 w-full"></div>
        <div className="flex items-center lg:text-sm text-xs gap-2">
          <h3 className="bg-[#328eff26] text-xs lg:text-sm  text-[#328EFF] w-fit px-3 py-1 font-normal  rounded-full">
            Category: {category}
          </h3>
          <h3 className="bg-[#FFAC3326] text-xs lg:text-sm text-[#FFAC33] w-fit px-3 py-1 font-normal rounded-full">
            Rating: {rating}
          </h3>
          <Link
            to={`/book/${id}`}
            className="bg-[#23BE0A] text-xs lg:text-sm text-white w-fit px-3 py-1 font-medium rounded-full"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ReadBookCard.propTypes = {
  book: PropTypes.array,
};

export default ReadBookCard;
