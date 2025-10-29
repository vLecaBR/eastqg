import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage.jsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.jsx";
import ServiceDetailPage from "../pages/ServicesPage/ServiceDetail/ServiceDetailPage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import ContactPage from "../pages/Contact/ContactPage.jsx";
import ProductsPage from "../pages/Products/Products.jsx";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails.jsx";

export default function AppRoutes({
  services,
  favoriteProducts,
  cart,
  onToggleFavoriteProduct,
  onAddToCart,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage services={services} />}
      />

      <Route
        path="/services"
        element={<ServicesPage services={services} />}
      />

      <Route
        path="/service/:id"
        element={<ServiceDetailPage services={services} />}
      />

      <Route
        path="/products"
        element={
          <ProductsPage
            favoriteProducts={favoriteProducts}
            cart={cart}
            onToggleFavorite={onToggleFavoriteProduct}
            onAddToCart={onAddToCart}
          />
        }
      />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
