const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video absolute pt-[35%] md:pt-[20%] bg-gradient-to-r from-black text-white">
      <div className="md:m-4 md:p-4 ml-2">
        <h1 className=" md:text-3xl text-lg md:font-bold ">{title}</h1>
        <p className=" md:font-semibold md:w-1/3 hidden md:block ">
          {overview}
        </p>
      </div>
      <div className="md:m-4 md:p-4 ml-2">
        <button className=" text-xs md:text-xl bg-white text-black  md:px-4 px-2 md:py-2 py-1 rounded-lg hover:bg-opacity-75">
          Play Now
        </button>
        <button className=" text-xs md:text-xl bg-slate-700 text-white mx-1  md:px-4 px-2 md:py-2 py-1 rounded-lg">
          More Info !
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
