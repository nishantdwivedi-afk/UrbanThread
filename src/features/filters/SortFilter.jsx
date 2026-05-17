import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setSortBy
} from './filtersSlice';

import {
  selectSortBy
} from './filtersSelector';

import { SORT_OPTIONS } from '../../shared/constants/sorting';

import styles from './Filters.module.scss';

const SortFilter = () => {
  const dispatch = useDispatch();

  const sortBy = useSelector(selectSortBy);

  return (
    <div>
      <h3 className={styles.title}>Sort By</h3>

      <select
        value={sortBy}
        className={styles.select}
        onChange={event =>
          dispatch(setSortBy(event.target.value))
        }
      >
        <option value="">
          Select
        </option>

        <option value={SORT_OPTIONS.LOW_TO_HIGH}>
          Price: Low to High
        </option>

        <option value={SORT_OPTIONS.HIGH_TO_LOW}>
          Price: High to Low
        </option>
      </select>
    </div>
  );
};

export default SortFilter;