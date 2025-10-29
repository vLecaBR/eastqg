import React from "react";
import * as S from "./ProductsCard.syles";

// ícones react-icons
import { FaFire, FaExternalLinkAlt } from "react-icons/fa";

export default function ProductCard({ product, onViewDetails }) {
  const handleCardClick = (e) => {
    if (["BUTTON", "A"].includes(e.target.tagName)) return;
    onViewDetails(product.id);
  };

  const imageSrc = product.image || product.thumbnail || "/placeholder.png";

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.ImageContainer>
        <S.ProductImage
          src={imageSrc}
          alt={product.title || "Produto"}
          onError={(e) => (e.target.src = "/placeholder.png")}
        />
        {product.featured && (
          <S.FeaturedBadge>
            <FaFire style={{ marginRight: 4 }} /> Destaque
          </S.FeaturedBadge>
        )}
      </S.ImageContainer>

      <S.CardContent>
        <S.CategoryBadge>
          {product.condition === "used" ? "Usado" : "Novo"}
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

          {product.permalink && (
            <S.SecondaryButton
              as="a"
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Comprar <FaExternalLinkAlt style={{ marginLeft: 4 }} />
            </S.SecondaryButton>
          )}
        </S.ActionButtons>
      </S.CardContent>
    </S.CardContainer>
  );
}
