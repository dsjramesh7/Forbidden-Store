import React from "react";

const ShoppingHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome to Our Shop
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example product cards */}
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4" />
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Product {i + 1}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                Short product description goes here.
              </p>
              <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingHome;
