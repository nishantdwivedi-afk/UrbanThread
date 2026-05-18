import React from 'react';

import styles from './Products.module.scss';

const ProductSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage} />

      <div className={styles.skeletonLine} />

      <div className={styles.skeletonSmallLine} />

      <div className={styles.skeletonButton} />
    </div>
  );
};

export default ProductSkeleton;