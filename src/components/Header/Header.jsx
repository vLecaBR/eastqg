import React, { useState } from 'react';
import {
  HeaderContainer, TopBar, Container, MainNav, Logo, LogoIcon, LogoText,
  DesktopNav, NavButton, MobileMenuButton, MobileMenu, CloseButton,
  MobileNavButtons, MobileNavButton
} from './Header.styles';

import { useNavigate, useLocation } from 'react-router-dom';

// ícones do react-icons
import { FaHome, FaBox, FaTools, FaInfoCircle, FaPhoneAlt, FaBars, FaTimes, FaCar } from 'react-icons/fa';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const currentPath = location.pathname;

  return (
    <HeaderContainer>
      <TopBar>
        <Container>
          <FaPhoneAlt style={{ marginRight: 6 }} /> (16) 99795-7314 &nbsp;|&nbsp;
          📧 contato@east.com.br &nbsp;|&nbsp;
          ⏰ Seg-Sex 8h-18h, Sáb 8h-12h
        </Container>
      </TopBar>

      <Container>
        <MainNav>
          <Logo onClick={() => handleNavigate('/')}>
            <LogoIcon>
              <FaCar />
            </LogoIcon>
            <LogoText>East</LogoText>
          </Logo>

          {/* NAV DESKTOP */}
          <DesktopNav>
            <NavButton $active={currentPath === '/'} onClick={() => handleNavigate('/')}>
              <FaHome /> Início
            </NavButton>
            <NavButton $active={currentPath === '/products'} onClick={() => handleNavigate('/products')}>
              <FaBox /> Produtos
            </NavButton>
            <NavButton $active={currentPath === '/services'} onClick={() => handleNavigate('/services')}>
              <FaTools /> Serviços
            </NavButton>
            <NavButton $active={currentPath === '/about'} onClick={() => handleNavigate('/about')}>
              <FaInfoCircle /> Sobre
            </NavButton>
            <NavButton $active={currentPath === '/contact'} onClick={() => handleNavigate('/contact')}>
              <FaPhoneAlt /> Contato
            </NavButton>

          </DesktopNav>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <FaBars />
          </MobileMenuButton>
        </MainNav>
      </Container>

      {/* MENU MOBILE */}
      {mobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMobileMenuOpen(false)}>
            <FaTimes />
          </CloseButton>
          <MobileNavButtons>
            <MobileNavButton onClick={() => handleNavigate('/')}>
              <FaHome /> Início
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/products')}>
              <FaBox /> Produtos
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/services')}>
              <FaTools /> Serviços
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/about')}>
              <FaInfoCircle /> Sobre
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/contact')}>
              <FaPhoneAlt /> Contato
            </MobileNavButton>
          </MobileNavButtons>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
