import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 12px;
  width: 100%;
  padding: 20px;

  h4 {
    font-family: sans-serif;
    font-weight: 300;
    letter-spacing: 0.3px;
  }

  .heart {
    animation: changeHeartColor 8s infinite;
  }

  .coffee {
    font-size: 14px;
  }

  @keyframes changeHeartColor {
    0% {
      background-image: linear-gradient(to right, #007cf0, #00dfd8);
      color: black;
      background-clip: text;
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
    100% {
      background-image: linear-gradient(to right, #7928ca, #ff0080);
      color: black;
      background-clip: text;
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 800px) {
    padding: 15px;
    
    h4 {
      text-align: center;
    }
  }

`;

export default FooterStyle;
