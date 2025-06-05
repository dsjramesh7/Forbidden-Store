import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-3">
          Thank You for Your Purchase!
        </h1>
        <p className="text-gray-700 mb-2">
          Your order has been successfully placed.
        </p>
        <p className="text-gray-600 mb-6">
          A confirmation email with the receipt and shipping details has been
          sent to your inbox.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/shop"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            Continue Shopping
          </a>
          <a
            href="/orders"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            View Order
          </a>
        </div>

        <div className="mt-6">
          <p className="text-sm text-gray-500">
            Need help?{" "}
            <a href="/support" className="underline text-blue-600">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
