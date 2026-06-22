const PRODUCTS_API_URL =
  process.env.PRODUCTS_API_URL || '/products.json';

const delay = ms =>
  new Promise(resolve => setTimeout(resolve, ms));

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
  await delay(1000);
  const response = await fetch(PRODUCTS_API_URL);

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  if (!Array.isArray(data.products)) {
    throw new Error('Products response is invalid');
  }

  return data.products.map(normalizeProduct);
};
