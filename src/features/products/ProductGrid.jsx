import React from 'react';
import ProductCard from './ProductCard';
import styles from './Products.module.scss';

const ProductGrid = ({ products }) => {
  return (
    <section className={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </section>
  );
};

export default ProductGrid;