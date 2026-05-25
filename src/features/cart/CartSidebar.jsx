import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from './CartItem';

import EmptyCart from './EmptyCart';

import {
  selectCartItems,
  selectCartItemsCount,
  selectCartSubtotal
} from './cartSelectors';

import styles from './Cart.module.scss';

const CartSidebar = () => {
  const items = useSelector(selectCartItems);

  const subtotal = useSelector(selectCartSubtotal);

  const totalItems = useSelector(selectCartItemsCount);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2>Cart</h2>

        <span>
          {totalItems} items
        </span>
      </div>

      {!items.length && <EmptyCart />}

      {!!items.length && (
        <>
          <div className={styles.items}>
            {items.map(item => (
              <CartItem
                key={item.sku}
                item={item}
              />
            ))}
          </div>
          
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span>Subtotal</span>
              
              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <button className={styles.checkoutButton}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSidebar;