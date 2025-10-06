import React, { useState } from 'react';
import {
  PageContainer, Container, PageHeader, PageTitle, PageSubtitle,
  ContactContent, ContactInfo, InfoTitle, InfoList, InfoItem, InfoIcon,
  InfoContent, InfoLabel, InfoText, ContactForm, FormTitle, Form, FormGroup,
  FormRow, Label, Input, Select, TextArea, SubmitButton, MapSection,
  MapTitle, MapPlaceholder, HoursSection, HoursTitle, HoursList, HoursItem, Day, Hours
} from './Contact.styles';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada com sucesso!\n\nObrigado pelo contato, ${formData.name}. Responderemos em breve!`);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <PageContainer>
      <Container>
        <PageHeader>
          <PageTitle>Entre em Contato</PageTitle>
          <PageSubtitle>
            Estamos aqui para ajudar! Entre em contato conosco para dúvidas, 
            agendamentos ou informações sobre nossos serviços.
          </PageSubtitle>
        </PageHeader>

        <ContactContent>
          <ContactInfo>
            <InfoTitle>Informações de Contato</InfoTitle>
            <InfoList>
              <InfoItem>
                <InfoIcon>📍</InfoIcon>
                <InfoContent>
                  <InfoLabel>Endereço</InfoLabel>
                  <InfoText>
                    Rua das Oficinas, 123<br />
                    Bairro Industrial<br />
                    São Paulo, SP - CEP: 01234-567
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📞</InfoIcon>
                <InfoContent>
                  <InfoLabel>Telefone</InfoLabel>
                  <InfoText>
                    (11) 9999-9999<br />
                    (11) 3333-3333
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon>📧</InfoIcon>
                <InfoContent>
                  <InfoLabel>E-mail</InfoLabel>
                  <InfoText>
                    contato@east.com.br<br />
                    orcamento@east.com.br
                  </InfoText>
                </InfoContent>
              </InfoItem>
              <InfoItem>
                <InfoIcon>💬</InfoIcon>
                <InfoContent>
                  <InfoLabel>WhatsApp</InfoLabel>
                  <InfoText>
                    (11) 99999-9999<br />
                    Atendimento rápido via WhatsApp
                  </InfoText>
                </InfoContent>
              </InfoItem>
            </InfoList>

            <HoursSection>
              <HoursTitle>Horário de Funcionamento</HoursTitle>
              <HoursList>
                <div>
                  <HoursItem><Day>Segunda-feira</Day><Hours>8h - 18h</Hours></HoursItem>
                  <HoursItem><Day>Terça-feira</Day><Hours>8h - 18h</Hours></HoursItem>
                  <HoursItem><Day>Quarta-feira</Day><Hours>8h - 18h</Hours></HoursItem>
                  <HoursItem><Day>Quinta-feira</Day><Hours>8h - 18h</Hours></HoursItem>
                </div>
                <div>
                  <HoursItem><Day>Sexta-feira</Day><Hours>8h - 18h</Hours></HoursItem>
                  <HoursItem><Day>Sábado</Day><Hours>8h - 12h</Hours></HoursItem>
                  <HoursItem><Day>Domingo</Day><Hours>Fechado</Hours></HoursItem>
                </div>
              </HoursList>
            </HoursSection>
          </ContactInfo>

          <ContactForm>
            <FormTitle>Envie uma Mensagem</FormTitle>
            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </FormGroup>
              </FormRow>

              <FormRow>
                <FormGroup>
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="subject">Assunto</Label>
                  <Select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Solicitação de Orçamento</option>
                    <option value="agendamento">Agendamento de Serviço</option>
                    <option value="informacoes">Informações sobre Serviços</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outros">Outros</option>
                  </Select>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="message">Mensagem *</Label>
                <TextArea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Descreva sua necessidade, dúvida ou comentário..."
                  required
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={!isFormValid}>
                Enviar Mensagem
              </SubmitButton>
            </Form>
          </ContactForm>
        </ContactContent>

        <MapSection>
          <MapTitle>Nossa Localização</MapTitle>
          <MapPlaceholder>
                  <iframe
          title="mapa-oficina"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.429722!2d-47.799991!3d-21.158616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfae41f724dd%3A0xcceee1e2a4c6f269!2sR.%20S%C3%A3o%20Paulo%2C%201807%20-%20Campos%20El%C3%ADsios%2C%20Ribeir%C3%A3o%20Preto%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1690000000000!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
        ></iframe>

          </MapPlaceholder>
        </MapSection>
      </Container>
    </PageContainer>
  );
}
