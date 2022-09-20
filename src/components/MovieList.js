import { Link } from 'react-router-dom'

const MovieList = (props) => {

    
    return (
        <div className='title-movies'>
            {/* <h2>Movies - NOW PLAYING:</h2> */}
            <div className='home'>
            {props.movies.map((movie) => {
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

export default MovieList;