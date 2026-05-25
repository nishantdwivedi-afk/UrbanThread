import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import SizeFilter from './SizeFilter';
import { toggleSizeFilter } from './filtersSlice';

const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: selector =>
    selector({
      filters: {
        selectedSizes: ['M']
      }
    })
}));

describe('SizeFilter', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('should render size buttons', () => {
    render(<SizeFilter />);

    expect(screen.getByText('XS')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('XL')).toBeInTheDocument();
  });

  it('should dispatch toggle size action on size click', () => {
    render(<SizeFilter />);

    fireEvent.click(screen.getByText('XL'));

    expect(mockDispatch).toHaveBeenCalledWith(
      toggleSizeFilter('XL')
    );
  });

  it('should render selected size as active', () => {
    render(<SizeFilter />);

    expect(screen.getByText('M').className).toContain('active');
  });
});