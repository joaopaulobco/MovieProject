import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {
    const [ movies, setMovies ] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/now_playing?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US')
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((error) => window.alert('Error! Movies not found!'));
    }, []);

    return (
        <div className='title-movies'>
            <h2>Movies - NOW PLAYING:</h2>
            <div className='home'>
            {movies.map((movie) => {
                return (
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                    <div className="nowplaying-movies">
                         <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='poster'/>
                        <h4>{movie.title}</h4>
                    </div>
                        </Link>
                )
            })}
            </div>
        </div>
    )
}
export default Home;  