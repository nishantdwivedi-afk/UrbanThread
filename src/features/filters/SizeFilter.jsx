import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SIZES } from '../../shared/constants/sizes';

import {
  selectSelectedSizes
} from './filtersSelector';

import {
  toggleSizeFilter
} from './filtersSlice';

import styles from './Filters.module.scss';

const SizeFilter = () => {
  const dispatch = useDispatch();

  const selectedSizes = useSelector(selectSelectedSizes);

  return (
    <div>
      <h3 className={styles.title}>Sizes</h3>

      <div className={styles.sizes}>
        {SIZES.map(size => {
          const active = selectedSizes.includes(size);

          return (
            <button
              key={size}  // optimisation helps react track elem efficiently
              className={`${styles.sizeButton} ${
                active ? styles.active : ''
              }`}
              onClick={() =>
                dispatch(toggleSizeFilter(size))
              }
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;