import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CartSidebar from './CartSidebar';

vi.mock('./CartItem', () => ({
  default: ({ item }) => (
    <div data-testid="mockCartItem">
      {item.title}
    </div>
  )
}));

let mockCartState = {
  items: []
};

vi.mock('react-redux', () => ({
  useSelector: selector =>
    selector({
      cart: mockCartState
    })
}));

describe('CartSidebar', () => {
  it('should render empty cart when no items are present', () => {
    mockCartState = {
      items: []
    };

    render(<CartSidebar />);

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('should render cart items when items are present', () => {
    mockCartState = {
      items: [
        {
          sku: '12064273040195392',
          title: 'Urban Black Tee',
          price: 20,
          quantity: 2
        }
      ]
    };

    render(<CartSidebar />);

    expect(screen.getByTestId('mockCartItem')).toBeInTheDocument();
    expect(screen.getByText('Urban Black Tee')).toBeInTheDocument();
  });

  it('should render total item count', () => {
    mockCartState = {
      items: [
        {
          sku: '1',
          title: 'Tee One',
          price: 10,
          quantity: 2
        },
        {
          sku: '2',
          title: 'Tee Two',
          price: 20,
          quantity: 1
        }
      ]
    };

    render(<CartSidebar />);

    expect(screen.getByText('3 items')).toBeInTheDocument();
  });

  it('should render subtotal', () => {
    mockCartState = {
      items: [
        {
          sku: '1',
          title: 'Tee One',
          price: 10,
          quantity: 2
        },
        {
          sku: '2',
          title: 'Tee Two',
          price: 20,
          quantity: 1
        }
      ]
    };

    render(<CartSidebar />);

    expect(screen.getByText('$40.00')).toBeInTheDocument();
  });

  it('should render checkout button when cart has items', () => {
    mockCartState = {
      items: [
        {
          sku: '1',
          title: 'Tee One',
          price: 10,
          quantity: 1
        }
      ]
    };

    render(<CartSidebar />);

    expect(screen.getByText('Checkout')).toBeInTheDocument();
  });
});