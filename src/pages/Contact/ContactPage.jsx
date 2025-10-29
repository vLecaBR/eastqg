import React from 'react';
import {
  PageContainer, Container, PageHeader, PageTitle, PageSubtitle,
  ContactContent, ContactInfo, InfoTitle, InfoList, InfoItem, InfoIcon,
  InfoContent, InfoLabel, InfoText, QuickActions, ActionButton, MapSection,
  MapTitle, MapPlaceholder, HoursSection, HoursTitle, HoursList, HoursItem, Day, Hours
} from './Contact.styles';

// react-icons
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Entre em Contato</PageTitle>
          <PageSubtitle>
            Agende seu serviço ou tire dúvidas. Nossa equipe está pronta pra atender você!
          </PageSubtitle>
        </PageHeader>

        <ContactContent>
          <ContactInfo>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoIcon><FaMapMarkerAlt /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Endereço</InfoLabel>
                  <InfoText>
                    Rua São Paulo 1801,<br />
                    Campos Elíseos<br />
                    Ribeirão Preto, SP
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaPhoneAlt /></InfoIcon>
                <InfoContent>
                  <InfoLabel>Telefone</InfoLabel>
                  <InfoText>(16) 3333-3333</InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaWhatsapp /></InfoIcon>
                <InfoContent>
                  <InfoLabel>WhatsApp</InfoLabel>
                  <InfoText>(16) 99999-9999</InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon><FaEnvelope /></InfoIcon>
                <InfoContent>
                  <InfoLabel>E-mail</InfoLabel>
                  <InfoText>contato@east.com.br</InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>
          </ContactInfo>

          {/* 🔹 Ações rápidas */}
          <QuickActions>
            <h2>Atendimento Rápido</h2>
            <p>Escolha como prefere falar com a gente:</p>
            <ActionButton
              href="https://wa.me/5516999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#25D366' }}
            >
              <FaWhatsapp style={{ marginRight: '0.5rem' }} />
              Chamar no WhatsApp
            </ActionButton>

            <ActionButton href="tel:+551633333333">
              <FaPhoneAlt style={{ marginRight: '0.5rem' }} />
              Ligar Agora
            </ActionButton>

            <ActionButton
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+São+Paulo,+1801,+Ribeirão+Preto,+SP"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: '#2563EB' }}
            >
              <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} />
              Como Chegar
            </ActionButton>
          </QuickActions>
        </ContactContent>

        <MapSection>
          <MapTitle>Nossa Localização</MapTitle>
          <MapPlaceholder>
            <iframe
              title="mapa-oficina"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.429722!2d-47.799991!3d-21.158616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfae41f724dd%3A0xcceee1e2a4c6f269!2sR.%20S%C3%A3o%20Paulo%2C%201801%20-%20Campos%20El%C3%ADsios%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </MapPlaceholder>
        </MapSection>
      </Container>
    </PageContainer>
  );
}
