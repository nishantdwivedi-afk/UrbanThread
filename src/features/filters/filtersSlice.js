import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSizes: [],
  sortBy: ''
};

const filtersSlice = createSlice({
  name: 'filters',

  initialState,

  reducers: {
    toggleSizeFilter: (state, action) => {
      const size = action.payload;

      const exists = state.selectedSizes.includes(size);

      if (exists) {
        state.selectedSizes = state.selectedSizes.filter(
          item => item !== size
        );
      } else {
        state.selectedSizes.push(size);
      }
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    }
  }
});

export const {
  toggleSizeFilter,
  setSortBy
} = filtersSlice.actions;

export default filtersSlice.reducer;
