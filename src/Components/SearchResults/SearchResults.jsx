import { useState, useEffect } from "react";
import { useMoviesProvider } from "../../Context/MoviesProvider/MoviesProvider";
import { usePagedDataProvider } from "../../Context/PageProvider/PagedDataProvider";
import { MoviePoster } from "./MoviePoster";

import "./SearchResults.css";

export const SearchResults = () => {
  const {
    moviesState: { moviesList, totalResults }
  } = useMoviesProvider();
  const {
    pageState: { currentPage },
    pageDispatch
  } = usePagedDataProvider();

  return (
    <>
      <div className="search-results">
        {moviesList?.map((movie, index) => (
          <MoviePoster movie={movie} key={index} />
        ))}
      </div>
      {moviesList.length === 0 && (
        <center style={{ color: "white" }}>
          <h3> Results will be shown here </h3>
        </center>
      )}
      {totalResults.length > 0 && (
        <div className="btn-container">
          <button
            disabled={currentPage !== 1 ? false : true}
            onClick={() => {
              pageDispatch({ type: "DECREASE_PAGE_NUM" });
            }}
          >
            {" "}
            Prev
          </button>
          <button className="active-btn">{currentPage}</button>
          <button
            disabled={
              currentPage !== Math.ceil(totalResults / 10) ? false : true
            }
            onClick={() => {
              pageDispatch({ type: "INCREASE_PAGE_NUM" });
            }}
          >
            Next{" "}
          </button>
        </div>
      )}
    </>
  );
};
