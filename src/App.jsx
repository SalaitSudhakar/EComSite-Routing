import React, { useState } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductsPage from "./Pages/ProductsPage";
import CartPage from "./Pages/CartPage";
import Footer from "./Components/Footer";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartItemsCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={<ProductsPage addToCart={addToCart} cartItems={cartItems} />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
