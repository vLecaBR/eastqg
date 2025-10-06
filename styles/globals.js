import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}


  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--color-foreground, #1f2937);
    background-color: var(--color-background, #ffffff);
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  #root {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Scrollbar customizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #0d7377;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #14a085;
  }

  /* Variáveis de tema */
  :root {
    --color-background: #ffffff;
    --color-foreground: #1f2937;
    --color-primary: #0d7377;
    --color-primary-hover: #14a085;
    --color-card: #ffffff;
    --color-card-foreground: #1f2937;
  }

  .dark {
    --color-background: #1f2937;
    --color-foreground: #f9fafb;
    --color-primary: #14a085;
    --color-primary-hover: #0d7377;
    --color-card: #27272a;
    --color-card-foreground: #f9fafb;
  }

  /* Tipografia base */
  h1 { font-size: 2.5rem; font-weight: 600; }
  h2 { font-size: 2rem; font-weight: 600; }
  h3 { font-size: 1.5rem; font-weight: 600; }
  p, label, input, button { font-size: 1rem; }
`;

export default GlobalStyles;
