import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  if (movies === null) {
    return;
  }
  return (
    <div className="">
      <h1 className=" font-semibold m-4 text-white">{title}</h1>
      <div className=" flex overflow-x-scroll ">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
