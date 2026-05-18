import React from 'react';

import styles from './Cart.module.scss';

const EmptyCart = () => {
  return (
    <div className={styles.empty}>
      <h3>Your cart is empty</h3>

      <p>
        Add some stylish t-shirts.
      </p>
    </div>
  );
};

export default EmptyCart;