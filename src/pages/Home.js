import "./Home.css";
import popcorn from "../images/popcorn.gif";
import smile from "../images/smile.png"
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
          <h2>WELCOME TO YOUR MOVIE'S LIBRARY!</h2>
          <h4>
            Here you will find the release movies, what are now playing on the
            cinema and much more!
          </h4>
          <p>Do you wanna have your own favorites movies list?</p>
        <p>So, it's easy! Choose the movies below and click on the button to add or remove them to your list!</p>
          <h3>Have fun! <img className='smile' src={smile} alt="smile-icon" /></h3>
        </div>
        <div className="popcorn-gif">
          <img src={popcorn} alt="popcorn-gif" />
        </div>
      </div>
        <h3 className="top20">TOP 20 - NOW PLAYING MOVIES:</h3>
      <main>
        <MovieList movies={movies} />
      </main>
    </div>
  );
};
export default Home;
