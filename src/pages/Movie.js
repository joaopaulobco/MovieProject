import "./Movie.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import estrela from "../images/estrela.png";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US`
      )
      .then((response) => {
        setMovie(response.data);
        
      })
      .catch((error) => console.log(error))
      .finally(()=>{
        setLoading(false);
      })
  }, []);

  return (
    <div className="movie">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="movie-img">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="poster"
            />
          </div>
          <div className="movie-data">
            <h2>{movie.title}</h2>
            <div className="genre">{movie.genres.map((genre) => {
                return <span>{genre.name}</span>;
              })}
            </div>
            <p>
              <img src={estrela} alt="estrela" />
              {movie.vote_average}
            </p>
            <p>
              <b>Release Date:</b> {movie.release_date}
            </p>
            <p>
              <b>Sinopse:</b> {movie.overview}
            </p>
            <p>
              <b>Runtime:</b> {movie.runtime} minutes.
            </p>
            
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
