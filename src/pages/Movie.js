import "./Movie.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US`
      )

      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(movie);

  return (
    <div className="movie">
      <p>{movie.title}</p>
    </div>
  );
};

export default Movie;
