import React from 'react';
import ProductList from '../Components/ProductList';

const ProductsPage = ({ addToCart, cartItems }) => (
  <div>
    <ProductList addToCart={addToCart} cartItems={cartItems} />
  </div>
);

export default ProductsPage;
