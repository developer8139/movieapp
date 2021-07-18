import Check from '../images/check.png';
import React from 'react'
import {Portal} from './Portal';
import { MovieStats } from './MovieStats';

export const Movie = ({checked, movies, handleLikes, liked}) => {
    const [show, setShow] = React.useState(false);
    return (
        <div>
            <h1 className="Title">{movies.Title}</h1>
            <div className="movie-stats">
                <span>Amount of Movies Liked: {liked.length}</span>
            </div>
            <img onClick={() => setShow(true)} className="image" src={movies.Poster} alt={movies.Title === undefined ? "No Movies" : "Movie Poster"}/>
            {checked === "true" ? <img className="check" src={Check} alt="check"/> : ""}
            {movies.Title || undefined ? 
            <div>
                <label>Like</label>
                <input type="radio" value="true" checked={checked === "true"} onChange={handleLikes}/>
            </div>: ""}
            
            {show ? 
                <Portal>
                    <MovieStats movies={movies} show={setShow}/>
                </Portal>
            : "" }
            
        </div>
    )
}