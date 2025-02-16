import MovieItem from "./MovieItem";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieItem key={movie.imdbID} movie={movie} />
        ))
      ) : (
        <p className="movie-list__empty">Фильмы не найдены</p>
      )}
    </div>
  );
};

export default MovieList;
