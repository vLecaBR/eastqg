import React, { useState } from 'react';
import {
  HeaderContainer, TopBar, Container, MainNav, Logo, LogoIcon, LogoText,
  DesktopNav, NavButton, ActionButtons, ActionButton, Badge,
  MobileMenuButton, MobileMenu, CloseButton, MobileNavButtons, MobileNavButton
} from './Header.styles';

export default function Header({ onNavigate, quoteCount, savedCount, currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNavigate = (page) => {
    onNavigate(page);
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
          <Logo onClick={() => handleNavigate('home')}>
            <LogoIcon>E</LogoIcon>
            <LogoText>East</LogoText>
          </Logo>

          <DesktopNav>
            <NavButton active={currentPage === 'home'} onClick={() => handleNavigate('home')}>Início</NavButton>
            <NavButton active={currentPage === 'products'} onClick={() => handleNavigate('products')}>Produtos</NavButton>
            <NavButton active={currentPage === 'services'} onClick={() => handleNavigate('services')}>Serviços</NavButton>
            <NavButton active={currentPage === 'about'} onClick={() => handleNavigate('about')}>Sobre</NavButton>
            <NavButton active={currentPage === 'contact'} onClick={() => handleNavigate('contact')}>Contato</NavButton>
          </DesktopNav>

          <ActionButtons>
            <ActionButton onClick={() => handleNavigate('saved')}>
              ❤️ Salvos {savedCount > 0 && <Badge>{savedCount}</Badge>}
            </ActionButton>
            <ActionButton primary onClick={() => handleNavigate('quote')}>
              💰 Orçamento {quoteCount > 0 && <Badge>{quoteCount}</Badge>}
            </ActionButton>
            <MobileMenuButton onClick={toggleMobileMenu}>☰</MobileMenuButton>
          </ActionButtons>
        </MainNav>
      </Container>

      {mobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMobileMenuOpen(false)}>×</CloseButton>
          <MobileNavButtons>
            <MobileNavButton onClick={() => handleNavigate('home')}>Início</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('products')}>Produtos</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('services')}>Serviços</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('about')}>Sobre</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('contact')}>Contato</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('saved')}>❤️ Salvos ({savedCount})</MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('quote')}>💰 Orçamento ({quoteCount})</MobileNavButton>
          </MobileNavButtons>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
