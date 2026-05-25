import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import CartItem from './CartItem';
import { removeFromCart } from './cartSlice';

const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}));

const mockItem = {
  sku: '12064273040195392',
  title: 'Urban Black Tee',
  style: 'Black with custom print',
  price: 29.99,
  currencyFormat: '$',
  quantity: 2
};

describe('CartItem', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('should render cart item title', () => {
    render(<CartItem item={mockItem} />);

    expect(screen.getByText('Urban Black Tee')).toBeInTheDocument();
  });

  it('should render cart item style', () => {
    render(<CartItem item={mockItem} />);

    expect(screen.getByText('Black with custom print')).toBeInTheDocument();
  });

  it('should render cart item quantity', () => {
    render(<CartItem item={mockItem} />);

    expect(screen.getByText('Quantity : 2')).toBeInTheDocument();
  });

  it('should render cart item price', () => {
    render(<CartItem item={mockItem} />);

    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });

  it('should dispatch removeFromCart on remove click', () => {
    render(<CartItem item={mockItem} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockDispatch).toHaveBeenCalledWith(
      removeFromCart(mockItem.sku)
    );
  });
});