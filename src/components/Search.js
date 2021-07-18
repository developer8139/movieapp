import React from 'react';
import axios from 'axios';
import key from '../ApiKeys/key'


export const Search = () => {
    const [search, setSearch] = React.useState("")
    const [movies, setMovies] = React.useState(null)
    const [error, setError] = React.useState("")
    
    React.useEffect(() => {
        async function getMovies() {
            try {
                let response = await axios.get(`http://www.omdbapi.com/?apikey=${key}=${search}`);
                setMovies(response.data)
            } catch(error) {
                setError("Sorry can't finish your search")
            }
        }
        
        
        getMovies()
    }, [search, error])

    

    return [movies, setSearch] 
}