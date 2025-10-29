import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./ServiceCard.styles.js";

// ícones react-icons
import { FaStar, FaClock } from "react-icons/fa";

export default function ServiceCard({ service }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ServiceImage src={service.image} alt={service.name} />
        {service.popular && (
          <S.PopularBadge>
            <FaStar /> Popular
          </S.PopularBadge>
        )}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>{service.category}</S.CategoryBadge>
        <S.ServiceName>{service.name}</S.ServiceName>
        <S.ServiceDescription>{service.description}</S.ServiceDescription>

        <S.ServiceInfo>
          <S.Price>R$ {service.price}</S.Price>
          <S.Duration>
            <FaClock /> {service.duration}
          </S.Duration>
        </S.ServiceInfo>

        <S.ActionButtons>
          <S.PrimaryButton onClick={handleCardClick}>
            Ver Detalhes
          </S.PrimaryButton>
        </S.ActionButtons>
      </S.CardContent>
    </S.CardContainer>
  );
}
