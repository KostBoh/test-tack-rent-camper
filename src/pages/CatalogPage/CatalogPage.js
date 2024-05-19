import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersSlice';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.css';
import CampersList from 'components/CamperList/CamperList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const campers = useSelector(state => state.campers.items);
  const loading = useSelector(state => state.campers.loading);
  const error = useSelector(state => state.campers.error);

  const [filteredCampers, setFilteredCampers] = useState(campers);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCampers(campers);
  }, [campers]);

  const handleFilter = filters => {
    let filtered = campers;

    if (filters.location) {
      filtered = filtered.filter(
        camper => camper.location === filters.location
      );
    }
    if (filters.airConditioner) {
      filtered = filtered.filter(camper => camper.details.airConditioner);
    }
    if (filters.automatic) {
      filtered = filtered.filter(camper => camper.transmission === 'automatic');
    }
    if (filters.kitchen) {
      filtered = filtered.filter(camper => camper.details.kitchen);
    }
    if (filters.TV) {
      filtered = filtered.filter(camper => camper.details.TV);
    }
    if (filters.shower) {
      filtered = filtered.filter(camper => camper.details.shower);
    }
    if (filters.vehicleType.length > 0) {
      filtered = filtered.filter(camper =>
        filters.vehicleType.includes(camper.form)
      );
    }

    setFilteredCampers(filtered);
  };

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.catalog}>
      <div className={styles.filterContainer}>
        <Filter onFilter={handleFilter} />
      </div>
      <div className={styles.camperCardsContainer}>
        <CampersList adverts={filteredCampers} />
      </div>
    </div>
  );
};

export default CatalogPage;
