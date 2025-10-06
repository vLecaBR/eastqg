import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
`;

export const HeroSection = styled.section`
  background: linear-gradient(
    135deg, 
    rgba(13, 115, 119, 0.95) 0%, 
    rgba(20, 160, 133, 0.95) 100%
  ), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&h=600&fit=crop');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 4rem 0;
  text-align: center;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 4rem 0;
  background: ${props => props.gray ? '#f9fafb' : 'white'};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ContentText = styled.div``;

export const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const SectionParagraph = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

export const ContentImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

export const StatCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #0d7377;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.div`
  color: #6b7280;
  font-weight: 500;
`;

export const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #14a085;
`;

export const ValueIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const ValueTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
`;

export const ValueDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
`;

export const TeamSection = styled.div`
  text-align: center;
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const TeamCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const TeamImage = styled.div`
  width: 5rem;
  height: 5rem;
  background: #14a085;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

export const TeamName = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

export const TeamRole = styled.p`
  color: #0d7377;
  font-weight: 500;
  margin-bottom: 0.75rem;
`;

export const TeamDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
`;
