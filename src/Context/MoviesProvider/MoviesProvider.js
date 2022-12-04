import { createContext, useReducer, useContext } from "react";
import { MoviesReducer } from "./MoviesReducer";

const moviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [moviesState, moviesDispatch] = useReducer(MoviesReducer, {
    moviesList: [],
    totalResults: 0
  });
  return (
    <moviesContext.Provider
      value={{
        moviesState,
        moviesDispatch
      }}
    >
      {children}
    </moviesContext.Provider>
  );
};

export const useMoviesProvider = () => useContext(moviesContext);
