import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
  background: #f9fafb;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
`;

export const QuoteContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesSection = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const ServiceImage = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

export const ServiceInfo = styled.div`
  flex: 1;
`;

export const ServiceName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const ServiceCategory = styled.span`
  background: #ecfdf5;
  color: #0d7377;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: #0d7377;
`;

export const RemoveButton = styled.button`
  color: #dc2626;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
  
  &:hover {
    background: #fef2f2;
    color: #b91c1c;
  }
`;

export const SummarySection = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f3f4f6;
  
  &:last-child {
    border-bottom: none;
    font-size: 1.125rem;
    font-weight: bold;
    color: #1f2937;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f3f4f6;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #0d7377;
    box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  resize: vertical;
  min-height: 4rem;
  transition: border-color 0.2s;
  
  &:focus {
    outline: none;
    border-color: #0d7377;
    box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
  }
`;

export const SubmitButton = styled.button`
  background: #0d7377;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
  
  &:hover {
    background: #14a085;
    transform: translateY(-1px);
  }
  
  &:disabled {
    background: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: #6b7280;
`;

export const ContinueButton = styled.button`
  background: #0d7377;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.2s;
  
  &:hover {
    background: #14a085;
  }
`;

export const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #14a085;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  font-weight: 500;
  z-index: 100;
`;
