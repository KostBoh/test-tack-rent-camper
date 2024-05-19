import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Filter.module.css';

const Filter = () => {
  const campers = useSelector(state => state.campers.items);
  const [selectedLocation, setSelectedLocation] = useState('');

  const locations = campers.map(camper => camper.location);
  const uniqueLocations = [...new Set(locations)];

  const handleLocationChange = e => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterSection}>
        <h3>Location</h3>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">Select Location</option>
          {uniqueLocations.map(location => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.filterSection}>
        <h3>Vehicle Equipment</h3>
        <label>
          <input type="checkbox" />
          Air Conditioner
        </label>
        <label>
          <input type="checkbox" />
          Automatic
        </label>
        <label>
          <input type="checkbox" />
          Kitchen
        </label>
        <label>
          <input type="checkbox" />
          TV
        </label>
        <label>
          <input type="checkbox" />
          Shower/WC
        </label>
      </div>
      <div className={styles.filterSection}>
        <h3>Vehicle Type</h3>
        <label>
          <input type="checkbox" />
          Van
        </label>
        <label>
          <input type="checkbox" />
          Fully Integrated
        </label>
        <label>
          <input type="checkbox" />
          Alcove
        </label>
      </div>
      <button className={styles.filterButton}>Search</button>
    </div>
  );
};

export default Filter;
