import React, { useState } from 'react';
import ProductCard from './ProductsCard/ProductsCard.jsx';
import * as S from './Products.styles';


export default function ProductsPage({ 
  products, 
  onViewDetails, 
  onToggleFavorite, 
  onAddToCart, 
  favoriteProducts, 
  cart 
}) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

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
          {categories.map(category => (
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
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
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
