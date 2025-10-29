import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./ServiceDetail.styles.js";

export default function ServiceDetailPage({ services }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // busca o serviço pelo ID da URL
  const service = services.find((s) => s.id === Number(id));

  // se não encontrar o serviço (id inválido)
  if (!service) {
    return (
      <S.PageContainer>
        <S.Container>
          <S.BackButton onClick={() => navigate(-1)}>← Voltar</S.BackButton>
          <h2>Serviço não encontrado 😕</h2>
          <p>O serviço que você procurou não existe ou foi removido.</p>
        </S.Container>
      </S.PageContainer>
    );
  }

  // mensagem e link do WhatsApp
  const phoneNumber = "5581999999999"; // <-- coloca aqui o número da East no formato internacional
  const message = `Olá East, vim do site, gostaria de fazer um orçamento para ${service.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <S.PageContainer>
      <S.Container>
        <S.BackButton onClick={() => navigate(-1)}>← Voltar</S.BackButton>

        <S.ServiceContent>
          <S.ImageSection>
            <S.ServiceImage src={service.image} alt={service.name} />
            {service.popular && <S.PopularBadge>⭐ Popular</S.PopularBadge>}
          </S.ImageSection>

          <S.InfoSection>
            <S.CategoryBadge>{service.category}</S.CategoryBadge>

            <S.ServiceTitle>{service.name}</S.ServiceTitle>

            <S.ServiceDescription>{service.description}</S.ServiceDescription>

            <S.ServiceInfo>
              <S.PriceInfo>
                <S.PriceLabel>Preço</S.PriceLabel>
                <S.Price>R$ {service.price}</S.Price>
              </S.PriceInfo>

              <S.DurationInfo>
                <S.DurationLabel>Duração</S.DurationLabel>
                <S.Duration>{service.duration}</S.Duration>
              </S.DurationInfo>
            </S.ServiceInfo>

            <S.FeaturesSection>
              <S.FeaturesTitle>O que está incluído:</S.FeaturesTitle>
              <S.FeaturesList>
                {service.features.map((feature, index) => (
                  <S.FeatureItem key={index}>
                    <S.FeatureIcon>✓</S.FeatureIcon>
                    <span>{feature}</span>
                  </S.FeatureItem>
                ))}
              </S.FeaturesList>
            </S.FeaturesSection>

            <S.ActionButtons>
              <S.PrimaryButton
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Solicitar orçamento no WhatsApp
              </S.PrimaryButton>
            </S.ActionButtons>
          </S.InfoSection>
        </S.ServiceContent>
      </S.Container>
    </S.PageContainer>
  );
}
