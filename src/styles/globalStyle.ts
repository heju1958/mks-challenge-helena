import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #4EAB3F;
    --grey-0: #f9f9f9;
    --grey-1: #f0f0f0;
    --grey-2: #cecece;
    --grey-3: #A39F9F;
    --grey-4: #212121;
    --shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
  }
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
  *::-webkit-scrollbar {
    width: 0.5rem;
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
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    color: var(--grey-4);
    background-color: var(--grey-0);
  }
  button:hover{
    cursor: pointer;
  }
  
`;

export default GlobalStyle;
