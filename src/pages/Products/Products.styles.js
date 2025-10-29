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

// Products.styles.js
export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  background: ${(props) => (props.$active ? '#14a085' : 'transparent')};
  color: ${(props) => (props.$active ? 'white' : '#1f2937')};
  transition: all 0.2s;

  &:hover {
    background: #14a085;
    color: white;
  }
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
