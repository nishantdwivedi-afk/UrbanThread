import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import SortFilter from './SortFilter';
import { setSortBy } from './filtersSlice';
import { SORT_OPTIONS } from '../../shared/constants/sorting';

const mockDispatch = vi.fn();

vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: selector =>
    selector({
      filters: {
        sortBy: ''
      }
    })
}));

describe('SortFilter', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it('should render sort dropdown', () => {
    render(<SortFilter />);

    expect(screen.getByText('Sort By')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('should dispatch low to high sort action', () => {
    render(<SortFilter />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: SORT_OPTIONS.LOW_TO_HIGH }
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      setSortBy(SORT_OPTIONS.LOW_TO_HIGH)
    );
  });

  it('should dispatch high to low sort action', () => {
    render(<SortFilter />);

    fireEvent.change(screen.getByRole('combobox'), {
      target: { value: SORT_OPTIONS.HIGH_TO_LOW }
    });

    expect(mockDispatch).toHaveBeenCalledWith(
      setSortBy(SORT_OPTIONS.HIGH_TO_LOW)
    );
  });
});