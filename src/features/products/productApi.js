const PRODUCTS_API_URL =
  'https://mocki.io/v1/0fdb8e9e-df08-4b67-9ae0-3cb4eccd3bc8';

const normalizeProduct = product => ({
  id: product.id,
  sku: String(product.sku),
  title: product.title,
  description: product.description,
  style: product.style,
  price: product.price,
  currencyFormat: product.currencyFormat,
  installments: product.installments,
  sizes: product.availableSizes,
  isFreeShipping: product.isFreeShipping
});

export const getProducts = async () => {
  const response = await fetch(PRODUCTS_API_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();

  return data.products.map(normalizeProduct);
};