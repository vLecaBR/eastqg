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
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage("favoriteProducts", []);
  const [cart, setCart] = useLocalStorage("cart", []);

  // Handlers de produtos
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
        <Header/>
        <MainContent>
          <AppRoutes
            services={services}
            favoriteProducts={favoriteProducts}
            cart={cart}
            onToggleFavoriteProduct={handleToggleFavoriteProduct}
            onAddToCart={handleAddToCart}
          />
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}
