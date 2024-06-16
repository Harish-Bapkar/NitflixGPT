import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const nowPlayingMovieList = useSelector((store) => store?.movies);
  const topRatedMovies = useSelector((store) => store?.movies.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies.upcomingMovies);

  // console.log(nowPlayingMovieList?.nowPlayingMovies);
  return (
    <div className=" bg-black">
      <div className=" md:-mt-56 z-10 relative">
        <MovieList
          movies={nowPlayingMovieList?.nowPlayingMovies}
          title="Now Playing"
        />
      </div>

      <MovieList movies={topRatedMovies} title="Top Rated" />
      <MovieList movies={upcomingMovies} title="Upcoming" />
    </div>
  );
};

export default SecondaryContainer;
