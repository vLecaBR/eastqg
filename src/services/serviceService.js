// src/services/serviceService.js
import { services } from "../data/servicesData.js";

/**
 * Retorna todos os serviços
 */
export function getAllServices() {
  return services;
}

/**
 * Retorna um serviço específico pelo ID
 */
export function getServiceById(id) {
  return services.find((service) => service.id === Number(id)) || null;
}

/**
 * Retorna os serviços mais populares
 */
export function getPopularServices() {
  return services.filter((service) => service.popular);
}

/**
 * Retorna serviços filtrando por categoria
 */
export function getServicesByCategory(category) {
  return services.filter(
    (service) =>
      service.category.toLowerCase() === category.toLowerCase()
  );
}
