import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productApi';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  return getProducts();
});

const initialState = {
  items: [],
  loading: false,
  error: null
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchProducts.rejected, state => {
        state.loading = false;
        state.error = 'Failed to load products';
      });
  }
});

export default productsSlice.reducer;
