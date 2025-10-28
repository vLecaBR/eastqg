import styled from "styled-components";

export const CardContainer = styled.div`
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  max-width: 350px;
  width: 100%;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border-color: #14a085;
    transform: translateY(-2px);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  background: #f3f4f6;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const FeaturedBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: #f97316;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const CategoryBadge = styled.span`
  display: inline-block;
  background: #ecfdf5;
  color: #0d7377;
  padding: 0.2rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.7rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  border: 1px solid #bbf7d0;
`;

export const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;

  ${CardContainer}:hover & {
    color: #0d7377;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
`;

export const Price = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0d7377;
`;

export const ActionButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

export const PrimaryButton = styled.button`
  background: #0d7377;
  color: white;
  padding: 0.6rem 0.75rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #14a085;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: #f3f4f6;
  color: #0d7377;
  border: 1px solid #d1d5db;

  &:hover {
    background: #0d7377;
    color: white;
  }
`;
