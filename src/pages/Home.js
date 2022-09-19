import './Home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import MovieList from '../components/MovieList';

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
        <MovieList movies={movies}/>
    )
}
export default Home;  