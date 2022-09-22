import { Link } from "react-router-dom";
import "./MovieList.css";
import { useContext } from "react";
import UserListContext from "../Utils/UserListContext";

const MovieList = (props) => {
  const { setUserList, userList } = useContext(UserListContext);
  const addMovie = (movie) => {
    let movieAlreadyExist = false;
    for (let i = 0; i < userList.length; i++) {
      if (movie.id === userList[i].id) {
        movieAlreadyExist = true;
        break;
      }
    }

    if (!movieAlreadyExist) {
      setUserList((e) => {
        return [...e, movie];
      });
    }
  };

  return (
    <div className="title-movies">
      <div className="home">
        {props.movies.map((movie) => {
          return (
            <div className="nowplaying-movies" key={movie.id}>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt="poster"
                />
                <h4>{movie.title}</h4>
              </Link>
              <button className="btn-add" onClick={() => addMovie(movie)}>
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
