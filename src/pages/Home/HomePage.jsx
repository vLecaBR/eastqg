import React from 'react';
import ServiceCard from '../ServicesPage/ServiceCard/ServiceCard.jsx';
import * as S from './Home.styles.js';

export default function HomePage({ 
  services, 
  onViewDetails, 
  onToggleSaved, 
  onAddToQuote, 
  onNavigate, 
  savedServices, 
  quote 
}) {
  const featuredServices = services.filter(s => s.popular).slice(0, 3);

  return (
    <S.PageContainer>
      {/* Hero Section */}
      <S.HeroSection>
        <S.Container>
          <S.HeroTitle>East - Sua Oficina de Confiança</S.HeroTitle>
          <S.HeroSubtitle>
            Mais de 15 anos oferecendo serviços automotivos de qualidade. 
            Manutenção preventiva e corretiva com garantia e preços justos.
          </S.HeroSubtitle>
          <S.HeroButtons>
            <S.HeroButton primary onClick={() => onNavigate('services')}>Ver Todos os Serviços</S.HeroButton>
            <S.HeroButton onClick={() => onNavigate('quote')}>Solicitar Orçamento</S.HeroButton>
          </S.HeroButtons>
        </S.Container>
      </S.HeroSection>

      {/* Featured Services */}
      <S.Section>
        <S.Container>
          <S.SectionHeader>
            <S.SectionTitle>Serviços em Destaque</S.SectionTitle>
            <S.SectionSubtitle>Nossos serviços mais procurados com qualidade garantida</S.SectionSubtitle>
          </S.SectionHeader>

          <S.ServicesGrid>
            {featuredServices.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onViewDetails={onViewDetails}
                onToggleSaved={onToggleSaved}
                onAddToQuote={onAddToQuote}
                isSaved={savedServices.includes(service.id)}
                isInQuote={quote.includes(service.id)}
              />
            ))}
          </S.ServicesGrid>
        </S.Container>
      </S.Section>

      {/* Features Section */}
      <S.Section gray>
        <S.Container>
          <S.SectionHeader>
            <S.SectionTitle>Por que escolher a East?</S.SectionTitle>
            <S.SectionSubtitle>Qualidade, confiança e atendimento personalizado</S.SectionSubtitle>
          </S.SectionHeader>

          <S.FeaturesGrid>
            <S.FeatureCard>
              <S.FeatureIcon>🔧</S.FeatureIcon>
              <S.FeatureTitle>Profissionais Qualificados</S.FeatureTitle>
              <S.FeatureDescription>
                Mecânicos certificados com ampla experiência em diversas marcas de veículos
              </S.FeatureDescription>
            </S.FeatureCard>

            <S.FeatureCard>
              <S.FeatureIcon>⚡</S.FeatureIcon>
              <S.FeatureTitle>Equipamentos Modernos</S.FeatureTitle>
              <S.FeatureDescription>
                Tecnologia de ponta para diagnósticos precisos e reparos eficientes
              </S.FeatureDescription>
            </S.FeatureCard>

            <S.FeatureCard>
              <S.FeatureIcon>🛡️</S.FeatureIcon>
              <S.FeatureTitle>Garantia Estendida</S.FeatureTitle>
              <S.FeatureDescription>
                6 meses de garantia em todos os serviços e peças utilizadas
              </S.FeatureDescription>
            </S.FeatureCard>

            <S.FeatureCard>
              <S.FeatureIcon>💰</S.FeatureIcon>
              <S.FeatureTitle>Preços Justos</S.FeatureTitle>
              <S.FeatureDescription>
                Orçamentos transparentes sem surpresas ou custos ocultos
              </S.FeatureDescription>
            </S.FeatureCard>
          </S.FeaturesGrid>
        </S.Container>
      </S.Section>

      {/* Stats Section */}
      <S.StatsSection>
        <S.Container>
          <S.StatsGrid>
            <div>
              <S.StatNumber>5000+</S.StatNumber>
              <S.StatLabel>Clientes Atendidos</S.StatLabel>
            </div>
            <div>
              <S.StatNumber>15+</S.StatNumber>
              <S.StatLabel>Anos de Experiência</S.StatLabel>
            </div>
            <div>
              <S.StatNumber>98%</S.StatNumber>
              <S.StatLabel>Satisfação dos Clientes</S.StatLabel>
            </div>
            <div>
              <S.StatNumber>50+</S.StatNumber>
              <S.StatLabel>Serviços Oferecidos</S.StatLabel>
            </div>
          </S.StatsGrid>
        </S.Container>
      </S.StatsSection>
    </S.PageContainer>
  );
}
