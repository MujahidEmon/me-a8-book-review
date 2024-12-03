import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero rounded-3xl  bg-[#1313130D] mt-8 min-h-fit">
      <div className="flex flex-col lg:gap-28 gap-7 py-8  lg:flex-row items-center md:justify-around md:text-left text-center">
        <div>
          <h1 className="md:text-6xl text-3xl playFair font-bold">Books to freshen up <br />your bookshelf</h1>
          
          <Link to={'/BookList'} className="btn bg-[#23BE0A] md:text-xl text-normal text-white mt-3">View The List</Link>
        </div>
        <img
          src="/src/assets/heroBook.png"
          className="md:max-w-sm max-w-48 rounded-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
