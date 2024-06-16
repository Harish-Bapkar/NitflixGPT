import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispacth = useDispatch();
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    if (!json.results) return null;
    const filterData = json.results.filter((video) => {
      return video.type === "Trailer";
    });

    dispacth(addTrailerVideo(filterData[0]));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
