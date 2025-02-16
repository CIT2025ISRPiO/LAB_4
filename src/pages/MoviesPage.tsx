import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import axios from "axios";
import "../styles/MoviesPage.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [year, setYear] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let url = `https://www.omdbapi.com/?s=${search}&apikey=154c628`;
        if (year) {
          url += `&y=${year}`;
        }
        const response = await axios.get(url);
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      }
    };

    fetchMovies();
  }, [search, year]);

  return (
    <div className="movie-app">
      <h2 className="movie-app__title">Поиск фильма</h2>
      <input
        type="text"
        placeholder="Поиск фильма..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="movie-app__search"
      />
      <input
        type="number"
        placeholder="Введите год..."
        value={year}
        onChange={(e) => setYear(e.target.value)}
        className="movie-app__filter"
      />
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
