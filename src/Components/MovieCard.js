const MovieCard = ({ poster_path, original_title }) => {
  if (!poster_path) return;
  return (
    <div className=" flex-shrink-0  md:w-52 w-36 md:m-4 m-2">
      <img
        className=""
        src={"https://image.tmdb.org/t/p/w500/" + poster_path}
        alt={original_title}
      />
    </div>
  );
};

export default MovieCard;
