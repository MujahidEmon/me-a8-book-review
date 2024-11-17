const Hero = () => {
  return (
    <div className="hero rounded-3xl  bg-[#1313130D] mt-8 min-h-fit">
      <div className="flex-col flex lg:gap-28 py-8  lg:flex-row items-center justify-around">
        <div>
          <h1 className="text-[56px] playFair font-bold">Books to freshen up <br />your bookshelf</h1>
          
          <button className="btn bg-[#23BE0A] text-xl text-white mt-3">View The List</button>
        </div>
        <img
          src="/src/assets/heroBook.png"
          className="max-w-sm rounded-lg "
        />
      </div>
    </div>
  );
};

export default Hero;
