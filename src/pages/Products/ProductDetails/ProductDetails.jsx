import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as S from './ProductDetails.styles';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://eastqg-backend-y6r1.onrender.com/api/product/${id}`);
        if (!res.ok) throw new Error('Erro ao buscar produto');

        const data = await res.json();

        const pics = (data.pictures && data.pictures.length)
          ? data.pictures.map(p => p.secure_url || p.url)
          : (data.thumbnail ? [data.thumbnail] : []);

        setProduct({
          ...data,
          pictures: pics,
        });

        setMainImage(pics[0] || data.thumbnail || null);
      } catch (err) {
        console.error(err);
        setError(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <S.Center>Carregando produto...</S.Center>;
  if (error) return <S.CenterErro>Erro: {error}</S.CenterErro>;
  if (!product) return <S.CenterErro>Produto não encontrado</S.CenterErro>;

  return (
    <S.Container>
      <S.TopRow>
        <Link to="/products" style={{ textDecoration: 'none' }}>← Voltar</Link>
      </S.TopRow>

      <S.DetailsWrapper>
        <S.ImageSection>
          <S.MainImage src={mainImage || '/placeholder.png'} alt={product.title} />
          {product.pictures && product.pictures.length > 0 && (
            <S.Thumbs>
              {product.pictures.map((src, idx) => (
                <S.Thumb
                  key={idx}
                  src={src}
                  alt={`${product.title} ${idx + 1}`}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </S.Thumbs>
          )}
        </S.ImageSection>

        <S.InfoSection>
          <S.Title>{product.title}</S.Title>

          <S.Price>R$ {Number(product.price).toFixed(2)}</S.Price>

          <S.Meta>
            <span>{product.condition === 'used' ? 'Usado' : 'Novo'}</span>
            <span> • </span>
            <span>{product.available_quantity} disponíveis</span>
            {product.category_id && <><span> • </span><span>{product.category_id}</span></>}
          </S.Meta>

          <S.ButtonsRow>
            <S.BuyButton
              href={product.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Comprar no Mercado Livre
            </S.BuyButton>
          </S.ButtonsRow>

          <S.SmallInfo>
            <div><strong>Vendedor:</strong> {product.seller_id}</div>
            <div><strong>SKU / ID:</strong> {product.id}</div>
            {product.warranty && <div><strong>Garantia:</strong> {product.warranty}</div>}
            <div><strong>Tempo de garantia:</strong> {product.warranty ? product.warranty : 'Sem garantia'}</div>
            <div><strong>Tipo de listagem:</strong> {product.listing_type_id}</div>
            <div><strong>Frete:</strong> {product.shipping.free_shipping ? 'Grátis' : 'Pago'}</div>
          </S.SmallInfo>
        </S.InfoSection>
      </S.DetailsWrapper>
    </S.Container>
  );
}
