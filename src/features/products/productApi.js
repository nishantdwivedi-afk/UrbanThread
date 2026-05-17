export const getProducts = async () => {
  return [
    {
      sku: 'sku-001',
      title: 'Urban Black Tee',
      price: 499,
      sizes: ['S', 'M', 'L', 'XL'],
      isFreeShipping: true
    },
    {
      sku: 'sku-002',
      title: 'Oversized White Tee',
      price: 699,
      sizes: ['M', 'L', 'XL', 'XXL'],
      isFreeShipping: true
    },
    {
      sku: 'sku-003',
      title: 'Street Grey T-Shirt',
      price: 399,
      sizes: ['XS', 'S', 'M'],
      isFreeShipping: false
    },
    {
      sku: 'sku-004',
      title: 'Minimal Beige Tee',
      price: 599,
      sizes: ['ML', 'L', 'XL'],
      isFreeShipping: true
    }
  ];
};