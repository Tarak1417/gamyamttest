import React from 'react';
import { ProductProvider } from './context/ProductsContext';
import ProductPage from './pages/ProductPage';


const App = () => {
  return (
    <ProductProvider>
      <ProductPage />
    </ProductProvider>
  );
};

export default App;
