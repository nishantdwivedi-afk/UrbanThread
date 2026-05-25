import React from 'react';
import styles from './Header.module.scss';
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>UrbanThread</h1>
        <p>Premium streetwear t-shirts</p>
      </div>
       <FaShoppingCart size={32} style={{ marginRight: '10px' }}/> 
    </header>
  );
};

export default Header;