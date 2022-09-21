import { Link } from 'react-router-dom'
import "./MovieList.css"

const MovieList = (props) => {

    
    return (
        <div className='title-movies'>
            <div className='home'>
            {props.movies.map((movie) => {
                return (
                    <div className="nowplaying-movies">
                    <Link to={`/movie/${movie.id}`} key={movie.id}>
                         <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt='poster'/>
                        <h4>{movie.title}</h4>
                    </Link>
                        <button className='btn-add'>Add</button>
                        <button className='btn-remove'>Remove</button>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MovieList;