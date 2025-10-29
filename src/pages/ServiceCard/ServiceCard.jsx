import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ServiceCard.styles.js";

export default function ServiceCard({
  service,
  onToggleSaved,
  onAddToQuote,
  isSaved,
  isInQuote,
}) {
  const navigate = useNavigate();

  const handleCardClick = (e) => {
    // evita clicar em botão e acionar navegação
    if (e.target.tagName === "BUTTON") return;
    navigate(`/service/${service.id}`);
  };

  const handleViewDetails = (e) => {
    e.stopPropagation();
    navigate(`/service/${service.id}`);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ServiceImage src={service.image} alt={service.name} />
        {service.popular && <S.PopularBadge>⭐ Popular</S.PopularBadge>}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>{service.category}</S.CategoryBadge>
        <S.ServiceName>{service.name}</S.ServiceName>
        <S.ServiceDescription>{service.description}</S.ServiceDescription>

        <S.ServiceInfo>
          <S.Price>R$ {service.price}</S.Price>
          <S.Duration>⏱️ {service.duration}</S.Duration>
        </S.ServiceInfo>

        <S.ActionButtons>
          <S.PrimaryButton onClick={handleViewDetails}>
            Ver Detalhes
          </S.PrimaryButton>

          <S.IconButton
            saved={isSaved}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSaved(service.id);
            }}
            title={isSaved ? "Remover dos salvos" : "Salvar serviço"}
          >
            {isSaved ? "❤️" : "🤍"}
          </S.IconButton>

          <S.IconButton
            inQuote={isInQuote}
            onClick={(e) => {
              e.stopPropagation();
              onAddToQuote(service.id);
            }}
            title={isInQuote ? "Já no orçamento" : "Adicionar ao orçamento"}
          >
            {isInQuote ? "✅" : "💰"}
          </S.IconButton>
        </S.ActionButtons>
      </S.CardContent>
    </S.CardContainer>
  );
}
