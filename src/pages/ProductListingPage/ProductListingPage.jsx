import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FiltersSidebar from '../../features/filters/FiltersSidebar';

import ProductGrid from '../../features/products/ProductGrid';

import { fetchProducts } from '../../features/products/productSlice';

import {
  selectFilteredProducts,
  selectProductsError,
  selectProductsLoading
} from '../../features/products/productSelectors';

import styles from './ProductListingPage.module.scss';

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectFilteredProducts);

  const loading = useSelector(selectProductsLoading);

  const error = useSelector(selectProductsError);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.page}>
      <aside className={styles.filters}>
        <FiltersSidebar />
      </aside>

      <main className={styles.content}>
        <div className={styles.heading}>
          <h2>Explore T-Shirts</h2>

          <span>
            {products.length} Products
          </span>
        </div>

        {loading && (
          <p>Loading products...</p>
        )}

        {error && (
          <p>{error}</p>
        )}

        {!loading && !error && (
          <ProductGrid products={products} />
        )}
      </main>

      <aside className={styles.cart}>
        <h2>Cart</h2>

        <p>Your cart is empty.</p>
      </aside>
    </div>
  );
};

export default ProductListingPage;