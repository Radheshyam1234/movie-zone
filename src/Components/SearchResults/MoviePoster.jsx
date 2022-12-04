import { Link } from "react-router-dom";

export const MoviePoster = ({ movie }) => {
  return (
    <div className="poster-wrapper">
      <div className="movie-title">{movie.Title.substr(0, 16)}</div>
      <Link to={`/movie/${movie.imdbID}`}>
        <div>
          <img src={movie.Poster} alt={movie.imdbID} />
        </div>
      </Link>
    </div>
  );
};
