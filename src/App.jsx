import React, { useState } from 'react';
import styled from 'styled-components';
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
import { services } from './data/services.js';
import { products } from './data/products.js';
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
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // localStorage states
  const [savedServices, setSavedServices] = useLocalStorage('savedServices', []);
  const [quote, setQuote] = useLocalStorage('quote', []);
  const [favoriteProducts, setFavoriteProducts] = useLocalStorage('favoriteProducts', []);
  const [cart, setCart] = useLocalStorage('cart', []);

  // Navegação
  const handleNavigate = (page) => {
    setCurrentPage(page);
    setSelectedServiceId(null);
  };

  // Serviços
  const handleViewDetails = (serviceId) => {
    setSelectedServiceId(serviceId);
    setCurrentPage('service');
  };

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

  // Produtos
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

  // Voltar
  const handleGoBack = () => {
    setCurrentPage('home');
    setSelectedServiceId(null);
  };

  // Serviço selecionado
  const selectedService = selectedServiceId
    ? services.find(s => s.id === selectedServiceId)
    : null;

  // Renderiza as páginas
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            services={services}
            onViewDetails={handleViewDetails}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            onNavigate={handleNavigate}
            savedServices={savedServices}
            quote={quote}
          />
        );

      case 'services':
        return (
          <ServicesPage
            services={services}
            onViewDetails={handleViewDetails}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            savedServices={savedServices}
            quote={quote}
          />
        );

      case 'service':
        if (!selectedService)
          return (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <h1>Serviço não encontrado</h1>
              <button
                onClick={handleGoBack}
                style={{ marginTop: '1rem', color: '#0d7377' }}
              >
                Voltar ao início
              </button>
            </div>
          );

        return (
          <ServiceDetailPage
            service={selectedService}
            onGoBack={handleGoBack}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            isSaved={savedServices.includes(selectedService.id)}
            isInQuote={quote.includes(selectedService.id)}
          />
        );

      case 'products':
        return (
          <ProductsPage
            products={products}
            favoriteProducts={favoriteProducts}
            cart={cart}
            onViewDetails={() => {}}
            onToggleFavorite={handleToggleFavoriteProduct}
            onAddToCart={handleAddToCart}
          />

        );

      case 'saved':
        return (
          <SavedServicesPage
            services={services}
            savedServices={savedServices}
            quote={quote}
            onViewDetails={handleViewDetails}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            onNavigate={handleNavigate}
          />
        );

      case 'quote':
        return (
          <QuotePage
            services={services}
            quote={quote}
            onViewDetails={handleViewDetails}
            onRemoveFromQuote={handleRemoveFromQuote}
            onNavigate={handleNavigate}
          />
        );

      case 'about':
        return <AboutPage />;

      case 'contact':
        return <ContactPage />;

      default:
        return (
          <HomePage
            services={services}
            onViewDetails={handleViewDetails}
            onToggleSaved={handleToggleSaved}
            onAddToQuote={handleAddToQuote}
            onNavigate={handleNavigate}
            savedServices={savedServices}
            quote={quote}
          />
        );
    }
  };

  return (
    <AppContainer>
      <Header
        onNavigate={handleNavigate}
        quoteCount={quote.length + cart.length}
        savedCount={savedServices.length + favoriteProducts.length}
        currentPage={currentPage}
      />
      <MainContent>{renderPage()}</MainContent>
      <Footer />
    </AppContainer>
  );
}
