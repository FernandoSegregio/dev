import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  column-gap: 20px;

  div {
    padding: 0 20px;
  }

  h3 {
    font-size: 40px;
  }

  .name-title1 {
    font-size: 130px;
    font-weight: 800;
    margin-bottom: -50px;
    width: 580px;
    letter-spacing: -5px;
    animation: changeTitleColor1 8s infinite;
  }

  .name-title2 {
    font-size: 130px;
    font-weight: 800;
    letter-spacing: -5px;
    margin-bottom: 3%;
    animation: changeTitleColor2 8s infinite;
  }

  @keyframes changeTitleColor1 {
    0% {
      background-image: linear-gradient(to right, #007cf0, #00dfd8);
      color: black;
      background-clip: text;
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
    70% {
      color: #faebd7;
    }

    80% {
      color: #ffffff;
    }

    100% {
      color: white;
    }
  }

  @keyframes changeTitleColor2 {
    0% {
      color: white;
    }
    20% {
      color: antiquewhite;
    }

    100% {
      background-image: linear-gradient(to right, #7928ca, #ff0080);
      color: black;
      background-clip: text;
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
  }
`;

export const ImageMain = styled.img`
  width: 265px;
  border-radius: 90px;
`;
