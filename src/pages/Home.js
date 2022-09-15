import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Home = () => {
    const [ movies, setMovies ] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US')
            .then((response) => {
                setMovies(response.data.results)
            })
    }, []);

    console.log(movies)
    
    let moviesData = movies.map((movie) => {
        return (
            <div key={movie.id} className="nowplaying-movies">
                <a href='http://localhost:3000/movie'><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='poster'/></a>
                <h4>{movie.title}</h4>
                <p>Release Date: {movie.release_date}</p>
                {/* <p>{movie.overview}</p> */}
            </div>
        )
    }); 

    return (
        <div className='title-nowplaying'>
            <h3>Movies - NOW PLAYING</h3>
            <div className='home'>
            {moviesData}
            </div>
        </div>
    )
}
export default Home; 