import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 2rem 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #0d7377;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    background: #f0fdfa;
    color: #14a085;
  }
`;

export const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const ImageSection = styled.div`
  position: relative;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 24rem;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f97316;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const InfoSection = styled.div``;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: #ecfdf5;
  color: #0d7377;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
  border: 1px solid #bbf7d0;
`;

export const ServiceTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ServiceDescription = styled.p`
  color: #6b7280;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

export const ServiceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
`;

export const PriceInfo = styled.div`
  text-align: center;
`;

export const PriceLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #0d7377;
`;

export const DurationInfo = styled.div`
  text-align: center;
`;

export const DurationLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const Duration = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
`;

export const FeaturesSection = styled.div`
  margin-bottom: 2rem;
`;

export const FeaturesTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
`;

export const FeatureIcon = styled.span`
  color: #059669;
  font-weight: bold;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  flex: 1;
  background: #0d7377;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #14a085;
    transform: translateY(-1px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const SecondaryButton = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${props => {
    if (props.saved) {
      return `
        background: #dc2626;
        color: white;
        &:hover {
          background: #b91c1c;
        }
      `;
    }
    if (props.inQuote) {
      return `
        background: #059669;
        color: white;
        &:hover {
          background: #047857;
        }
      `;
    }
    return `
      background: white;
      color: #6b7280;
      border: 2px solid #d1d5db;
      
      &:hover {
        border-color: #0d7377;
        color: #0d7377;
      }
    `;
  }}
`;
