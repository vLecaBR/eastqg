import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loading>Carregando detalhes...</Loading>;
  if (!product || product.error) return <Error>Produto não encontrado 😢</Error>;

  return (
    <Container>
      <BackLink to="/">← Voltar</BackLink>

      <DetailsWrapper>
        <ImageSection>
          <MainImage
            src={product.pictures?.[0]?.url || product.thumbnail}
            alt={product.title}
          />
          <Thumbs>
            {product.pictures?.slice(0, 5).map((pic) => (
              <Thumb key={pic.id} src={pic.url} alt={product.title} />
            ))}
          </Thumbs>
        </ImageSection>

        <InfoSection>
          <h1>{product.title}</h1>
          <Price>R$ {product.price?.toFixed(2)}</Price>
          <Condition>
            {product.condition === 'used' ? 'Usado' : 'Novo'} —{' '}
            {product.available_quantity} disponíveis
          </Condition>
          <BuyButton
            href={product.permalink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar no Mercado Livre
          </BuyButton>
        </InfoSection>
      </DetailsWrapper>

      {product.description && (
        <Description>
          <h2>Descrição</h2>
          <p>{product.description}</p>
        </Description>
      )}
    </Container>
  );
}

// 🎨 ESTILOS
const Container = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
`;

const Loading = styled.p`
  text-align: center;
  color: #0d7377;
`;

const Error = styled.p`
  text-align: center;
  color: #dc2626;
`;

const BackLink = styled(Link)`
  color: #0d7377;
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  gap: 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 0.75rem;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const Thumbs = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
`;

const Thumb = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #0d7377;
  }
`;

const InfoSection = styled.div`
  flex: 1;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #0d7377;
  margin-bottom: 0.5rem;
`;

const Condition = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const BuyButton = styled.a`
  display: inline-block;
  background: #0d7377;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    background: #14a085;
  }
`;

const Description = styled.div`
  margin-top: 2rem;

  h2 {
    color: #0d7377;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #374151;
    line-height: 1.6;
  }
`;
