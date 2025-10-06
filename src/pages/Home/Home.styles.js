import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  width: 100%;
  background: linear-gradient(
      135deg, 
      rgba(13, 115, 119, 0.95) 0%, 
      rgba(20, 160, 133, 0.95) 100%
    ),
    url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&h=800&fit=crop');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 5rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;


export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
`;


export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const HeroButton = styled.button`
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1rem;

  ${(props) =>
    props.primary
      ? `
    background: white;
    color: #0d7377;
    &:hover {
      background: #f3f4f6;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  `
      : `
    border: 2px solid white;
    color: white;
    background: transparent;
    &:hover {
      background: white;
      color: #0d7377;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
  `}
`;

export const Section = styled.section`
  padding: 5rem 0;
  background: ${(props) => (props.gray ? '#f9fafb' : 'white')};
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 42rem;
  margin: 0 auto;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FeatureCard = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

export const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #1f2937;
`;

export const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

export const StatsSection = styled.section`
  background: #1f2937;
  color: white;
  padding: 4rem 0;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #14a085;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  font-size: 1.125rem;
  color: #d1d5db;
`;
