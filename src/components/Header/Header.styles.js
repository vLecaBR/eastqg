import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #1f2937;
  color: white;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const TopBar = styled.div`
  background: #0d7377;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 0.875rem;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
`;

export const LogoIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: #14a085;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
`;

export const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #14a085;
`;

export const DesktopNav = styled.nav`
  display: none;
  gap: 2rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
  background: ${(props) => (props.active ? 'rgba(20, 160, 133, 0.3)' : 'transparent')};
  color: ${(props) => (props.active ? '#14a085' : 'white')};

  &:hover {
    color: #14a085;
    background: rgba(20, 160, 133, 0.2);
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ActionButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
  background: ${(props) => (props.primary ? '#14a085' : 'transparent')};
  color: ${(props) => (props.primary ? 'white' : '#14a085')};
  border: ${(props) => (props.primary ? 'none' : '2px solid #14a085')};

  &:hover {
    background: ${(props) => (props.primary ? '#0d7377' : '#14a085')};
    color: white;
  }
`;

export const Badge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background: #dc2626;
  color: white;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MobileMenuButton = styled.button`
  display: block;
  color: white;
  padding: 0.5rem;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
`;

export const MobileNavButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
`;

export const MobileNavButton = styled.button`
  color: white;
  font-size: 1.25rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:hover {
    color: #14a085;
    background: rgba(20, 160, 133, 0.2);
  }
`;
