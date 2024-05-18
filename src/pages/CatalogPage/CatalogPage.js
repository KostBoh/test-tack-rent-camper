import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CamperCard from '../../components/CamperCard/CamperCard';
import { fetchCampers } from '../../redux/campersSlice';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const loading = useSelector(state => state.campers.loading);
  const error = useSelector(state => state.campers.error);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.filterContainer}>
        <Filter />
      </div>
      <div className={styles.camperCardsContainer}>
        {campers.map(advert => (
          <CamperCard key={advert._id} advert={advert} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
