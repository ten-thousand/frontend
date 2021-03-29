import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    border: 0;
    cursor: pointer;

    &:focus {
      outline: 0;
    }
  }

  input {
    border: 0;

    &:focus {
      outline: 0;
    }
  }

  * {
    box-sizing: border-box;
  }
`;
