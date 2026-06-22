import { afterEach, describe, expect, it, vi } from 'vitest';

import { getProducts } from './productApi';

describe('getProducts', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('loads and normalizes the local product catalog', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({
        products: [
          {
            id: 1,
            sku: 123,
            title: 'Black Tee',
            description: '',
            style: 'Classic',
            price: 20,
            currencyFormat: '$',
            installments: 2,
            availableSizes: ['M'],
            isFreeShipping: true
          }
        ]
      })
    });

    const productsPromise = getProducts();
    await vi.runAllTimersAsync();
    const products = await productsPromise;

    expect(fetchMock).toHaveBeenCalledWith('/mock/products.json');
    expect(products).toEqual([
      {
        id: 1,
        sku: '123',
        title: 'Black Tee',
        description: '',
        style: 'Classic',
        price: 20,
        currencyFormat: '$',
        installments: 2,
        sizes: ['M'],
        isFreeShipping: true
      }
    ]);
  });

  it('rejects an invalid response shape', async () => {
    vi.useFakeTimers();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({ data: [] })
    });

    const rejection = expect(getProducts()).rejects.toThrow(
      'Products response is invalid'
    );
    await vi.runAllTimersAsync();

    await rejection;
  });
});
