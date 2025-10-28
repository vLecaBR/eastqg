import React, { useState } from 'react';
import {
  HeaderContainer, TopBar, Container, MainNav, Logo, LogoIcon, LogoText,
  DesktopNav, NavButton, MobileMenuButton, MobileMenu, CloseButton,
  MobileNavButtons, MobileNavButton
} from './Header.styles';
import { useNavigate } from 'react-router-dom';

export default function Header({ currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <HeaderContainer>
      <TopBar>
        <Container>
          📞 (11) 9999-9999 | 📧 contato@east.com.br | ⏰ Seg-Sex 8h-18h, Sáb 8h-12h
        </Container>
      </TopBar>

      <Container>
        <MainNav>
          <Logo onClick={() => handleNavigate('/')}>
            <LogoIcon>E</LogoIcon>
            <LogoText>East</LogoText>
          </Logo>

          <DesktopNav>
            <NavButton active={currentPage === 'home'} onClick={() => handleNavigate('/')}>Início</NavButton>
            <NavButton active={currentPage === 'products'} onClick={() => handleNavigate('/products')}>Produtos</NavButton>
            <NavButton active={currentPage === 'services'} onClick={() => handleNavigate('/services')}>Serviços</NavButton>
            <NavButton active={currentPage === 'about'} onClick={() => handleNavigate('/about')}>Sobre</NavButton>
            <NavButton active={currentPage === 'contact'} onClick={() => handleNavigate('/contact')}>Contato</NavButton>
          </DesktopNav>

          <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
        </MainNav>
      </Container>

      {mobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
          <MobileNavButtons>
            <MobileNavButton onClick={() => handleNavigate('/')}>Início</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/products')}>Produtos</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/services')}>Serviços</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/about')}>Sobre</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/contact')}>Contato</MobileNavButton>
          </MobileNavButtons>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
