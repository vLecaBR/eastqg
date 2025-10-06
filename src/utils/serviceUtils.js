// Utility functions for service operations

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};

export const calculateServiceTime = (duration) => {
  // Convert duration string to minutes for calculations
  const durationMap = {
    '30 minutes': 30,
    '45 minutes': 45,
    '1 hour': 60,
    '1.5 hours': 90,
    '2 hours': 120
  };
  
  return durationMap[duration] || 60;
};

export const filterServicesByCategory = (services, category) => {
  if (category === 'all' || !category) {
    return services;
  }
  return services.filter(service => service.category === category);
};

export const searchServices = (services, searchTerm) => {
  if (!searchTerm) {
    return services;
  }
  
  const term = searchTerm.toLowerCase();
  return services.filter(service => 
    service.name.toLowerCase().includes(term) ||
    service.description.toLowerCase().includes(term) ||
    service.category.toLowerCase().includes(term)
  );
};

export const sortServices = (services, sortBy) => {
  const sortedServices = [...services];
  
  switch (sortBy) {
    case 'name':
      return sortedServices.sort((a, b) => a.name.localeCompare(b.name));
    case 'price-low':
      return sortedServices.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sortedServices.sort((a, b) => b.price - a.price);
    case 'duration':
      return sortedServices.sort((a, b) => calculateServiceTime(a.duration) - calculateServiceTime(b.duration));
    case 'popular':
      return sortedServices.sort((a, b) => {
        if (a.popular && !b.popular) return -1;
        if (!a.popular && b.popular) return 1;
        return 0;
      });
    default:
      return sortedServices;
  }
};

export const getServiceCategories = (services) => {
  const categories = services.map(service => service.category);
  return ['all', ...new Set(categories)];
};

export const calculateQuoteTotal = (services, quoteIds, taxRate = 0.08) => {
  const quoteServices = services.filter(service => quoteIds.includes(service.id));
  const subtotal = quoteServices.reduce((sum, service) => sum + service.price, 0);
  const tax = subtotal * taxRate;
  const total = subtotal + tax;
  
  return {
    services: quoteServices,
    subtotal,
    tax,
    total,
    count: quoteServices.length
  };
};