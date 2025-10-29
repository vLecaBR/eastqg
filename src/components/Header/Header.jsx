import React, { useState } from 'react';
import {
  HeaderContainer, TopBar, Container, MainNav, Logo, LogoIcon, LogoText,
  DesktopNav, NavButton, MobileMenuButton, MobileMenu, CloseButton,
  MobileNavButtons, MobileNavButton
} from './Header.styles';
import { useNavigate } from 'react-router-dom';

// React Icons
import { BsTelephone, BsEnvelope, BsClock } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';
import { AiOutlineHome, AiOutlineShop, AiOutlineTool, AiOutlineInfoCircle, AiOutlineMail } from 'react-icons/ai';

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
        <Container style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.875rem' }}>
          <span><BsTelephone /> (11) 9999-9999</span>
          <span><BsEnvelope /> contato@east.com.br</span>
          <span><BsClock /> Seg-Sex 8h-18h, Sáb 8h-12h</span>
        </Container>
      </TopBar>

      <Container>
        <MainNav>
          <Logo onClick={() => handleNavigate('/')}>
            <LogoIcon>E</LogoIcon>
            <LogoText>East</LogoText>
          </Logo>

          <DesktopNav>
            <NavButton active={currentPage === 'home'} onClick={() => handleNavigate('/')}>
              <AiOutlineHome style={{ marginRight: '0.5rem' }} /> Início
            </NavButton>
            <NavButton active={currentPage === 'products'} onClick={() => handleNavigate('/products')}>
              <AiOutlineShop style={{ marginRight: '0.5rem' }} /> Produtos
            </NavButton>
            <NavButton active={currentPage === 'services'} onClick={() => handleNavigate('/services')}>
              <AiOutlineTool style={{ marginRight: '0.5rem' }} /> Serviços
            </NavButton>
            <NavButton active={currentPage === 'about'} onClick={() => handleNavigate('/about')}>
              <AiOutlineInfoCircle style={{ marginRight: '0.5rem' }} /> Sobre
            </NavButton>
            <NavButton active={currentPage === 'contact'} onClick={() => handleNavigate('/contact')}>
              <AiOutlineMail style={{ marginRight: '0.5rem' }} /> Contato
            </NavButton>
          </DesktopNav>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <HiMenu size={24} />
          </MobileMenuButton>
        </MainNav>
      </Container>

      {mobileMenuOpen && (
        <MobileMenu>
          <CloseButton onClick={() => setMobileMenuOpen(false)}>
            <HiX size={28} />
          </CloseButton>
          <MobileNavButtons>
            <MobileNavButton onClick={() => handleNavigate('/')}>
              <AiOutlineHome style={{ marginRight: '0.5rem' }} /> Início
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/products')}>
              <AiOutlineShop style={{ marginRight: '0.5rem' }} /> Produtos
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/services')}>
              <AiOutlineTool style={{ marginRight: '0.5rem' }} /> Serviços
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/about')}>
              <AiOutlineInfoCircle style={{ marginRight: '0.5rem' }} /> Sobre
            </MobileNavButton>
            <MobileNavButton onClick={() => handleNavigate('/contact')}>
              <AiOutlineMail style={{ marginRight: '0.5rem' }} /> Contato
            </MobileNavButton>
          </MobileNavButtons>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
}
