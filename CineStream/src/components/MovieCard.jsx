import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.imdbID); // OMDb uses imdbID, not id

    function onFavoriteClick(e) {
        e.preventDefault();
        favorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
    }

    // Corrected OMDb API poster handling
    const posterUrl = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/500x750?text=No+Image";

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.Title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.Title}</h3>
                <p>{movie.Year || "Unknown"}</p>
            </div>
        </div>
    );
}

export default MovieCard;
