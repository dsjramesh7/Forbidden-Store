import React from "react";
const ShoppingHeader = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">ShopEasy</div>
      <nav className="flex gap-6">
        <button className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">
          Home
        </button>
        <button className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">
          Cart
        </button>
        <button className="text-gray-700 hover:text-blue-600 font-medium transition duration-200">
          Profile
        </button>
      </nav>
    </header>
  );
};

export default ShoppingHeader;
