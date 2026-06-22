import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        item => item.sku === product.sku
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          quantity: 1
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.sku !== action.payload
      );
    },

    subItemToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.sku === action.payload
      );

      if (existingItem && existingItem.quantity > 1) existingItem.quantity -= 1;
    },

    addItemToCart: (state, action) => {
      const existingItem = state.items.find(
        item => item.sku === action.payload
      );

      if (existingItem) existingItem.quantity += 1;
    }
  }
});

export const { addToCart, removeFromCart, subItemToCart, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;