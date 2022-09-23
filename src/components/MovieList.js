import { Link } from "react-router-dom";
import "./MovieList.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { getId } from "../Utils/Login.utils";

const MovieList = (props) => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const userId = getId();

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://ironrest.herokuapp.com/movieprojectusers/${userId}`)
        .then((response) => {
          setFavoriteMovies(response.data.movies);
        })
        .catch((error) => window.alert("Error!"));
    }
  }, [userId]);

  const isFavorite = (id) => {
    const favoriteMovie = favoriteMovies.find((favorite)=> {
      return favorite.id === id
    })
    return favoriteMovie ? true : false;
  }

  const addMovie = (movie) => {
    let movieAlreadyExist = false;
    for (let i = 0; i < favoriteMovies.length; i++) {
      if (movie.id === favoriteMovies[i].id) {
        movieAlreadyExist = true;
        break;
      }
    }

    if (movieAlreadyExist) return;

    const moviesCopy = [...favoriteMovies, movie];

    axios
      .put(`https://ironrest.herokuapp.com/movieprojectusers/${userId}`, {
        movies: moviesCopy,
      })
      .then((response) => {
        setFavoriteMovies(moviesCopy);
      })
      .catch((error) => window.alert("Error!"));
  };

  return (
    <div className="title-movies">
      <div className="home">
        {props.movies.map((movie) => {
          return (
            <div className="nowplaying-movies" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt="poster"
                />
                <h4>{movie.title}</h4>
              </Link>
              {!isFavorite(movie.id) && (
                <button className="btn-add" onClick={() => addMovie(movie)}>
                Add
              </button>
              ) }
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
