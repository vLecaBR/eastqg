import React from 'react';
import * as S from './ProductsCard.syles';

export default function ProductCard({ product, onViewDetails }) {
  const handleCardClick = (e) => {
    if (['BUTTON', 'A'].includes(e.target.tagName)) return;
    onViewDetails(product.id);
  };

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

          {product.link && (
            <S.SecondaryButton
              as="a"
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Comprar ↗
            </S.SecondaryButton>
          )}
        </S.ActionButtons>
      </S.CardContent>
    </S.CardContainer>
  );
}
