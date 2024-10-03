import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({ cartItemsCount }) => (
  <nav className="bg-blue-600 p-4 text-white">
    <ul className="flex space-x-4 justify-between items-center">
      <li >
        <Link to="/" className="flex space-x-2 items-center">
        <FaCartShopping aria-label="ECom Store Cart Icon" />
        <span className="font-bold">ECom Store</span>
        </Link>
        
      </li>
      <li className="flex items-center space-x-4">
        <Link to="/" className="text-lg hover:text-gray-200">
          Home
        </Link>
        <Link
          to="/cart"
          className="p-1 border-2 rounded-md bg-yellow-300 border-transparent text-black hover:bg-yellow-400"
        >
          Cart ({cartItemsCount})
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
