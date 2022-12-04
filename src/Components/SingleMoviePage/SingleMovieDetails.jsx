import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../../utilities/request";
import "./SingleMovieDetails.css";

export const SingleMovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await getMovieDetail(movieId);
      if (data) setMovieData(data);
    }
    fetchData();
  }, [movieId]);

  return (
    <div className="movie-container">
      {movieData ? (
        <div className="movie-details-wrapper">
          <div className="movie-poster">
            <img src={movieData.Poster} alt={movieData.imdbID} />
          </div>
          <div>
            <h3 className="movie-title">{movieData.Title}</h3>
          </div>
          <div className="movie-data">
            <span>{movieData.Runtime}</span>
            <span>{movieData.Year}</span>
            <span>{movieData.Genre}</span>
          </div>
          <div>
            <hr className="horizontal-line" />
            <p>
              {" "}
              Directed by <b>{movieData.Director}</b>
            </p>
            <p>Actors : {movieData.Actors}</p>
            <hr className="horizontal-line" />
          </div>
          <div>IMDB Ratings : {movieData.imdbRating}/10</div>
          <hr className="horizontal-line" />
          <div className="movie-summary">{movieData.Plot}</div>
        </div>
      ) : (
        <center style={{ color: "white" }}>Fetching the details</center>
      )}
    </div>
  );
};
