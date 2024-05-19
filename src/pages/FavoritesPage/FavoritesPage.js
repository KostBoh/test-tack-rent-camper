import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CamperCard from '../../components/CamperCard/CamperCard';
import styles from './FavoritesPage.module.css';
import { setFavorites, fetchCampers } from '../../redux/campersSlice';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);
  const allCampers = useSelector(state => state.campers.items);
  const favoriteCampers = allCampers.filter(camper =>
    favorites.includes(camper._id)
  );

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    const favoritesFromStorage = JSON.parse(localStorage.getItem('favorites'));
    if (
      favoritesFromStorage &&
      favoritesFromStorage.length > 0 &&
      favorites.length === 0
    ) {
      dispatch(setFavorites(favoritesFromStorage));
    }
  }, [dispatch, favorites]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className={styles.favoritesPage}>
      <h1>Your Favorite Campers</h1>
      <div className={styles.cardsContainer}>
        {favoriteCampers.length > 0 ? (
          favoriteCampers.map(camper => (
            <CamperCard key={camper._id} advert={camper} />
          ))
        ) : (
          <div className={styles.loading}>You have no favorite campers.</div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
