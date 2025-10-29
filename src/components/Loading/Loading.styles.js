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
  height: 50vh; /* ocupa metade da tela no mobile */
  text-align: center;
  padding: 25rem;

  @media (min-width: 768px) {
    height: 200px;
    padding: 4rem;
  }
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2);
  border-top: 4px solid #14a085;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const LoadingText = styled.p`
  color: #14a085;
  font-size: 1.325rem;

  @media (min-width: 768px) {
    font-size: 1.325rem;
  }
`;
