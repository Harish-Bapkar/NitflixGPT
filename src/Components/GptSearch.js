import GptMoviesSuggestion from "./GptMoviesSuggestion";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BACKGROUND } from "../Utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:w-screen"
          src={NETFLIX_BACKGROUND}
          alt="bg-img"
        />
      </div>
      <div className=" pt-[25%] md:p-0">
        <GptSearchBar />
        <GptMoviesSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
