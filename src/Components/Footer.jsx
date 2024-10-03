import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-black text-white p-4 bottom-0 ">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex items-center gap-2 p-2 mx-auto">
            <FaCartShopping aria-label="ECom Store Cart Icon" />
            <span className="font-bold">ECom Store</span>
          </Link>
        </div>

        <div className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <Link to="/" className="hover:underline">
            Ecom Store
          </Link>
          . All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
