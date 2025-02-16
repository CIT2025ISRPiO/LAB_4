import { useFavorites } from "../hooks/useFavorites";
import MovieItem from "../components/MovieItem";
import "../styles/FavoritesPage.css"

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Избранные фильмы</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="favorites-list__empty">Нет избранных фильмов</p>
      )}
    </div>
  );
};

export default FavoritesPage;
