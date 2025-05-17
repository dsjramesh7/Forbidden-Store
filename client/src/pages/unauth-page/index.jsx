import React from "react";

const UnAuthPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-semibold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-gray-700">
          You don&apos;t have permission to view this page.
        </p>
      </div>
    </div>
  );
};

export default UnAuthPage;
