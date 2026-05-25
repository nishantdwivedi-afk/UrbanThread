import React from 'react';
import { useDispatch } from 'react-redux';

import { PRODUCT_IMAGES } from '../../shared/constants/productImages';
import { removeFromCart } from './cartSlice';

import styles from './Cart.module.scss';
import { ImCross } from "react-icons/im";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <article className={styles.cartItem}>
      <img
        className={styles.cartImage}
        src={PRODUCT_IMAGES[item.sku] || '/assets/products/placeholder.jpg'}
        alt={item.title}
      />

      <div className={styles.cartInfo}>
        <h4>{item.title}</h4>

        {item.style && (
          <p>{item.style}</p>
        )}

        <span>
          Quantity : {item.quantity}
        </span>
      </div>

      <div className={styles.cartAction}>
        <button
          type="button"
          onClick={() => dispatch(removeFromCart(item.sku))}
          
        >
        <ImCross size={20} />
        </button>

        <strong>
          {item.currencyFormat}{item.price}
        </strong>
      </div>
    </article>
  );
};

export default CartItem;