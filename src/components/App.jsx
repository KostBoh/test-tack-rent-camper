import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import CatalogPage from '../pages/CatalogPage/CatalogPage';
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage';
import MainLayout from 'layouts/MainLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
        </Route>
        <Route path="/404" element={<div>Error 404</div>} />
      </Routes>
    </>
  );
};

export default App;
