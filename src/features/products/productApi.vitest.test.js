import { afterEach, describe, expect, it, vi } from 'vitest';

import { getProducts } from './productApi';

const PRODUCTS_ENDPOINT =
  'https://mocki.io/v1/a35717b0-a49c-46b1-b5c9-772628770efc';
const MOCK_PRODUCTS_ENDPOINT = '/mock/products.json';

const productPayload = {
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
};

const normalizedProducts = [
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
];

describe('getProducts', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('loads and normalizes the remote product catalog', async () => {
    vi.useFakeTimers();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => productPayload
    });

    const productsPromise = getProducts();
    await vi.runAllTimersAsync();
    const products = await productsPromise;

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(PRODUCTS_ENDPOINT);
    expect(products).toEqual(normalizedProducts);
  });

  it('falls back to the local product catalog when the remote request fails', async () => {
    vi.useFakeTimers();
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockRejectedValueOnce(new Error('Network error'))
      .mockResolvedValueOnce({
        ok: true,
        json: async () => productPayload
      });

    const productsPromise = getProducts();
    await vi.runAllTimersAsync();
    const products = await productsPromise;

    expect(fetchMock).toHaveBeenNthCalledWith(1, PRODUCTS_ENDPOINT);
    expect(fetchMock).toHaveBeenNthCalledWith(2, MOCK_PRODUCTS_ENDPOINT);
    expect(products).toEqual(normalizedProducts);
  });

  it('falls back to the local product catalog when the remote response shape is invalid', async () => {
    vi.useFakeTimers();
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: [] })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => productPayload
      });

    const productsPromise = getProducts();
    await vi.runAllTimersAsync();
    const products = await productsPromise;

    expect(fetchMock).toHaveBeenNthCalledWith(1, PRODUCTS_ENDPOINT);
    expect(fetchMock).toHaveBeenNthCalledWith(2, MOCK_PRODUCTS_ENDPOINT);
    expect(products).toEqual(normalizedProducts);
  });

  it('rejects when the remote and fallback response shapes are invalid', async () => {
    vi.useFakeTimers();
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: [] })
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ data: [] })
      });

    const rejection = expect(getProducts()).rejects.toThrow(
      'Products response is invalid'
    );
    await vi.runAllTimersAsync();

    await rejection;
    expect(fetchMock).toHaveBeenNthCalledWith(1, PRODUCTS_ENDPOINT);
    expect(fetchMock).toHaveBeenNthCalledWith(2, MOCK_PRODUCTS_ENDPOINT);
  });
});
