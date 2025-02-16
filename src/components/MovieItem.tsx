import { Link } from 'react-router-dom';
import { useFavorites } from "../hooks/useFavorites";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const MovieItem: React.FC<{ movie: Movie }> = ({ movie }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-item">
      <Link to={`/details/${movie.imdbID}`}>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
          alt={movie.Title}
          className="movie-item__poster"
        />
        <p className="movie-item__title">{movie.Title} ({movie.Year})</p>
      </Link>

      <button
        className={`movie-item__fav-btn ${isFavorite ? "remove" : "add"}`}
        onClick={() => isFavorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie)}
      >
        {isFavorite ? "Удалить" : "Добавить"}
      </button>
    </div>
  );
};

export default MovieItem;
