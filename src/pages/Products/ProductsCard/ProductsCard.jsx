import React from 'react';
import * as S from './ProductsCard.syles';

export default function ProductCard({
  product,
  onViewDetails,
  onToggleFavorite,
  onAddToCart,
  isFavorite,
  isInCart,
}) {
  const handleCardClick = (e) => {
    if (e.target.tagName === 'BUTTON') return;
    onViewDetails(product.id);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ProductImage src={product.image} alt={product.name} />
        {product.featured && <S.FeaturedBadge>🔥 Destaque</S.FeaturedBadge>}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>{product.category}</S.CategoryBadge>
        <S.ProductName>{product.name}</S.ProductName>
        <S.ProductDescription>{product.description}</S.ProductDescription>

        <S.ProductInfo>
          <S.Price>R$ {product.price.toFixed(2)}</S.Price>
        </S.ProductInfo>

        <S.ActionButtons>
          <S.PrimaryButton
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product.id);
            }}
          >
            Ver Detalhes
          </S.PrimaryButton>

          <S.IconButton
            favorite={isFavorite}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(product.id);
            }}
            title={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </S.IconButton>

          <S.IconButton
            inCart={isInCart}
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product.id);
            }}
            title={isInCart ? 'Remover do carrinho' : 'Adicionar ao carrinho'}
          >
            {isInCart ? '🛒' : '➕'}
          </S.IconButton>
        </S.ActionButtons>
      </S.CardContent>
    </S.CardContainer>
  );
}
