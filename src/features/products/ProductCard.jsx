import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from '../cart/cartSlice';

import { PRODUCT_IMAGES } from '../../shared/constants/productImages';

import styles from './Products.module.scss';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className={styles.card}>
      {product.isFreeShipping && (
        <span className={styles.badge}>
          Free Shipping
        </span>
      )}

      <div className={styles.imageBox}>
        <img
         src={PRODUCT_IMAGES[product.sku] || '/assets/products/placeholder.jpg'}
          alt={product.title}
        />
      </div>

      <h3>{product.title}</h3>

      <div className={styles.meta}>
        <strong>
          {product.currencyFormat}{product.price}
        </strong>

        <span>
          {product.sizes.join(', ')}
        </span>
      </div>

      <button
        className={styles.addButton}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </article>
  );
};

export default ProductCard;