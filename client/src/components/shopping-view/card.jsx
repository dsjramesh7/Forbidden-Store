import React from "react";

const ShoppingCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300.png?text=Product+Image"
        alt="Product"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Product Name</h2>
        <p className="text-gray-600 mt-2 text-sm">
          This is a short product description to show how the card looks with
          some content.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-green-600">$29.99</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
