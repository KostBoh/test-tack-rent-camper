import React from 'react';
import styles from './CamperCard.module.css';

const CamperCard = ({ advert }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    transmission,
    engine,
    description,
    gallery,
    details,
  } = advert;

  return (
    <div className={styles.card}>
      <img src={gallery[0]} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>{name}</div>
          <div className={styles.cardPrice}>€{price}.00</div>
        </div>
        <div className={styles.cardRatingLocation}>
          <div className={styles.cardRating}>Rating: {rating}</div>
          <div className={styles.cardLocation}>{location}</div>
        </div>
        <div className={styles.cardDescription}>{description}</div>
        <div className={styles.cardDetails}>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Adults:</span> {adults}
          </div>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Transmission:</span>{' '}
            {transmission}
          </div>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Engine:</span> {engine}
          </div>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Kitchen:</span>{' '}
            {details.kitchen ? 'Yes' : 'No'}
          </div>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Beds:</span> {details.beds}
          </div>
          <div className={styles.cardDetail}>
            <span className={styles.detailLabel}>Air Conditioner:</span>{' '}
            {details.airConditioner ? 'Yes' : 'No'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
