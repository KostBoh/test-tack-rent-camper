import React from 'react';
import styles from './Review.module.css';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <h3>{review.reviewer_name}</h3>
      <p>{review.date}</p>
      <p>{review.text}</p>
    </div>
  );
};

export default Review;
