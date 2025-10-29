import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60vh;
  padding: 2rem;

  @media (min-width: 768px) {
    height: 50vh;
    padding: 3rem;
  }

  @media (min-width: 1024px) {
    height: 50vh;
    padding: 5rem;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #14a085;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (min-width: 1024px) {
    width: 120px;
    height: 120px;
  }
`;

export const LoadingText = styled.p`
  color: #14a085;
  font-size: 1.25rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;
