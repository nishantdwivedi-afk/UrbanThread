import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer
  }
});