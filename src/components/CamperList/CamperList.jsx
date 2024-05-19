import React, { useState } from 'react';
import CamperCard from '../CamperCard/CamperCard';
import styles from './CamperList.module.css';

const CampersList = ({ adverts }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div className={styles.list}>
      {adverts.slice(0, visibleCount).map(advert => (
        <CamperCard key={advert._id} advert={advert} />
      ))}
      {visibleCount < adverts.length && (
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
