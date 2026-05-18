import { configureStore } from '@reduxjs/toolkit';

import productsReducer from '../features/products/productSlice';
import filtersReducer from '../features/filters/filtersSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer
  }
});