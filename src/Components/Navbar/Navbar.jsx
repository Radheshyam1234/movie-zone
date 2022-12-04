import "./Navbar.css";
import { SearchBar } from "./Searchbar";

export const Navbar = () => {
  return (
    <div className="topnav">
      <h3>Movie Block</h3>
      <SearchBar />
    </div>
  );
};
