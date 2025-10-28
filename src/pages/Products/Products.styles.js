import styled from "styled-components";

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
  max-width: 42rem;
  margin: 0 auto;
`;

export const FilterSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-weight: 500;
  transition: all 0.2s;
  border: 1px solid #d1d5db;

  ${(props) =>
    props.active
      ? `
    background: #0d7377;
    color: white;
    border-color: #0d7377;
  `
      : `
    background: white;
    color: #6b7280;
    
    &:hover {
      background: #f9fafb;
      border-color: #0d7377;
      color: #0d7377;
    }
  `}
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;
