import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductsCard/ProductsCard.jsx';
import * as S from './Products.styles';

export default function ProductsPage({ favoriteProducts, cart, onToggleFavorite, onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch('https://eastqg-backend-y6r1.onrender.com/api/products');
        if (!res.ok) throw new Error('Erro ao carregar produtos');
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : data.products || []);
      } catch (err) {
        console.error('Erro ao carregar produtos:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const categories = ['Todos', ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <S.PageContainer>Carregando produtos...</S.PageContainer>;
  if (error) return <S.PageContainer>Erro: {error}</S.PageContainer>;

  return (
    <S.PageContainer>
      <S.Container>
        <S.PageHeader>
          <S.PageTitle>Nossos Produtos</S.PageTitle>
          <S.PageSubtitle>
            Encontre os melhores produtos automotivos com qualidade e preço justo.
          </S.PageSubtitle>
        </S.PageHeader>

        <S.FilterSection>
          {categories.map((category) => (
            <S.FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </S.FilterButton>
          ))}
        </S.FilterSection>

        {filteredProducts.length > 0 ? (
          <S.ProductsGrid>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
                onToggleFavorite={onToggleFavorite}
                onAddToCart={onAddToCart}
                isFavorite={favoriteProducts.includes(product.id)}
                isInCart={cart.includes(product.id)}
              />
            ))}
          </S.ProductsGrid>
        ) : (
          <S.NoProducts>
            <h3>Nenhum produto encontrado</h3>
            <p>Tente selecionar outra categoria.</p>
          </S.NoProducts>
        )}
      </S.Container>
    </S.PageContainer>
  );
}
