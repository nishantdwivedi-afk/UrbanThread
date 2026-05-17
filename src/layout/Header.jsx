import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>UrbanThread</h1>
        <p>Premium streetwear t-shirts</p>
      </div>

      <button className={styles.cartButton}>
        Cart
      </button>
    </header>
  );
};

export default Header;