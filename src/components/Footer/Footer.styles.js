import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 4rem 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FooterSection = styled.div``;

export const FooterTitle = styled.h3`
  color: #14a085;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const FooterText = styled.p`
  color: #d1d5db;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  background: #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  &:hover {
    background: #14a085;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ContactIcon = styled.span`
  color: #14a085;
`;

export const ContactText = styled.span`
  color: #d1d5db;
`;

export const ServiceList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const ServiceLink = styled.a`
  color: #d1d5db;
  transition: color 0.2s;
  cursor: pointer;
  &:hover {
    color: #14a085;
  }
`;

export const GuaranteeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

export const GuaranteeItem = styled.li`
  color: #d1d5db;
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Copyright = styled.p`
  color: #9ca3af;
  font-size: 0.875rem;
`;

export const Certifications = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CertificationBadge = styled.span`
  background: #374151;
  color: #14a085;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
`;
