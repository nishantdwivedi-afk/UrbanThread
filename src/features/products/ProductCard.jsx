import React from 'react';
import { PRODUCT_IMAGES } from '../../shared/constants/productImages';
import styles from './Products.module.scss';

const ProductCard = ({ product }) => {
  return (
    <article className={styles.card}>
      {product.isFreeShipping && (
        <span className={styles.badge}>Free Shipping</span>
      )}

      <div className={styles.imageBox}>
        <img
          src={PRODUCT_IMAGES[product.sku]}
          alt={product.title}
        />
      </div>

      <h3>{product.title}</h3>

      <div className={styles.meta}>
        <strong>₹{product.price}</strong>
        <span>{product.sizes.join(', ')}</span>
      </div>

      <button className={styles.addButton}>
        Add to Cart
      </button>
    </article>
  );
};

export default ProductCard;