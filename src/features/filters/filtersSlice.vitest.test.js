import { describe, expect, it } from 'vitest';

import filtersReducer, {
  setSortBy,
  toggleSizeFilter
} from './filtersSlice';
import { SORT_OPTIONS } from '../../shared/constants/sorting';

describe('filtersSlice reducer', () => {
  it('returns the initial state', () => {
    expect(filtersReducer(undefined, { type: 'unknown' })).toEqual({
      selectedSizes: [],
      sortBy: ''
    });
  });

  it('adds a size that is not selected', () => {
    const state = filtersReducer(undefined, toggleSizeFilter('M'));

    expect(state.selectedSizes).toEqual(['M']);
  });

  it('removes a size that is already selected', () => {
    const state = filtersReducer(
      { selectedSizes: ['M', 'XL'], sortBy: '' },
      toggleSizeFilter('M')
    );

    expect(state.selectedSizes).toEqual(['XL']);
  });

  it('sets the selected sort option', () => {
    const state = filtersReducer(
      undefined,
      setSortBy(SORT_OPTIONS.HIGH_TO_LOW)
    );

    expect(state.sortBy).toBe(SORT_OPTIONS.HIGH_TO_LOW);
  });
});
