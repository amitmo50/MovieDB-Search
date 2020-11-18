import React from 'react';
import './movieCard.css';
const MovieCard = ({movie, playMovieTrailer}) => {
    const viewMovie = () => {
        const url = 'https://www.themoviedb.org/movie/' + movie.id;
        window.location.href = url;
    }
    
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={movie.poster_path?"https://image.tmdb.org/t/p/w500/" + movie.poster_path:'./movie.png'} alt="Avatar"/>
                </div>
                <div className="flip-card-back">
                    <h2 className="movie-name">{movie.title}</h2> 
                    <p className="movie-ploat">{movie.overview}</p> 
                    <div className="control-container">
                        <input className="trailer-btn" type="button" onClick={() => playMovieTrailer(movie.id)} value="Trailer"/>
                        <input className="view-btn" type="button" onClick={viewMovie} value="View"/>
                    </div>
                </div>
            </div>
        </div>
 );
}

export default MovieCard;