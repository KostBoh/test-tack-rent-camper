import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/catalog">
            <li>Catalog</li>
          </a>
          <a href="/favorites">
            <li>Favorites</li>
          </a>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
};

export default App;
