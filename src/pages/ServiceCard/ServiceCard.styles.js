import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #14a085;
    transform: translateY(-2px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 12rem;
  overflow: hidden;
  background: #f3f4f6;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const PopularBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #f97316;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: #ecfdf5;
  color: #0d7377;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  border: 1px solid #bbf7d0;
`;

export const ServiceName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  ${CardContainer}:hover & {
    color: #0d7377;
  }
`;

export const ServiceDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ServiceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #f3f4f6;
`;

export const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0d7377;
`;

export const Duration = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f9fafb;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const PrimaryButton = styled.button`
  flex: 1;
  background: #0d7377;
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #14a085;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const IconButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 1rem;

  background: ${props => {
    if (props.saved) return '#dc2626';
    if (props.inQuote) return '#059669';
    return '#f3f4f6';
  }};

  color: ${props => (props.saved || props.inQuote ? 'white' : '#6b7280')};
  border: ${props => (props.saved || props.inQuote ? 'none' : '1px solid #d1d5db')};

  &:hover {
    background: ${props => {
      if (props.saved) return '#b91c1c';
      if (props.inQuote) return '#047857';
      return '#0d7377';
    }};
    color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
