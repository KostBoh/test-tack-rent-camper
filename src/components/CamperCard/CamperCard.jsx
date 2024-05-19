import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/campersSlice';
import styles from './CamperCard.module.css';
import Modal from 'components/Modal/Modal';
import Review from 'components/Review/Review';

const CamperCard = ({ advert }) => {
  const {
    _id,
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

  const dispatch = useDispatch();
  const favorites = useSelector(state => state.campers.favorites);
  const isFavorite = favorites.includes(_id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(_id));
    } else {
      dispatch(addFavorite(_id));
    }
  };

  return (
    <div className={styles.card}>
      <img src={gallery[0]} alt={name} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>{name}</div>
          <div className={styles.cardPrice}>€{price}.00</div>
          <button
            onClick={handleFavoriteClick}
            className={styles.favoriteButton}
          >
            {isFavorite ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90842 3.5783 8.50915 2.9987 7.05012 2.9987C5.59108 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z"
                  fill="#E44848"
                  stroke="#E44848"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.8401 4.60999C20.3294 4.099 19.7229 3.69364 19.0555 3.41708C18.388 3.14052 17.6726 2.99817 16.9501 2.99817C16.2276 2.99817 15.5122 3.14052 14.8448 3.41708C14.1773 3.69364 13.5709 4.099 13.0601 4.60999L12.0001 5.66999L10.9401 4.60999C9.90842 3.5783 8.50915 2.9987 7.05012 2.9987C5.59108 2.9987 4.19181 3.5783 3.16012 4.60999C2.12843 5.64169 1.54883 7.04096 1.54883 8.49999C1.54883 9.95903 2.12843 11.3583 3.16012 12.39L4.22012 13.45L12.0001 21.23L19.7801 13.45L20.8401 12.39C21.3511 11.8792 21.7565 11.2728 22.033 10.6053C22.3096 9.93789 22.4519 9.22248 22.4519 8.49999C22.4519 7.77751 22.3096 7.0621 22.033 6.39464C21.7565 5.72718 21.3511 5.12075 20.8401 4.60999Z"
                  stroke="#101828"
                  stroke-width="2.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            )}
          </button>
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
        <button className={styles.moreButton} onClick={handleShowMore}>
          Show more
        </button>
        {isModalOpen && (
          <Modal camper={advert} onClose={handleCloseModal}>
            {advert.reviews.map(review => (
              <Review key={review.id} review={review} />
            ))}
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CamperCard;
