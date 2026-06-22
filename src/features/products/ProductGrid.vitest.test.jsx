import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductGrid from './ProductGrid';

vi.mock('./ProductCard', () => ({
  default: ({ product }) => (
    <div data-testid="mockProductCard">
      {product.title}
    </div>
  )
}));

const mockProducts = [
  {
    id: 1,
    sku: '12064273040195392',
    title: 'Urban Black Tee'
  },
  {
    id: 2,
    sku: '51498472915966370',
    title: 'Dark Thug Blue-Navy T-Shirt'
  }
];


describe('Product Grid', () => {
  it('should render all Product Cards', () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getAllByTestId('mockProductCard')).toHaveLength(2);
  });

  it('should render product titles through product card', () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getByText('Urban Black Tee')).toBeInTheDocument();
    expect(screen.getByText('Dark Thug Blue-Navy T-Shirt')).toBeInTheDocument();

  });


});
