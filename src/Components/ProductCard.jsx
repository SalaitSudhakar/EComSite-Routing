import React from 'react';

const ProductCard = ({ product, addToCart, cartItems }) => {
  const inCart = cartItems.some(item => item.id === product.id);

  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:scale-105">
      <img src={product.image} alt={product.title} className="h-48 mx-auto" />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-sm mt-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className={`mt-4 w-full bg-${inCart ? 'red' : 'green'}-500 text-white py-2 rounded hover:bg-${inCart ? 'red': 'green'}-400`}
      >
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
