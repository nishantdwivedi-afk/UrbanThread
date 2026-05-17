import { createSelector } from '@reduxjs/toolkit';
import { SORT_OPTIONS } from '../../shared/constants/sorting';

export const selectProducts = state => state.products.items;

export const selectProductsLoading = state =>
  state.products.loading;

export const selectProductsError = state =>
  state.products.error;

export const selectFilteredProducts = createSelector(
  [
    state => state.products.items,
    state => state.filters.selectedSizes,
    state => state.filters.sortBy
  ],

  (products, selectedSizes, sortBy) => {
    let filteredProducts = [...products];

    if (selectedSizes.length) {
      filteredProducts = filteredProducts.filter(product =>
        product.sizes.some(size =>
          selectedSizes.includes(size)
        )
      );
    }

    if (sortBy === SORT_OPTIONS.LOW_TO_HIGH) {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === SORT_OPTIONS.HIGH_TO_LOW) {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
  }
);