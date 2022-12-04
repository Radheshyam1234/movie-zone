import { useReducer, createContext, useContext } from "react";
import { PagedReducer } from "./PagedReducer";

export const PageContext = createContext();

export const PagedDataProvider = ({ children }) => {
  const [pageState, pageDispatch] = useReducer(PagedReducer, {
    currentPage: 1,
    cachedPageResults: {}
  });

  return (
    <PageContext.Provider
      value={{
        pageState,
        pageDispatch
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export const usePagedDataProvider = () => useContext(PageContext);
