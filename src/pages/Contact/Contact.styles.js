import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  padding: 3rem 0;
`;

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
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
  max-width: 42rem;
  margin: 0 auto;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const ContactInfo = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

export const InfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const InfoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: #ecfdf5;
  color: #0d7377;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const InfoLabel = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

export const InfoText = styled.p`
  color: #6b7280;
  line-height: 1.5;
`;

export const ContactForm = styled.div`
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Label = styled.label`
  font-weight: 500;
  color: #374151;
  font-size: 0.875rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: #0d7377;
    box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
  }
  &::placeholder {
    color: #9ca3af;
  }
`;

export const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  background: white;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: #0d7377;
    box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  resize: vertical;
  min-height: 5rem;
  transition: all 0.2s;
  &:focus {
    outline: none;
    border-color: #0d7377;
    box-shadow: 0 0 0 3px rgba(13, 115, 119, 0.1);
  }
  &::placeholder {
    color: #9ca3af;
  }
`;

export const SubmitButton = styled.button`
  background: #0d7377;
  color: white;
  padding: 0.875rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s;
  &:hover {
    background: #14a085;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(13, 115, 119, 0.3);
  }
  &:disabled {
    background: #d1d5db;
    color: #9ca3af;
    cursor: not-allowed;
    transform: none;
  }
`;

export const MapSection = styled.section`
  margin-top: 4rem;
  background: white;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

export const MapTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
  text-align: center;
`;

export const MapPlaceholder = styled.div`
  width: 100%;
  height: 20rem;
  background: #f3f4f6;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.125rem;
  border: 2px dashed #d1d5db;
`;

export const HoursSection = styled.div`
  margin-top: 2rem;
  background: #f9fafb;
  border-radius: 0.75rem;
  padding: 1.5rem;
`;

export const HoursTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
`;

export const HoursList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.75rem;
`;

export const HoursItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  &:last-child {
    border-bottom: none;
  }
`;

export const Day = styled.span`
  font-weight: 500;
  color: #374151;
`;

export const Hours = styled.span`
  color: #6b7280;
`;
