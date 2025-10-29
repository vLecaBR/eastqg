import React from 'react';
import * as S from './Saved.styles.js';
import ServiceCard from '../ServicesPage/ServiceCard/ServiceCard.jsx';

export default function SavedServicesPage({ 
  services, 
  savedServices, 
  quote, 
  onViewDetails, 
  onToggleSaved, 
  onAddToQuote, 
  onNavigate 
}) {
  const savedServicesList = services.filter(service => savedServices.includes(service.id));
  const totalValue = savedServicesList.reduce((sum, service) => sum + service.price, 0);
  const inQuoteCount = savedServicesList.filter(service => quote.includes(service.id)).length;

  if (savedServices.length === 0) {
    return (
      <S.PageContainer>
        <S.Container>
          <S.PageHeader>
            <S.PageTitle>Serviços Salvos</S.PageTitle>
            <S.PageSubtitle>
              Seus serviços favoritos ficam salvos aqui
            </S.PageSubtitle>
          </S.PageHeader>

          <S.EmptyState>
            <S.EmptyIcon>❤️</S.EmptyIcon>
            <S.EmptyTitle>Nenhum serviço salvo ainda</S.EmptyTitle>
            <S.EmptyDescription>
              Explore nossos serviços e salve seus favoritos para facilitar o acesso e comparação. 
              Você pode salvar quantos serviços quiser!
            </S.EmptyDescription>
            <S.ContinueButton onClick={() => onNavigate('services')}>
              Explorar Serviços
            </S.ContinueButton>
          </S.EmptyState>
        </S.Container>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.Container>
        <S.PageHeader>
          <S.PageTitle>Serviços Salvos</S.PageTitle>
          <S.PageSubtitle>
            Gerencie seus serviços favoritos e crie orçamentos personalizados
          </S.PageSubtitle>
        </S.PageHeader>

        <S.StatsSection>
          <S.StatItem>
            <S.StatNumber>{savedServices.length}</S.StatNumber>
            <S.StatLabel>Serviços Salvos</S.StatLabel>
          </S.StatItem>

          <S.StatItem>
            <S.StatNumber>R$ {totalValue}</S.StatNumber>
            <S.StatLabel>Valor Total</S.StatLabel>
          </S.StatItem>

          <S.StatItem>
            <S.StatNumber>{inQuoteCount}</S.StatNumber>
            <S.StatLabel>No Orçamento</S.StatLabel>
          </S.StatItem>

          <S.ActionButton onClick={() => onNavigate('quote')}>
            💰 Ver Orçamento ({quote.length})
          </S.ActionButton>
        </S.StatsSection>

        <S.ServicesGrid>
          {savedServicesList.map(service => (
            <ServiceCard
              key={service.id}
              service={service}
              onViewDetails={onViewDetails}
              onToggleSaved={onToggleSaved}
              onAddToQuote={onAddToQuote}
              isSaved={true}
              isInQuote={quote.includes(service.id)}
            />
          ))}
        </S.ServicesGrid>
      </S.Container>
    </S.PageContainer>
  );
}
