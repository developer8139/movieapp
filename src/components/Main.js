import React from 'react'
import {Movie} from './Movie';

export const Main = ({movies, checked, setChecked}) => {
    const [liked, setLiked] = React.useState([]);
   
   
    const handleLikes = (e) => {
       if(e.target.value === "true") {
           setChecked(e.target.value)
           setLiked([...liked, movies.Title])
       } else {
           setChecked(e.target.value)
       }
    }

    return (
        <div>
            <Movie checked={checked} movies={movies} handleLikes={handleLikes} liked={liked}/>   
        </div>
    )
}