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
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import UnAuthPage from "./pages/unauth-page";
// import { useSelector } from "react-redux";

const App = () => {
  // const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
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
        <Route path="/shop" element={<ShoppingHeader />}>
          <Route path="home" element={<ShoppingHome />} />
          <Route path="listing" element={<ShoppingListing />} />
          <Route path="account" element={<ShoppingAccount />} />
          <Route path="checkout" element={<ShoppingCheckout />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/unauth-page" element={<UnAuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
