import React from 'react';
import {
  PageContainer, HeroSection, Container, HeroTitle, HeroSubtitle,
  Section, ContentGrid, ContentText, SectionTitle, SectionParagraph,
  ContentImage, StatsGrid, StatCard, StatNumber, StatLabel,
  ValuesList, ValueCard, ValueIcon, ValueTitle, ValueDescription,
  TeamSection, TeamGrid, TeamCard, TeamImage, TeamName, TeamRole, TeamDescription
} from './About.styles';

export default function AboutPage() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroTitle>Sobre a East</HeroTitle>
          <HeroSubtitle>
            Mais de 15 anos dedicados ao cuidado do seu veículo com excelência e confiança
          </HeroSubtitle>
        </Container>
      </HeroSection>

      {/* Nossa História */}
      <Section>
        <Container>
          <ContentGrid>
            <ContentText>
              <SectionTitle>Nossa História</SectionTitle>
              <SectionParagraph>
                A East nasceu em 2009 com o objetivo de oferecer serviços automotivos 
                de alta qualidade com preços justos. Começamos como uma pequena oficina de 
                bairro e hoje somos referência em manutenção automotiva na região.
              </SectionParagraph>
              <SectionParagraph>
                Nosso compromisso sempre foi o mesmo: tratar cada veículo como se fosse nosso, 
                oferecendo diagnósticos precisos, reparos duradouros e um atendimento que 
                supera as expectativas dos nossos clientes.
              </SectionParagraph>
            </ContentText>
            <ContentImage 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=400&fit=crop"
              alt="Oficina East"
            />
          </ContentGrid>
        </Container>
      </Section>

      {/* Estatísticas */}
      <Section gray>
        <Container>
          <StatsGrid>
            <StatCard>
              <StatNumber>5000+</StatNumber>
              <StatLabel>Clientes Atendidos</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Anos de Experiência</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>98%</StatNumber>
              <StatLabel>Satisfação dos Clientes</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>50+</StatNumber>
              <StatLabel>Serviços Oferecidos</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      {/* Missão e Valores */}
      <Section>
        <Container>
          <ContentGrid style={{ gridTemplateColumns: '1fr' }}>
            <ContentText style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <SectionTitle>Missão e Valores</SectionTitle>
              <SectionParagraph>
                Nossa missão é manter seu veículo sempre em perfeito funcionamento, 
                oferecendo serviços especializados com tecnologia de ponta e profissionais qualificados.
              </SectionParagraph>
            </ContentText>
          </ContentGrid>
          
          <ValuesList>
            <ValueCard>
              <ValueIcon>🎯</ValueIcon>
              <ValueTitle>Missão</ValueTitle>
              <ValueDescription>
                Oferecer serviços automotivos de excelência, garantindo a segurança e 
                satisfação dos nossos clientes através de soluções inovadoras e duradouras.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>👁️</ValueIcon>
              <ValueTitle>Visão</ValueTitle>
              <ValueDescription>
                Ser a oficina automotiva de referência na região, reconhecida pela 
                qualidade dos serviços e pelo relacionamento próximo com os clientes.
              </ValueDescription>
            </ValueCard>
            
            <ValueCard>
              <ValueIcon>⭐</ValueIcon>
              <ValueTitle>Valores</ValueTitle>
              <ValueDescription>
                Transparência, qualidade, compromisso com prazos, preços justos, 
                atendimento personalizado e responsabilidade ambiental.
              </ValueDescription>
            </ValueCard>
          </ValuesList>
        </Container>
      </Section>

      {/* Equipe */}
      <Section gray>
        <Container>
          <TeamSection>
            <SectionTitle>Nossa Equipe</SectionTitle>
            <SectionParagraph>
              Profissionais experientes e certificados, sempre atualizados com as 
              mais recentes tecnologias automotivas.
            </SectionParagraph>
            
            <TeamGrid>
              <TeamCard>
                <TeamImage>🔧</TeamImage>
                <TeamName>Carlos Silva</TeamName>
                <TeamRole>Mecânico Chefe</TeamRole>
                <TeamDescription>
                  15 anos de experiência em mecânica geral e especialização em motores.
                </TeamDescription>
              </TeamCard>
              
              <TeamCard>
                <TeamImage>⚡</TeamImage>
                <TeamName>Ana Santos</TeamName>
                <TeamRole>Especialista em Eletrônica</TeamRole>
                <TeamDescription>
                  Certificada em sistemas eletrônicos automotivos e diagnósticos computadorizados.
                </TeamDescription>
              </TeamCard>
              
              <TeamCard>
                <TeamImage>🛠️</TeamImage>
                <TeamName>João Oliveira</TeamName>
                <TeamRole>Técnico em Suspensão</TeamRole>
                <TeamDescription>
                  Especialista em sistemas de suspensão, freios e alinhamento de direção.
                </TeamDescription>
              </TeamCard>
              
              <TeamCard>
                <TeamImage>🎯</TeamImage>
                <TeamName>Maria Costa</TeamName>
                <TeamRole>Atendimento ao Cliente</TeamRole>
                <TeamDescription>
                  Responsável pelo atendimento personalizado e acompanhamento dos serviços.
                </TeamDescription>
              </TeamCard>
            </TeamGrid>
          </TeamSection>
        </Container>
      </Section>
    </PageContainer>
  );
}
