import React from 'react';
import {Search} from './Search';
import {Main} from './Main';




export const Navbar = () => {
    const [searches, setSearches] = React.useState("")
    const [checked, setChecked] = React.useState("");
    const [movies, setSearch] = Search()
    
    const handleSubmit = (e) => {
        e.preventDefault();

        setSearch(searches)
        setSearches("")
    }

   

    const handleInput = (e) => {
        
        setSearches(e.target.value);
        if(e.target.value !== "") {
            setChecked(false)
        }
    }
    
    return (
    <div>
        <div className="Nav_Bar">
            <ul className="ListItems">
                <li>
                    Home
                </li>
                <li>
                    TV shows
                </li>
                <li>
                    Movies
                </li>
                <li>
                    Search
                </li>
            </ul>
        </div>
            <div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <input className="search-field" type="text" value={searches} onChange={handleInput}/>
                    <button className="btn-search">Search</button>
                </form>
            </div>
            <Main movies={movies !== null ? movies : ""} checked={checked} setChecked={setChecked}/>
        </div>
    )
}


