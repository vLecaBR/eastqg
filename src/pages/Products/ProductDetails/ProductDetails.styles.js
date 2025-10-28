// ProductDetails.styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const Center = styled.p`
  text-align: center;
  color: #0d7377;
  padding: 3rem;
`;

export const CenterErro = styled(Center)`
  color: #dc2626;
`;

export const TopRow = styled.div`
  margin-bottom: 1rem;
  a { color: #0d7377; font-weight: 500; }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background: #fff;
  padding: 1.25rem;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(15,23,42,0.06);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 480px;
  object-fit: contain;
  border-radius: 10px;
  background: #f8fafc;
`;

export const Thumbs = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-top: 0.25rem;
`;

export const Thumb = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.15s;

  &:hover {
    transform: translateY(-4px);
    border-color: #0d7377;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  margin: 0;
  color: #111827;
`;

export const Price = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #0d7377;
`;

export const Meta = styled.div`
  color: #6b7280;
  font-size: 0.95rem;
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
  align-items: center;
`;

export const BuyButton = styled.a`
  background: #0d7377;
  color: #fff;
  padding: 0.72rem 1.1rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    background: #14a085;
  }
`;

export const DetailsButton = styled.button`
  background: transparent;
  border: 1px solid #d1d5db;
  color: #0d7377;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #0d7377;
    color: white;
  }
`;

export const SmallInfo = styled.div`
  color: #374151;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const Description = styled.div`
  margin-top: 1.25rem;
  background: #fff;
  padding: 1rem;
  border-radius: 12px;
  h2 { color: #0d7377; margin-bottom: 0.5rem; }
  p { color: #374151; line-height: 1.6; margin: 0.5rem 0; }
`;

export const Attributes = styled.div`
  margin-top: 1rem;
  background: #fff;
  padding: 1rem;
  border-radius: 12px;

  h3 { color: #0d7377; margin-bottom: 0.5rem; }
`;

export const AttrsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
