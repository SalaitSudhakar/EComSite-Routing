import React from "react";
import "./Cart.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const Cart = ({ cartItems, addToCart, removeFromCart, updateQuantity }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = total * 0.10;
  const finalPrice = total - discount;

  return (
    <div className="p-4 w-full md:w-5/6 mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b-2 py-2 flex-wrap space-y-3 gap-2 sm:gap-3 md:gap-4"
            >
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-16 h-16" />
                <div>
                  <h4 className="font-bold break-words text-sm sm:text-lg">{item.title}</h4>
                  <span className="text-sm sm:text-lg">${item.price}</span>
                </div>
              </div>

              <div className="flex space-x-4 border-2 bg-gray-50 p-1 rounded-md">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-3 h-3 sm:w-4 sm:h-4 my-auto"
                >
                  <FaMinus />
                </button>
                <input
                  type="number"
                  name="itemQuantity"
                  value={item.quantity}
                  className="p-1 w-7 text-sm sm:text-lg sm:w-8 flex text-center rounded-md"
                  readOnly
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-3 h-3 sm:w-4 sm:h-4 my-auto"
                >
                  <FaPlus />
                </button>
              </div>

              <div>
                <span className="font-bold text-sm sm:text-lg text-black">Subtotal: </span>
                <span className="text-sm sm:text-lg text-black bg-yellow-300 p-1 rounded-md border-0 font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm sm:text-lg"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="mt-4 flex justify-between items-center p-3 bg-slate-200 rounded-sm">
            <span className="text-xl sm:text-2xl font-bold">Total: </span>
            <span className="bg-blue-300 text-blue-900 p-1 border-0 rounded-md font-bold">
              ${total.toFixed(2)}
            </span>
          </div>

         
          {/* Discount */}
          <div className="mt-4 flex justify-between items-center p-3 bg-slate-200 rounded-sm">
            <span className="text-xl sm:text-2xl font-bold">Discount: </span>
            <span className="bg-red-300 text-red-900 p-1 border-0 rounded-md font-bold">
              - ${discount.toFixed(2)}
            </span>
          </div>

          <hr className="border-1 border-gray-500 my-4" />
          {/* Final Price */}
          <div className="mt-4 flex justify-between items-center p-3 bg-slate-200 rounded-sm">
            <span className="text-xl sm:text-2xl font-bold">Final Price: </span>
            <span className="bg-green-300 text-green-900 p-1 border-0 rounded-md font-bold">
              ${finalPrice.toFixed(2)}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
