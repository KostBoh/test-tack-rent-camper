import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Filter.module.css';

const Filter = ({ onFilter }) => {
  const campers = useSelector(state => state.campers.items);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
  const [equipment, setEquipment] = useState({
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
  });

  const locations = campers.map(camper => camper.location);
  const uniqueLocations = [...new Set(locations)];

  const handleLocationChange = e => {
    setSelectedLocation(e.target.value);
  };

  const handleEquipmentChange = e => {
    const { name, checked } = e.target;
    setEquipment(prevState => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleVehicleTypeChange = e => {
    setSelectedVehicleTypes(e.target.value);
  };

  const handleSearch = () => {
    onFilter({
      location: selectedLocation,
      ...equipment,
      vehicleType: selectedVehicleTypes,
    });
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
          <input
            type="checkbox"
            name="airConditioner"
            checked={equipment.airConditioner}
            onChange={handleEquipmentChange}
          />
          Air Conditioner
        </label>
        <label>
          <input
            type="checkbox"
            name="automatic"
            checked={equipment.automatic}
            onChange={handleEquipmentChange}
          />
          Automatic
        </label>
        <label>
          <input
            type="checkbox"
            name="kitchen"
            checked={equipment.kitchen}
            onChange={handleEquipmentChange}
          />
          Kitchen
        </label>
        <label>
          <input
            type="checkbox"
            name="TV"
            checked={equipment.TV}
            onChange={handleEquipmentChange}
          />
          TV
        </label>
        <label>
          <input
            type="checkbox"
            name="shower"
            checked={equipment.shower}
            onChange={handleEquipmentChange}
          />
          Shower/WC
        </label>
      </div>
      <div className={styles.filterSection}>
        <h3>Vehicle Type</h3>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="van"
            checked={selectedVehicleTypes === 'van'}
            onChange={handleVehicleTypeChange}
          />
          Van
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="fullyIntegrated"
            checked={selectedVehicleTypes === 'fullyIntegrated'}
            onChange={handleVehicleTypeChange}
          />
          Fully Integrated
        </label>
        <label>
          <input
            type="radio"
            name="vehicleType"
            value="alcove"
            checked={selectedVehicleTypes === 'alcove'}
            onChange={handleVehicleTypeChange}
          />
          Alcove
        </label>
      </div>
      <button className={styles.filterButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
