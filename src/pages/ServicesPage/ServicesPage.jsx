import React, { useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard.jsx";
import * as S from "./ServicesPage.styles.js";

export default function ServicesPage({
  services,
  onToggleSaved,
  onAddToQuote,
  savedServices,
  quote,
}) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = ["Todos", ...new Set(services.map((s) => s.category))];

  const filteredServices =
    selectedCategory === "Todos"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <S.PageContainer>
      <S.Container>
        <S.PageHeader>
          <S.PageTitle>Nossos Serviços</S.PageTitle>
          <S.PageSubtitle>
            Serviços automotivos completos com qualidade garantida e preços justos
          </S.PageSubtitle>
        </S.PageHeader>

        <S.FilterSection>
          {categories.map((category) => (
            <S.FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </S.FilterButton>
          ))}
        </S.FilterSection>

        {filteredServices.length > 0 ? (
          <S.ServicesGrid>
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onToggleSaved={onToggleSaved}
                onAddToQuote={onAddToQuote}
                isSaved={savedServices.includes(service.id)}
                isInQuote={quote.includes(service.id)}
              />
            ))}
          </S.ServicesGrid>
        ) : (
          <S.NoServices>
            <h3>Nenhum serviço encontrado</h3>
            <p>Tente selecionar uma categoria diferente.</p>
          </S.NoServices>
        )}
      </S.Container>
    </S.PageContainer>
  );
}
