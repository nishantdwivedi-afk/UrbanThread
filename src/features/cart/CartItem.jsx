import React from 'react';
import { useDispatch } from 'react-redux';

import { PRODUCT_IMAGES } from '../../shared/constants/productImages';
import {
  addItemToCart,
  removeFromCart,
  subItemToCart
} from './cartSlice';

import styles from './Cart.module.scss';
import { ImCross } from 'react-icons/im';

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

        <div className={styles.quantUpdate}>
          <button
            type="button"
            aria-label={`Decrease quantity of ${item.title}`}
            disabled={item.quantity <= 1}
            onClick={() => dispatch(subItemToCart(item.sku))}
          >
            −
          </button>

          <span aria-live="polite">
            Quantity: {item.quantity}
          </span>

          <button
            type="button"
            aria-label={`Increase quantity of ${item.title}`}
            onClick={() => dispatch(addItemToCart(item.sku))}
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.cartAction}>
        <button
          type="button"
          aria-label={`Remove ${item.title} from cart`}
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
