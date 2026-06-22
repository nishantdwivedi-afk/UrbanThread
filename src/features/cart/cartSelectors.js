import { createSelector } from '@reduxjs/toolkit';
import { getCartItemsCount, getCartSubtotal } from '../../shared/utils/cartUtils';

export const selectCartItems = state =>
  state.cart.items;

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  getCartItemsCount
);

export const selectCartSubtotal = createSelector(
  [selectCartItems],
  getCartSubtotal
);

export const selectCartCurrencyFormat = createSelector(
  [selectCartItems],
  items => items[0]?.currencyFormat ?? ''
);
