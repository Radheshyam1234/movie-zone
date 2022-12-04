import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { SingleMovieDetails } from "./Components/SingleMoviePage/SingleMovieDetails";
import { Homepage } from "./Components/HomePage/Homepage";
require("dotenv").config();

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/movie/:movieId" element={<SingleMovieDetails />} />
      </Routes>
    </div>
  );
}
