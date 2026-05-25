import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FiltersSidebar from '../../features/filters/FiltersSidebar';
import ProductGrid from '../../features/products/ProductGrid';
import { fetchProducts } from '../../features/products/productSlice';
import CartSidebar from '../../features/cart/CartSidebar';

import ProductSkeleton from '../../features/products/ProductSkeleton';
import EmptyProducts from '../../features/products/EmptyProducts';

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
          <div className={styles.skeletonGrid}>
            {Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
          </div>
        )}

        {error && (
          <p>{error}</p>
        )}

        {!loading && !error && !!products.length && (
          <ProductGrid products={products} />
        )}

        {!loading && !error && !products.length && (
        <EmptyProducts />
        )}
        
      </main>

     <aside className={styles.cart}>
       <CartSidebar />
     </aside>
    </div>
  );
};

export default ProductListingPage;