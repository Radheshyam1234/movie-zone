import { useState, useEffect, useCallback } from "react";
import { getMovieResults, getPageWiseResults } from "../../utilities/request";
import { useMoviesProvider } from "../../Context/MoviesProvider/MoviesProvider";
import { usePagedDataProvider } from "../../Context/PageProvider/PagedDataProvider";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { moviesDispatch } = useMoviesProvider();
  const {
    pageState: { currentPage, cachedPageResults },
    pageDispatch
  } = usePagedDataProvider();

  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  function debounceFun(searchHandler, delay) {
    let timerId;
    return function () {
      let self = this;
      let args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        searchHandler.apply(self, args);
      }, delay);
    };
  }

  const optSearchHandler = useCallback(debounceFun(searchHandler, 500), []);

  useEffect(() => {
    async function fetchData() {
      const key = `${searchTerm}&page=${currentPage}`;
      if (!cachedPageResults[key]) {
        const { SearchResults, totalResults } = await getMovieResults(
          searchTerm,
          currentPage
        );
        if (SearchResults && totalResults) {
          cachedPageResults[key] = cachedPageResults[key] = {
            movies: SearchResults,
            totalResults
          };
          moviesDispatch({ type: "SET_MOVIES", payload: SearchResults });
          moviesDispatch({ type: "SET_TOTAL_RESULTS", payload: totalResults });
        }
      } else {
        moviesDispatch({
          type: "SET_MOVIES",
          payload: cachedPageResults[key].movies
        });
        moviesDispatch({
          type: "SET_TOTAL_RESULTS",
          payload: cachedPageResults[key].totalResults
        });
      }
    }
    if (!searchTerm) {
      moviesDispatch({ type: "SET_TOTAL_RESULTS", payload: 0 });
      pageDispatch({ type: "RESET_PAGE_NUM" });
    }
    if (searchTerm) {
      fetchData();
    } else moviesDispatch({ type: "SET_MOVIES", payload: [] });
  }, [searchTerm, currentPage]);

  return (
    <div className="search-container">
      <input type="text" placeholder="Search.." onChange={optSearchHandler} />
    </div>
  );
};
