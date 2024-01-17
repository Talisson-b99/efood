import { createGlobalStyle } from "styled-components";

export const Cores = {
  laranja: '#FFF8F2',
  laranjaEscuro: '#E66767',
  samao: '#FFEBD9',
  branco: '#fff'
}

export const Globalcss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.laranja};
  }

  button {
    cursor: pointer
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;

  }
`