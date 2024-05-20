import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ camper, onClose }) => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleEsc = event => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const bookingDate = form.booking_date.value;

    if (name && email && bookingDate) {
      if (!validateEmail(email)) {
        alert('Invalid email address');
        return;
      }
      alert('Form submitted successfully');
      window.location.reload();
    } else {
      alert('Please fill out all required fields');
    }
  };

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <div className={styles.modalBackdrop} onClick={onClose} />
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeButton}>
          ×
        </button>
        <div className={styles.header}>
          <h2>{camper.name}</h2>
          <div className={styles.ratingLocation}>
            <span className={styles.rating}>
              ⭐ {camper.rating} ({camper.reviews.length} Reviews)
            </span>
            <span className={styles.location}>📍 {camper.location}</span>
          </div>
          <div className={styles.price}>€{camper.price.toFixed(2)}</div>
        </div>
        <div className={styles.imageContainer}>
          {camper.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Camper ${index}`}
              className={styles.image}
            />
          ))}
        </div>
        <div className={styles.description}>
          <p>{camper.description}</p>
        </div>
        <div className={styles.tabs}>
          <button
            className={activeTab === 'features' ? styles.activeTab : ''}
            onClick={() => handleTabChange('features')}
          >
            Features
          </button>
          <button
            className={activeTab === 'reviews' ? styles.activeTab : ''}
            onClick={() => handleTabChange('reviews')}
          >
            Reviews
          </button>
        </div>
        {activeTab === 'features' && (
          <div className={styles.tabContent}>
            <div className={styles.featuresContent}>
              <div className={styles.detailsList}>
                <h3>Features</h3>
                <ul>
                  {Object.keys(camper.details).map((key, index) => (
                    <li key={index}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
                      {camper.details[key]}
                    </li>
                  ))}
                </ul>
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Booking date:
                  <input type="date" name="booking_date" required />
                </label>
                <label>
                  Comment:
                  <textarea name="comment"></textarea>
                </label>
                <button type="submit" className={styles.sendButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className={styles.tabContent}>
            <div className={styles.reviewsContent}>
              <div className={styles.reviewsList}>
                <h3>Reviews</h3>
                {camper.reviews.map((review, index) => (
                  <div key={index} className={styles.review}>
                    <h4>{review.reviewer_name}</h4>
                    <p>Rating: {review.reviewer_rating}</p>
                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
                <label>
                  Booking date:
                  <input type="date" name="booking_date" required />
                </label>
                <label>
                  Comment:
                  <textarea name="comment"></textarea>
                </label>
                <button type="submit" className={styles.sendButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
