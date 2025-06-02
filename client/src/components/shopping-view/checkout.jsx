import React from "react";

const ShoppingCheckout = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Shopping Checkout
      </h2>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium text-gray-700">Product Name</p>
            <p className="text-sm text-gray-500">Qty: 1</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">$49.99</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-medium text-gray-700">Another Product</p>
            <p className="text-sm text-gray-500">Qty: 2</p>
          </div>
          <p className="text-lg font-semibold text-gray-800">$89.98</p>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-200" />

      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold text-gray-800">Total</p>
        <p className="text-xl font-bold text-green-600">$139.97</p>
      </div>

      <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-300 font-semibold">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default ShoppingCheckout;
