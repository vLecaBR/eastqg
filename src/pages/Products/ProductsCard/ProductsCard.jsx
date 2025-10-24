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
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    onViewDetails(product.id);
  };

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ProductImage
          src={product.image || '/placeholder.png'}
          alt={product.title}
          onError={(e) => (e.target.src = '/placeholder.png')}
        />
        {product.featured && <S.FeaturedBadge>🔥 Destaque</S.FeaturedBadge>}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>{product.condition === 'used' ? 'Usado' : 'Novo'}</S.CategoryBadge>
        <S.ProductName>{product.title}</S.ProductName>

        {product.link && (
          <S.ProductLink
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Ver no Mercado Livre ↗
          </S.ProductLink>
        )}

        <S.ProductInfo>
          <S.Price>R$ {Number(product.price).toFixed(2)}</S.Price>
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
