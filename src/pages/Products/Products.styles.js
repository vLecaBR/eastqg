import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
  background-color: #f9fafb; /* Um fundo leve ajuda a destacar os cards */
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 42rem;
  line-height: 1.6;
`;

export const FilterSection = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; /* Garante que os botões fiquem no meio */
  align-items: center;
`;

export const FilterButton = styled.button`
  padding: 0.6rem 1.25rem;
  border-radius: 9999px; /* Formato de pílula fica mais moderno */
  font-weight: 600;
  border: 1px solid ${(props) => (props.$active ? '#14a085' : '#e5e7eb')};
  cursor: pointer;
  background: ${(props) => (props.$active ? '#14a085' : 'white')};
  color: ${(props) => (props.$active ? 'white' : '#4b5563')};
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    background: #14a085;
    color: white;
    border-color: #14a085;
    transform: translateY(-1px);
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  /* MUDANÇA CRÍTICA: 
     1. Reduzi de 350px para 280px (tamanho padrão de card).
     2. Mudei auto-fit para auto-fill. Isso impede que cards estiquem sozinhos.
  */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  
  /* Se tiver poucos itens, isso ajuda a mantê-los alinhados, 
     mas o auto-fill já resolve o esticamento gigante */
  justify-items: center; 
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* Em mobile, 1 coluna */
    padding: 0 1rem;
  }
`;

export const NoProducts = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  color: #6b7280;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #374151;
  }
`;