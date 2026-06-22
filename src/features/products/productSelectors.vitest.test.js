import { describe, expect, it } from 'vitest';

import { SORT_OPTIONS } from '../../shared/constants/sorting';
import {
  selectFilteredProducts,
  selectProducts,
  selectProductsError,
  selectProductsLoading
} from './productSelectors';

const state = {
  products: {
    items: [
      { sku: '1', price: 30, sizes: ['S'] },
      { sku: '2', price: 10, sizes: ['M'] },
      { sku: '3', price: 20, sizes: ['M', 'XL'] }
    ],
    loading: false,
    error: null
  },
  filters: {
    selectedSizes: ['M'],
    sortBy: SORT_OPTIONS.HIGH_TO_LOW
  }
};

describe('product selectors with mocked state', () => {
  it('selects the product request state', () => {
    expect(selectProducts(state)).toBe(state.products.items);
    expect(selectProductsLoading(state)).toBe(false);
    expect(selectProductsError(state)).toBeNull();
  });

  it('integrates size filtering and sorting', () => {
    const result = selectFilteredProducts(state);

    expect(result.map(product => product.sku)).toEqual(['3', '2']);
  });
});
