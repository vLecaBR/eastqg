import React from 'react';
import * as S from './ServiceDetail.styles.js';

export default function ServiceDetailPage({ 
  service, 
  onGoBack, 
  onToggleSaved, 
  onAddToQuote, 
  isSaved, 
  isInQuote 
}) {
  return (
    <S.PageContainer>
      <S.Container>
        <S.BackButton onClick={onGoBack}>
          ← Voltar
        </S.BackButton>

        <S.ServiceContent>
          <S.ImageSection>
            <S.ServiceImage 
              src={service.image} 
              alt={service.name}
            />
            {service.popular && (
              <S.PopularBadge>
                ⭐ Popular
              </S.PopularBadge>
            )}
          </S.ImageSection>

          <S.InfoSection>
            <S.CategoryBadge>
              {service.category}
            </S.CategoryBadge>

            <S.ServiceTitle>
              {service.name}
            </S.ServiceTitle>

            <S.ServiceDescription>
              {service.description}
            </S.ServiceDescription>

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
                onClick={() => onAddToQuote(service.id)}
                disabled={isInQuote}
              >
                {isInQuote ? 'Já no Orçamento ✓' : 'Adicionar ao Orçamento 💰'}
              </S.PrimaryButton>
              
              <S.SecondaryButton 
                saved={isSaved}
                inQuote={isInQuote}
                onClick={() => onToggleSaved(service.id)}
              >
                {isSaved ? '❤️ Salvo' : '🤍 Salvar'}
              </S.SecondaryButton>
            </S.ActionButtons>
          </S.InfoSection>
        </S.ServiceContent>
      </S.Container>
    </S.PageContainer>
  );
}
