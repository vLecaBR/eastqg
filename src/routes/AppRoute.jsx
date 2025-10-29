import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage.jsx";
import ServicesPage from "../pages/ServicesPage/ServicesPage.jsx";
import ServiceDetailPage from "../pages/ServicesPage/ServiceDetail/ServiceDetailPage.jsx";
import SavedServicesPage from "../pages/SavedServices/SavedServicesPage.jsx";
import QuotePage from "../pages/Quote/QuotePage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import ContactPage from "../pages/Contact/ContactPage.jsx";
import ProductsPage from "../pages/Products/Products.jsx";
import ProductDetails from "../pages/Products/ProductDetails/ProductDetails.jsx";

export default function AppRoutes({
  services,
  savedServices,
  quote,
  favoriteProducts,
  cart,
  onToggleSaved,
  onAddToQuote,
  onRemoveFromQuote,
  onToggleFavoriteProduct,
  onAddToCart,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            services={services}
            onToggleSaved={onToggleSaved}
            onAddToQuote={onAddToQuote}
            savedServices={savedServices}
            quote={quote}
          />
        }
      />

      <Route
        path="/services"
        element={
          <ServicesPage
            services={services}
            onToggleSaved={onToggleSaved}
            onAddToQuote={onAddToQuote}
            savedServices={savedServices}
            quote={quote}
          />
        }
      />

      <Route
        path="/service/:id"
        element={
          <ServiceDetailPage
            services={services}
            onToggleSaved={onToggleSaved}
            onAddToQuote={onAddToQuote}
            savedServices={savedServices}
            quote={quote}
          />
        }
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

      <Route
        path="/saved"
        element={
          <SavedServicesPage
            services={services}
            savedServices={savedServices}
            quote={quote}
            onToggleSaved={onToggleSaved}
            onAddToQuote={onAddToQuote}
          />
        }
      />

      <Route
        path="/quote"
        element={
          <QuotePage
            services={services}
            quote={quote}
            onRemoveFromQuote={onRemoveFromQuote}
          />
        }
      />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
