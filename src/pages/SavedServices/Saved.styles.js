import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

export const EmptyIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const EmptyDescription = styled.p`
  margin-bottom: 1.5rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ContinueButton = styled.button`
  background: #0d7377;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #14a085;
    transform: translateY(-1px);
  }
`;

export const StatsSection = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0d7377;
`;

export const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

export const ActionButton = styled.button`
  background: #14a085;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #0d7377;
    transform: translateY(-1px);
  }
`;
