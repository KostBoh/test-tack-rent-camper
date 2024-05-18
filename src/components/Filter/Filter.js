import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <div className={styles.filter}>
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
