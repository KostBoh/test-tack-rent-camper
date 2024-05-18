import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Вітаємо в нашому сервісі оренди камперів!
      </h1>
      <p className={styles.description}>
        Ми надаємо високоякісні кампери для оренди в Україні. Наші кампери
        забезпечені всім необхідним для комфортного відпочинку. З нашими
        камперами ваш відпочинок стане незабутнім!
      </p>
    </div>
  );
};

export default HomePage;
