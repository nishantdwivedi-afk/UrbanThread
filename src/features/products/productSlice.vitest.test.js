import { describe, expect, it } from 'vitest';

import productsReducer, { fetchProducts } from './productSlice';

const products = [
  {
    sku: '1',
    title: 'Black Tee',
    price: 25
  }
];

describe('productSlice async states', () => {
  it('marks the request as loading when fetchProducts is pending', () => {
    const state = productsReducer(
      {
        items: products,
        loading: false,
        error: 'Previous error'
      },
      fetchProducts.pending('request-id')
    );

    expect(state).toEqual({
      items: products,
      loading: true,
      error: null
    });
  });

  it('stores products when fetchProducts is fulfilled', () => {
    const state = productsReducer(
      {
        items: [],
        loading: true,
        error: 'Previous error'
      },
      fetchProducts.fulfilled(products, 'request-id')
    );

    expect(state).toEqual({
      items: products,
      loading: false,
      error: null
    });
  });

  it('stores an error when fetchProducts is rejected', () => {
    const state = productsReducer(
      {
        items: [],
        loading: true,
        error: null
      },
      fetchProducts.rejected(new Error('Network error'), 'request-id')
    );

    expect(state).toEqual({
      items: [],
      loading: false,
      error: 'Failed to load products'
    });
  });
});
