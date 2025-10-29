import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/Home/HomePage.jsx';
import ServicesPage from './pages/ServicesPage/ServicesPage.jsx';
import ServiceDetailPage from './pages/ServiceDetail/ServiceDetailPage.jsx';
import SavedServicesPage from './pages/SavedServices/SavedServicesPage.jsx';
import QuotePage from './pages/Quote/QuotePage.jsx';
import AboutPage from './pages/About/AboutPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import ProductsPage from './pages/Products/Products.jsx';
import ProductDetails from './pages/Products/ProductDetails/ProductDetails.jsx';

import { services } from './data/servicesData.js';
import { useLocalStorage } from './hooks/useLocalStorage.js';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function App() {
  // Estados locais via localStorage
  const [savedServices, setSavedServices] = useLocalStorage('savedServices', []);
  const [quote, setQuote] = useLocalStorage('quote', []);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage('favoriteProducts', []);
  const [cart, setCart] = useLocalStorage('cart', []);

  // Handlers para serviços
  const handleToggleSaved = (serviceId) => {
    setSavedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleAddToQuote = (serviceId) => {
    setQuote(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleRemoveFromQuote = (serviceId) => {
    setQuote(prev => prev.filter(id => id !== serviceId));
  };

  // Handlers de produtos
  const handleToggleFavoriteProduct = (productId) => {
    setFavoriteProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleAddToCart = (productId) => {
    setCart(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
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
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  services={services}
                  onToggleSaved={handleToggleSaved}
                  onAddToQuote={handleAddToQuote}
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
                  onToggleSaved={handleToggleSaved}
                  onAddToQuote={handleAddToQuote}
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
                  onToggleSaved={handleToggleSaved}
                  onAddToQuote={handleAddToQuote}
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
                  onToggleFavorite={handleToggleFavoriteProduct}
                  onAddToCart={handleAddToCart}
                />
              }
            />

            <Route
              path="/product/:id"
              element={<ProductDetails />}
            />

            <Route
              path="/saved"
              element={
                <SavedServicesPage
                  services={services}
                  savedServices={savedServices}
                  quote={quote}
                  onToggleSaved={handleToggleSaved}
                  onAddToQuote={handleAddToQuote}
                />
              }
            />

            <Route
              path="/quote"
              element={
                <QuotePage
                  services={services}
                  quote={quote}
                  onRemoveFromQuote={handleRemoveFromQuote}
                />
              }
            />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}
