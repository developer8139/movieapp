import xmark from '../images/x-mark.png'

export const MovieStats = ({movies, show}) => {
    return (
        <div className="portal movie-stats">
            <h1>Movie Stats</h1>
            <img onClick={() => show(false)} className="check2" src={xmark} alt="close"/>
            <span className="Year">Year: {movies.Year}</span>
            <span className="Rated">Rating: {movies.Rated}</span>
            <span className="Released">Released: {movies.Released}</span>
            <span className="Runtime">Runtime: {movies.Runtime}</span>
            <span className="Genre">Genre: {movies.Genre}</span>
        </div>
    )
}