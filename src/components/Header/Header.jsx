import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <ul className={styles.navList}>
      <li className={styles.navItem}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink to="/catalog" className={styles.navLink}>
          Catalog
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink to="/favorites" className={styles.navLink}>
          Favorites
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
