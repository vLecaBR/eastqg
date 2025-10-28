// ProductDetails.jsx
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
        // Busca no teu backend (recomendo manter a rota /api/product/:id)
        const res = await fetch(`https://eastqg-backend-y6r1.onrender.com/api/product/${id}`);
        if (!res.ok) throw new Error('Erro ao buscar produto');
        const data = await res.json();

        // Alguns endpoints do ML não trazem texto de descrição direto.
        // Tentamos extrair um texto útil:
        let descriptionText = null;
        if (data.plain_text) descriptionText = data.plain_text;
        else if (data.description) {
          // pode ser objeto ou string
          if (typeof data.description === 'string') descriptionText = data.description;
          else if (Array.isArray(data.description) && data.description.length) {
            // alguns retornos têm array com elementos com "text"
            descriptionText = data.description.map(d => d.text || d.plain_text).filter(Boolean).join('\n\n');
          } else if (data.description?.plain_text) descriptionText = data.description.plain_text;
        } else if (data.descriptions && Array.isArray(data.descriptions) && data.descriptions.length) {
          // fallback para campo "descriptions"
          descriptionText = data.descriptions.map(d => d.text || d.plain_text).filter(Boolean).join('\n\n');
        }

        // Normaliza imagens
        const pics = (data.pictures && data.pictures.length)
          ? data.pictures.map(p => p.secure_url || p.url).filter(Boolean)
          : (data.thumbnail ? [data.thumbnail] : []);

        setProduct({
          ...data,
          description_text: descriptionText,
          pictures: pics
        });

        setMainImage(pics[0] || data.thumbnail || null);
      } catch (err) {
        console.error('Erro ao buscar produto:', err);
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setMainImage(src);
                  }}
                />
              ))}
            </S.Thumbs>
          )}
        </S.ImageSection>

        <S.InfoSection>
          <S.Title>{product.title}</S.Title>

          <S.Price>
            R$ {(Number(product.price) || 0).toFixed(2)}
          </S.Price>

          <S.Meta>
            <span>{product.condition === 'used' ? 'Usado' : 'Novo'}</span>
            <span> • </span>
            <span>{product.available_quantity ?? '—'} disponíveis</span>
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

            <S.DetailsButton
              onClick={() => {
                // scroll pra descrição
                const el = document.getElementById('product-description');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver descrição
            </S.DetailsButton>
          </S.ButtonsRow>

          <S.SmallInfo>
            <div><strong>Vendedor:</strong> {product.seller_id ?? '—'}</div>
            <div><strong>SKU / ID:</strong> {product.id}</div>
            {product.warranty && <div><strong>Garantia:</strong> {product.warranty}</div>}
          </S.SmallInfo>
        </S.InfoSection>
      </S.DetailsWrapper>

      <S.Description id="product-description">
        <h2>Descrição</h2>
        {product.description_text
          ? product.description_text.split('\n').map((line, i) => <p key={i}>{line}</p>)
          : <p>Sem descrição detalhada.</p>}
      </S.Description>

      {product.attributes && product.attributes.length > 0 && (
        <S.Attributes>
          <h3>Especificações</h3>
          <S.AttrsGrid>
            {product.attributes.map(attr => (
              <div key={attr.id}>
                <strong>{attr.name}</strong>
                <div>{attr.value_name ?? (attr.values && attr.values[0] && attr.values[0].name) ?? '—'}</div>
              </div>
            ))}
          </S.AttrsGrid>
        </S.Attributes>
      )}
    </S.Container>
  );
}
