import React from 'react';
import styles from './CamperCard.module.css';

const CamperCard = ({ advert }) => {
  const {
    name,
    price,
    rating,
    location,
    adults,
    children,
    engine,
    transmission,
    form,
    description,
    gallery,
    details,
  } = advert;

  return (
    <div className={styles.card}>
      <img src={gallery[0]} alt={name} />
      <div className={styles.cardHeader}>
        <div className={styles.cardTitle}>{name}</div>
        <div className={styles.cardPrice}>€{price}.00</div>
      </div>
      <div className={styles.cardLocation}>{location}</div>
      <div className={styles.cardDescription}>{description}</div>
      <div className={styles.cardDetails}>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Adults:</span> {adults}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Children:</span> {children}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Engine:</span> {engine}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Transmission:</span>{' '}
          {transmission}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Rating:</span> {rating}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Form:</span> {form}
        </div>
        <div className={styles.cardDetail}>
          <span className={styles.detailLabel}>Details:</span>
          {Object.entries(details).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong>
              <span className={styles.detailContent}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CamperCard;

// import React from 'react';
// import styles from './CamperCard.module.css';

// const CamperCard = ({ advert }) => {
//   const {
//     name,
//     price,
//     rating,
//     location,
//     adults,
//     children,
//     engine,
//     transmission,
//     form,
//     description,
//     gallery,
//     details,
//   } = advert;

//   return (
//     <div className={styles.card}>
//       <img src={gallery[0]} alt={name} />
//       <div className={styles.cardHeader}>
//         <div className={styles.cardTitle}>{name}</div>
//         <div className={styles.cardPrice}>€{price}.00</div>
//       </div>
//       <div className={styles.cardLocation}>{location}</div>
//       <div className={styles.cardDescription}>{description}</div>
//       <div className={styles.cardDetails}>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Adults:</span> {adults}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Children:</span> {children}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Engine:</span> {engine}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Transmission:</span>{' '}
//           {transmission}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Rating:</span> {rating}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Form:</span> {form}
//         </div>
//         <div className={styles.cardDetail}>
//           <span className={styles.detailLabel}>Details:</span> {}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CamperCard;
