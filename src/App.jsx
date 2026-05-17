import React from 'react';
import Header from './layout/Header';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage';
import styles from './App.module.scss';
import './styles/globals.scss';

const App = () => {
  return (
    <main className={styles.app}>
      <Header />
      <ProductListingPage />
    </main>
  );
};

export default App;