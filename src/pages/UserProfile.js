import "./UserProfile.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/Pagination";
import MovieList from "../components/MovieList";

const UserProfile = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(2);
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US&page=${currentPage}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      })
      .catch((error) => console.log(error));
  }, [currentPage]);


  return (
    <div className="welcome">
      <div>
        <MovieList movies={movies} />
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default UserProfile;
