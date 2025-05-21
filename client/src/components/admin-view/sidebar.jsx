import React from "react";

const AdminSideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col shadow-lg">
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        Admin Panel
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <a
          href="#dashboard"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Dashboard
        </a>
        <a
          href="#users"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Users
        </a>
        <a
          href="#settings"
          className="block px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Settings
        </a>
        <a
          href="#logout"
          className="block px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </a>
      </nav>
    </aside>
  );
};

export default AdminSideBar;
