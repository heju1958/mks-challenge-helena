import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    background-color: var(--grey-0);
  }
  ol,
  ul {
    list-style: none;
  }
  body,
  html {
    width: 100%;
    height: 100vh;
  }
  body,
  input,
  button,
  textarea,
  select,
  ::placeholder {
    font-family: 'Inter', sans-serif;
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    color: var(--grey-4);
  }
  button:hover{
    cursor: pointer;
  }
`;

export default GlobalStyle;
