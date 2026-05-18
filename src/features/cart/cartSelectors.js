import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = state =>
  state.cart.items;

export const selectCartItemsCount = createSelector(
  [selectCartItems],

  items =>
    items.reduce(
      (total, item) => total + item.quantity,
      0
    )
);

export const selectCartSubtotal = createSelector(
  [selectCartItems],

  items =>
    items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    )
);