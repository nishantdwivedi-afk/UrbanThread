import { SORT_OPTIONS } from '../constants/sorting';

export const getFilteredProducts = (products, selectedSizes, sortBy) => {
    let filteredProducts = [...products];

    if (selectedSizes.length) {
      filteredProducts = filteredProducts.filter(product =>
        product.sizes.some(size =>
          selectedSizes.includes(size)
        )
      );
    }

    if (sortBy === SORT_OPTIONS.LOW_TO_HIGH) {
      filteredProducts.sort((a, b) => a.price - b.price);
    }

    if (sortBy === SORT_OPTIONS.HIGH_TO_LOW) {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts;
}



