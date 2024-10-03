import React from 'react';
import Cart from '../Components/Cart';

const CartPage = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => (
  <div>
    <Cart
      cartItems={cartItems}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      updateQuantity={updateQuantity}
    />
  </div>
);

export default CartPage;
