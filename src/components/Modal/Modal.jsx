import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ camper, onClose }) => {
  const [activeTab, setActiveTab] = useState('features');

  const handleTabChange = tab => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className={styles.modalBackdrop} onClick={onClose} />
      <div className={styles.modal}>
        <button onClick={onClose}>x</button>
        <h2>{camper.name}</h2>
        <div className={styles.tabs}>
          <button onClick={() => handleTabChange('features')}>Features</button>
          <button onClick={() => handleTabChange('reviews')}>Reviews</button>
        </div>
        {activeTab === 'features' && (
          <div>
            <h3>Features</h3>
            <p>{camper.description}</p>
            {/* Add more features here */}
          </div>
        )}
        {activeTab === 'reviews' && (
          <div>
            <h3>Reviews</h3>
            {camper.reviews.map((review, index) => (
              <div key={index}>
                <h4>{review.reviewer_name}</h4>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        )}
        <form>
          {/* Add form fields here */}
          <button type="submit">Book your campervan now</button>
        </form>
      </div>
    </>
  );
};

export default Modal;
