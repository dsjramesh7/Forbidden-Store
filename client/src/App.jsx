import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login";
import AuthRegister from "./pages/auth/register";
import AdminViewLayout from "./components/admin-view/layout";
import AdminDashboardPage from "./pages/admin-view/dashboard";
import AdminOrdersPage from "./pages/admin-view/orders";
import AdminProductsPage from "./pages/admin-view/products";
import AdminFeaturesPage from "./pages/admin-view/features";
import ShoppingHeader from "./components/shopping-view/header";
import NotFoundPage from "./pages/not-found";

const App = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      {/* common component */}
      <h1>Header components</h1>
      <Routes>
        <Route exact path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminViewLayout />}>
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="orders" element={<AdminOrdersPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="features" element={<AdminFeaturesPage />} />
        </Route>
        <Route path="/shop" element={<ShoppingHeader />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
