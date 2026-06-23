const PRODUCTS_ENDPOINT =
  'https://mocki.io/v1/a35717b0-a49c-46b1-b5c9-772628770efc';
const MOCK_PRODUCTS_ENDPOINT = '/mock/products.json';

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

const fetchProductsFrom = async endpoint => {
  const response = await fetch(endpoint);
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

export const getProducts = async () => {
  await delay(1000);

  try {
    return await fetchProductsFrom(PRODUCTS_ENDPOINT);
  } catch {
    return fetchProductsFrom(MOCK_PRODUCTS_ENDPOINT);
  }
};
