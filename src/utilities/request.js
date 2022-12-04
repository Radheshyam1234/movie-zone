import axios from "axios";
import { BASE_URL, API_KEY } from "./API_URL";

export const getMovieResults = async (searchTerm, currentPage) => {
  try {
    const {
      data: { Search, totalResults }
    } = await axios.get(
      `${BASE_URL}/?s=${searchTerm}&apikey=${API_KEY}&page=${currentPage}`
    );

    return Search
      ? { SearchResults: Search, totalResults }
      : { SearchResults: [], totalResults: 0 };
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetail = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/?i=${movieId}&apikey=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
