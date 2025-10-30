import React from 'react';
import {
  FooterContainer, Container, FooterContent, FooterSection, FooterTitle, FooterText,
  SocialLinks, SocialLink, ContactInfo, ContactItem, ContactIcon, ContactText,
  ServiceList, ServiceLink, GuaranteeList, GuaranteeItem, FooterBottom, Copyright,
  Certifications, CertificationBadge
} from './Footer.styles';

// React Icons
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaCarSide, FaTools } from 'react-icons/fa';
import { BsGeoAlt, BsTelephone, BsEnvelope, BsClock, BsCheckLg } from 'react-icons/bs';

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
              Sua oficina de confiança com mais de 10 anos de experiência em manutenção automotiva. 
              Oferecemos serviços especializados com qualidade e garantia.
            </FooterText>
            <SocialLinks>
              <SocialLink href="#" title="Facebook"><FaFacebookF /></SocialLink>
              <SocialLink href="#" title="Instagram"><FaInstagram /></SocialLink>
              <SocialLink href="#" title="WhatsApp"><FaWhatsapp /></SocialLink>
              <SocialLink href="#" title="YouTube"><FaYoutube /></SocialLink>
            </SocialLinks>
          </FooterSection>

          {/* Contact Info */}
          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <ContactInfo>
              <ContactItem>
                <ContactIcon><BsGeoAlt /></ContactIcon>
                <ContactText>Rua São Paulo 1801 - Campos Elíseos, Ribeirão Preto - SP</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon><BsTelephone /></ContactIcon>
                <ContactText>(16) 99795-7314</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon><BsEnvelope /></ContactIcon>
                <ContactText>contato@east.com.br</ContactText>
              </ContactItem>
              <ContactItem>
                <ContactIcon><BsClock /></ContactIcon>
                <ContactText>Seg-Sex: 8h-18h | Sáb: 8h-12h</ContactText>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          {/* Services */}
          <FooterSection>
            <FooterTitle>Serviços</FooterTitle>
            <ServiceList>
              <li><ServiceLink><FaTools /> Troca de Óleo</ServiceLink></li>
              <li><ServiceLink><FaTools /> Performance</ServiceLink></li>
              <li><ServiceLink><FaTools /> Revisão Completa</ServiceLink></li>
              <li><ServiceLink><FaTools /> Sistema de Freios</ServiceLink></li>
              <li><ServiceLink><FaCarSide /> Personalização</ServiceLink></li>
              <li><ServiceLink><FaCarSide /> Envelopamento</ServiceLink></li>
              <li><ServiceLink><FaCarSide /> Suspensão</ServiceLink></li>
              <li><ServiceLink><FaCarSide /> Fabricação em INOX</ServiceLink></li>
            </ServiceList>
          </FooterSection>

          {/* Guarantees */}
          <FooterSection>
            <FooterTitle>Garantias</FooterTitle>
            <GuaranteeList>
              <GuaranteeItem><BsCheckLg /> Garantia de 6 meses nos serviços</GuaranteeItem>
              <GuaranteeItem><BsCheckLg /> Peças originais ou equivalentes</GuaranteeItem>
              <GuaranteeItem><BsCheckLg /> Mão de obra especializada</GuaranteeItem>
              <GuaranteeItem><BsCheckLg /> Orçamento sem compromisso</GuaranteeItem>
              <GuaranteeItem><BsCheckLg /> Atendimento personalizado</GuaranteeItem>
            </GuaranteeList>
          </FooterSection>
        </FooterContent>

        {/* Footer Bottom */}
        <FooterBottom>
          <Copyright>&copy; 2025 East. Todos os direitos reservados.</Copyright>
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
