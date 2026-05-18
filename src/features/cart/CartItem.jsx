import React from 'react';

import { PRODUCT_IMAGES } from '../../shared/constants/productImages';

import styles from './Cart.module.scss';

const CartItem = ({ item }) => {
  return (
    <article className={styles.item}>
      <img
        src={PRODUCT_IMAGES[item.sku]}
        alt={item.title}
      />

      <div className={styles.details}>
        <h4>{item.title}</h4>

        <p>
          Qty: {item.quantity}
        </p>

        <strong>
          ₹{item.price * item.quantity}
        </strong>
      </div>
    </article>
  );
};

export default CartItem;