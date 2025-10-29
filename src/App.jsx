import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AppRoutes from "./routes/AppRoute.jsx";
import { services } from "./data/servicesData.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function App() {
  const [savedServices, setSavedServices] = useLocalStorage("savedServices", []);
  const [quote, setQuote] = useLocalStorage("quote", []);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage("favoriteProducts", []);
  const [cart, setCart] = useLocalStorage("cart", []);

  // Handlers
  const handleToggleSaved = (serviceId) => {
    setSavedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleAddToQuote = (serviceId) => {
    setQuote((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleRemoveFromQuote = (serviceId) => {
    setQuote((prev) => prev.filter((id) => id !== serviceId));
  };

  const handleToggleFavoriteProduct = (productId) => {
    setFavoriteProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId) => {
    setCart((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <Router>
      <AppContainer>
        <Header
          quoteCount={quote.length + cart.length}
          savedCount={savedServices.length + favoriteProducts.length}
        />
        <MainContent>
          <AppRoutes
            services={services}
            savedServices={savedServices}
            quote={quote}
            favoriteProducts={favoriteProducts}
            cart={cart}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            onRemoveFromQuote={handleRemoveFromQuote}
            onToggleFavoriteProduct={handleToggleFavoriteProduct}
            onAddToCart={handleAddToCart}
          />
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}
