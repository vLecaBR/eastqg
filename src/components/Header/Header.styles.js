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
  letter-spacing: 0.3px;
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
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
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
  font-size: 1.25rem;
  transition: all 0.3s ease;

  ${Logo}:hover & {
    background: #0d7377;
  }
`;

export const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: #14a085;
  letter-spacing: 0.5px;
`;

export const DesktopNav = styled.nav`
  display: none;
  gap: 1.5rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;
  background: ${(props) => (props.$active ? 'rgba(20, 160, 133, 0.2)' : 'transparent')};
  color: ${(props) => (props.$active ? '#14a085' : 'white')};
  border: none;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease, color 0.3s ease;
  }

  &:hover {
    color: #14a085;
    background: rgba(20, 160, 133, 0.15);
    transform: translateY(-2px);

    svg {
      color: #14a085;
      transform: scale(1.1);
    }
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
  font-size: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    color: #14a085;
    transform: scale(1.15);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.95);
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  color: white;
  font-size: 2rem;
  padding: 0.5rem;
  transition: transform 0.2s ease;

  &:hover {
    color: #14a085;
    transform: rotate(90deg);
  }
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
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &:hover {
    color: #14a085;
    background: rgba(20, 160, 133, 0.2);
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;
