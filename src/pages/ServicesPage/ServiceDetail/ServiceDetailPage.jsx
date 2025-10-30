import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./ServiceDetail.styles.js";

// ícones react-icons
import { FaWhatsapp, FaCheck, FaStar, FaArrowLeft } from "react-icons/fa";

export default function ServiceDetailPage({ services }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === Number(id));

  if (!service) {
    return (
      <S.PageContainer>
        <S.Container>
          <S.BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft /> Voltar
          </S.BackButton>
          <h2>Serviço não encontrado 😕</h2>
          <p>O serviço que você procurou não existe ou foi removido.</p>
        </S.Container>
      </S.PageContainer>
    );
  }

  const phoneNumber = "5516997957314"; // número da East em formato internacional
  const message = `Olá East, vim do site, gostaria de fazer um orçamento para ${service.name}`;
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <S.PageContainer>
      <S.Container>
        <S.BackButton onClick={() => navigate(-1)}>
          <FaArrowLeft /> Voltar
        </S.BackButton>

        <S.ServiceContent>
          <S.ImageSection>
            <S.ServiceImage src={service.image} alt={service.name} />
            {service.popular && (
              <S.PopularBadge>
                <FaStar /> Popular
              </S.PopularBadge>
            )}
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
                    <S.FeatureIcon>
                      <FaCheck />
                    </S.FeatureIcon>
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
                <FaWhatsapp /> Solicitar orçamento no WhatsApp
              </S.PrimaryButton>
            </S.ActionButtons>
          </S.InfoSection>
        </S.ServiceContent>
      </S.Container>
    </S.PageContainer>
  );
}
