import Header from 'components/Header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default MainLayout;
