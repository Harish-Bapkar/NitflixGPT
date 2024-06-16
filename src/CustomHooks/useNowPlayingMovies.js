import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useNowPlayingMovies = () => {
  const dispacth = useDispatch();
  const nowPlayingMovieList = useSelector(
    (store) => store?.movies.nowPlayingMovieList
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispacth(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovieList && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
