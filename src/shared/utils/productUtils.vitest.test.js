import { describe, expect, it } from 'vitest';

import { SORT_OPTIONS } from '../constants/sorting';
import { getFilteredProducts } from './productUtils';

const products = [
  { sku: '1', price: 30, sizes: ['M'] },
  { sku: '2', price: 10, sizes: ['S', 'L'] },
  { sku: '3', price: 20, sizes: ['M', 'XL'] }
];

describe('getFilteredProducts', () => {
  it('returns all products for empty filters without mutating the input', () => {
    const result = getFilteredProducts(products, [], '');

    expect(result).toEqual(products);
    expect(result).not.toBe(products);
  });

  it('filters products by any selected size', () => {
    const result = getFilteredProducts(products, ['S', 'XL'], '');

    expect(result.map(product => product.sku)).toEqual(['2', '3']);
  });

  it('sorts products from low to high', () => {
    const result = getFilteredProducts(
      products,
      [],
      SORT_OPTIONS.LOW_TO_HIGH
    );

    expect(result.map(product => product.price)).toEqual([10, 20, 30]);
    expect(products.map(product => product.price)).toEqual([30, 10, 20]);
  });

  it('sorts products from high to low', () => {
    const result = getFilteredProducts(
      products,
      [],
      SORT_OPTIONS.HIGH_TO_LOW
    );

    expect(result.map(product => product.price)).toEqual([30, 20, 10]);
  });
});
