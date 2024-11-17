import { CiStar } from "react-icons/ci";

const BookCard = () => {
  return (
    <div className="card  p-5 border-2 w-96 shadow-xl">
      <figure className=" bg-[#F3F3F3] w-[326px] mx-auto rounded-xl p-5">
        <img
          src="/src/assets/heroBook.png"
          alt="Shoes"
          className=" h-[166px] w-[134px]"
        />
      </figure>
      <div className="flex work-sans flex-row items-center gap-2 mt-3">
            <h3 className="bg-[#23BE0A0A] text-[#23BE0A] w-fit px-3 py-1 font-bold rounded-full text-base">Young Adult</h3>
            <h3 className="bg-[#23BE0A0A] text-[#23BE0A] w-fit px-3 py-1 font-bold rounded-full text-base">Identity</h3>
      </div>
      <div className=" flex flex-col gap-y-2">
        <h2 className="font-bold text-2xl playFair">The Catcher in the Rye</h2>
        <p className="font-medium text-base">By : <span>Awlad Hossain</span></p>
        <div className="divider my-0"></div>
        <div className="flex flex-row justify-between font-medium text-base">
            <p>Fiction</p>
            <div className="flex items-center flex-row gap-1">
                <p>5.00</p>
                <CiStar></CiStar>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
