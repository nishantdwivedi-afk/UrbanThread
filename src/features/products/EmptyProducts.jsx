import React from 'react';

import styles from './Products.module.scss';

const EmptyProducts = () => {
  return (
    <div className={styles.emptyProducts}>
      <h2>No Products Found</h2>

      <p>
        Try changing filters or sorting.
      </p>
    </div>
  );
};

export default EmptyProducts;