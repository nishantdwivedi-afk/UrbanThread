import { createSelector } from '@reduxjs/toolkit';
import { getFilteredProducts } from '../../shared/utils/productUtils';

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
    return getFilteredProducts(products, selectedSizes, sortBy);
  }
);