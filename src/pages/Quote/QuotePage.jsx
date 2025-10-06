import React, { useState, useEffect } from 'react';
import * as S from './Quote.styles';

export default function QuotePage({ services, quote, onNavigate, onRemoveFromQuote }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [toast, setToast] = useState('');

  // Persist quote in localStorage
  useEffect(() => {
    localStorage.setItem('quote', JSON.stringify(quote));
  }, [quote]);

  const quoteServices = services.filter(service => quote.includes(service.id));
  const total = quoteServices.reduce((sum, s) => sum + s.price, 0);
  const formattedPrice = price => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);

  const handleInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setToast(`Orçamento enviado com sucesso! Total: ${formattedPrice(total)}`);
    setTimeout(() => setToast(''), 4000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const phoneValid = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(formData.phone);
  const isFormValid = formData.name && emailValid && phoneValid;

  if (quote.length === 0) {
    return (
      <S.PageContainer>
        <S.Container>
          <S.PageHeader>
            <S.PageTitle>Seu Orçamento</S.PageTitle>
            <S.PageSubtitle>Adicione serviços para criar seu orçamento personalizado</S.PageSubtitle>
          </S.PageHeader>
          <S.EmptyState>
            <h3>Nenhum serviço no orçamento</h3>
            <p>Navegue pelos nossos serviços e adicione os que você precisa</p>
            <S.ContinueButton onClick={() => onNavigate('services')}>
              Ver Serviços Disponíveis
            </S.ContinueButton>
          </S.EmptyState>
        </S.Container>
      </S.PageContainer>
    );
  }

  return (
    <S.PageContainer>
      <S.Container>
        <S.PageHeader>
          <S.PageTitle>Seu Orçamento</S.PageTitle>
          <S.PageSubtitle>Revise os serviços selecionados e solicite seu orçamento</S.PageSubtitle>
        </S.PageHeader>

        <S.QuoteContent>
          <S.ServicesSection>
            <S.SectionTitle>Serviços Selecionados ({quoteServices.length})</S.SectionTitle>
            {quoteServices.map(service => (
              <S.ServiceItem key={service.id}>
                <S.ServiceImage src={service.image} alt={service.name} />
                <S.ServiceInfo>
                  <S.ServiceName>{service.name}</S.ServiceName>
                  <S.ServiceCategory>{service.category}</S.ServiceCategory>
                </S.ServiceInfo>
                <S.ServicePrice>{formattedPrice(service.price)}</S.ServicePrice>
                <S.RemoveButton onClick={() => onRemoveFromQuote(service.id)}>🗑️</S.RemoveButton>
              </S.ServiceItem>
            ))}
          </S.ServicesSection>

          <S.SummarySection>
            <S.SectionTitle>Resumo do Orçamento</S.SectionTitle>
            {quoteServices.map(service => (
              <S.SummaryItem key={service.id}>
                <span>{service.name}</span>
                <span>{formattedPrice(service.price)}</span>
              </S.SummaryItem>
            ))}
            <S.SummaryItem>
              <span>Total</span>
              <span>{formattedPrice(total)}</span>
            </S.SummaryItem>

            <S.ContactForm onSubmit={handleSubmit}>
              <S.FormGroup>
                <S.Label htmlFor="name">Nome Completo *</S.Label>
                <S.Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label htmlFor="email">E-mail *</S.Label>
                <S.Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label htmlFor="phone">Telefone *</S.Label>
                <S.Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </S.FormGroup>
              <S.FormGroup>
                <S.Label htmlFor="message">Observações</S.Label>
                <S.TextArea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Detalhes sobre seu veículo ou necessidades..." />
              </S.FormGroup>
              <S.SubmitButton type="submit" disabled={!isFormValid}>
                Enviar Solicitação de Orçamento
              </S.SubmitButton>
            </S.ContactForm>
          </S.SummarySection>
        </S.QuoteContent>
      </S.Container>

      {toast && <S.Toast>{toast}</S.Toast>}
    </S.PageContainer>
  );
}
