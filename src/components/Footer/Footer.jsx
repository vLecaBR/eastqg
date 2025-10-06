import React from 'react';
import {
  FooterContainer, Container, FooterContent, FooterSection, FooterTitle, FooterText,
  SocialLinks, SocialLink, ContactInfo, ContactItem, ContactIcon, ContactText,
  ServiceList, ServiceLink, GuaranteeList, GuaranteeItem, FooterBottom, Copyright,
  Certifications, CertificationBadge
} from './Footer.styles';

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        {/* Main Footer Content */}
        <FooterContent>
          {/* Company Info */}
          <FooterSection>
            <FooterTitle>East</FooterTitle>
            <FooterText>
              Sua oficina de confiança com mais de 15 anos de experiência em manutenção automotiva. 
              Oferecemos serviços especializados com qualidade e garantia.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" title="Facebook">📘</SocialLink>
              <SocialLink href="#" title="Instagram">📷</SocialLink>
              <SocialLink href="#" title="WhatsApp">💬</SocialLink>
              <SocialLink href="#" title="YouTube">📺</SocialLink>
            </SocialLinks>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <ContactInfo>
              <ContactItem><ContactIcon>📍</ContactIcon><ContactText>Rua das Oficinas, 123 - São Paulo, SP</ContactText></ContactItem>
              <ContactItem><ContactIcon>📞</ContactIcon><ContactText>(11) 9999-9999</ContactText></ContactItem>
              <ContactItem><ContactIcon>📧</ContactIcon><ContactText>contato@east.com.br</ContactText></ContactItem>
              <ContactItem><ContactIcon>⏰</ContactIcon><ContactText>Seg-Sex: 8h-18h | Sáb: 8h-12h</ContactText></ContactItem>
            </ContactInfo>
          </FooterSection>

          {/* Services */}
          <FooterSection>
            <FooterTitle>Serviços</FooterTitle>
            <ServiceList>
              <li><ServiceLink>Troca de Óleo</ServiceLink></li>
              <li><ServiceLink>Alinhamento e Balanceamento</ServiceLink></li>
              <li><ServiceLink>Revisão Completa</ServiceLink></li>
              <li><ServiceLink>Sistema de Freios</ServiceLink></li>
              <li><ServiceLink>Ar Condicionado</ServiceLink></li>
              <li><ServiceLink>Injeção Eletrônica</ServiceLink></li>
              <li><ServiceLink>Suspensão</ServiceLink></li>
              <li><ServiceLink>Sistema Elétrico</ServiceLink></li>
            </ServiceList>
          </FooterSection>

          {/* Guarantees */}
          <FooterSection>
            <FooterTitle>Garantias</FooterTitle>
            <GuaranteeList>
              <GuaranteeItem>✅ Garantia de 6 meses nos serviços</GuaranteeItem>
              <GuaranteeItem>✅ Peças originais ou equivalentes</GuaranteeItem>
              <GuaranteeItem>✅ Mão de obra especializada</GuaranteeItem>
              <GuaranteeItem>✅ Orçamento sem compromisso</GuaranteeItem>
              <GuaranteeItem>✅ Atendimento personalizado</GuaranteeItem>
            </GuaranteeList>
          </FooterSection>
        </FooterContent>

        {/* Footer Bottom */}
        <FooterBottom>
          <Copyright>&copy; 2024 East. Todos os direitos reservados.</Copyright>
          <Certifications>
            <CertificationBadge>CERTIFIED</CertificationBadge>
            <CertificationBadge>ISO 9001</CertificationBadge>
            <CertificationBadge>PROCON</CertificationBadge>
          </Certifications>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}
