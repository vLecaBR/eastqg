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
  // Clique no card, mas ignora botões e links
  const handleCardClick = (e) => {
    if (['BUTTON', 'A'].includes(e.target.tagName)) return;
    onViewDetails(product.id);
  };

  // Fallback para imagem
  const imageSrc = product.image || product.thumbnail || '/placeholder.png';

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ProductImage
          src={imageSrc}
          alt={product.title || 'Produto'}
          onError={(e) => (e.target.src = '/placeholder.png')}
        />
        {product.featured && <S.FeaturedBadge>🔥 Destaque</S.FeaturedBadge>}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>
          {product.condition === 'used' ? 'Usado' : 'Novo'}
        </S.CategoryBadge>

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
          <S.Price>R$ {Number(product.price ?? 0).toFixed(2)}</S.Price>
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
