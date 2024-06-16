import Header from "./Header";
import useNowPlayingMovies from "../CustomHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../CustomHooks/useTopRatedMovies";
import useUpcomingMovies from "../CustomHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptView = useSelector((store) => store.gptView?.isGPTView);
  // console.log(gptView);
  const headrStyles = !gptView
    ? " absolute z-10 w-screen md:bg-"
    : "absolute z-10 w-screen ";
  return (
    <div>
      <div className={headrStyles}>
        <Header />
      </div>
      {!gptView ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
