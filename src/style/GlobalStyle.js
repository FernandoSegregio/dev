import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root{
    --antiwhite: #faebd7;
    --aqua: #00DFD8;
    --black: #000000e8;
    --blue:  #007CF0;
    --pink:  #FF0080;
    --purple: #7928CA;
    --white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: inter, -apple-system, 'Roboto', 'Ubuntu', sans-serif;
    background-color: ${(props) => props.theme.background};;
    width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
  @media (max-width: 800px) { 
    body {
      width: 100%;
    }
  }


`;

export default GlobalStyles;
