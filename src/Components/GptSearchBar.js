import { useDispatch, useSelector } from "react-redux";
import langauges from "../Utils/langaugeConstants";
import { useRef } from "react";
import openAI from "../Utils/openAI";
import { API_OPTIONS } from "../Utils/constants";
import { addGptMovies } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const serachText = useRef(null);
  const langKey = useSelector((store) => store.langauge.lang);
  const dispatch = useDispatch();

  const searchTMDBMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleSearchClick = async () => {
    // console.log(serachText.current.value);

    const gptQuery =
      "act as movie recommendation system and suggest some movies for query:" +
      serachText.current.value +
      "just specify only 5 movie name list in array format example ['Jawan', 'Krish', 'Dhoom3',''kgf, 'James Bond']";

    const gptResult = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResult.choices[0]?.message.content
      .replace(/["[\]]/g, "")
      .split(",");
    // console.log("gpt res", gptMovies);
    const data = gptMovies.map((movie) => searchTMDBMovies(movie));
    const tmdbResults = await Promise.all(data);
    // console.log("tmdb res", tmdbResults);
    dispatch(addGptMovies({ movieName: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="flex justify-center">
      <form
        className=" bg-black md:w-1/2 w-screen flex  flex-row ...  md:mt-[15%] mt-[25%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="  md:p-4 md:m-4 flex-grow p-2 m-2"
          ref={serachText}
          type="text"
          placeholder={langauges[langKey].placeHolder}
        />
        <button
          className="h-fit m-3 md:m-6 px-4 py-0  bg-red-700 rounded-lg font-semibold text-white"
          onClick={handleSearchClick}
        >
          {langauges[langKey].serachText}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
