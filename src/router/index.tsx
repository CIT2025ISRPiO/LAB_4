import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "../pages/MoviesPage";
import FavoritesPage from "../pages/FavoritesPage";
import MainLayout from "../layouts/MainLayout";
import MovieDetailPage from "../pages/MovieDetailPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MoviesPage />} />
          <Route path="/details/:id" element={<MovieDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
