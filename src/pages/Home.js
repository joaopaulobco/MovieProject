import "./Home.css";
import popcorn from "../images/popcorn.gif";
import cinema from "../images/cinema.png";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US"
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => window.alert("Error! Movies not found!"));
  }, []);

  return (
    <div className="home-main">
      <div className="home-introduction">
        <img className="cine" src={cinema} alt="cine" />
        <div className="home-title">
          <h1>WELCOME TO YOUR MOVIE'S LIBRARY!</h1>
          <h3>
            Here you will find the release movies, what are now playing on the
            cinema and much more!
          </h3>
          <h3>Have fun!</h3>
        </div>
        <div className="popcorn-gif">
          <img src={popcorn} alt="popcorn-gif" />
        </div>
      </div>
      <main>
        <h3>TOP 20 - NOW PLAYING MOVIES:</h3>
        <MovieList movies={movies} />
      </main>
    </div>
  );
};
export default Home;
