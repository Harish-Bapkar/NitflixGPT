import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMoviesSuggestion = () => {
  const { movieName, movieResults } = useSelector((store) => store.gptView);
  // console.log(movieName);
  if (!movieName) return null;
  // console.log(movieName, movieResults);
  return (
    <div className="opacity-90">
      <div className=" text-white m-4 p-4 bg-black  ">
        {movieName.map((movieName, index) => {
          return (
            <MovieList
              key={movieName}
              movies={movieResults[index]}
              title={movieName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GptMoviesSuggestion;
