import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ addToCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
};

export default ProductList;
