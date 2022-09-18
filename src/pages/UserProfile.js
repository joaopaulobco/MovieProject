import './UserProfile.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


const UserProfile = () => {
    const [ movies, setMovies ] = useState([]);
    const [ pages, setPages] = useState();
    
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/popular?api_key=e9658f468ef45fbe4c5ab164e45527bf&language=en-US&page=3')
            .then((response) => {
                setMovies(response.data.results)
            })
            .catch((error) => console.log(error));
    }, []);

    return(
<div className='welcome'>
    <div>
    Bem vindo, úsuario
    </div>
    <div className='container'>
        {movies.map((movie)=>{
            return(
                <div>
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='poster'/>
                
                </div>

            ) 

            
        })}
    </div>
    
</div>
    )
}

export default UserProfile;