import styled, { keyframes } from 'styled-components';

const changeTitleColor2 = keyframes`
  0% {
    background-image: linear-gradient(to right, #007cf0, #00dfd8);
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  100% {
    color: #a0a0a0;

  }
`;

const changeTitleColor1 = keyframes`

0% {
  color: #a0a0a0; 
}

100% {
  background-image: linear-gradient(to right, #7928ca, #ff0080);
  color: black;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
`;

export const MainStyled = styled.main`
  color: ${(props) => props.theme.text};
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  column-gap: 60px;

  div {
    padding: 0 20px;
  }

  h3 {
    font-size: 40px;
  }

  .occupation {
    font-family: sen;
  }

  .name-title1 {
    font-size: 130px;
    font-weight: 800;
    margin-bottom: -50px;
    width: 580px;
    letter-spacing: -5px;
    animation-name: ${changeTitleColor1};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    -webkit-animation-name: ${changeTitleColor1};
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-delay: -10.5s;
    -webkit-animation-delay: -10.5s;
  }

  .name-title2 {
    font-size: 130px;
    font-weight: 800;
    letter-spacing: -5px;
    margin-bottom: 3%;
    animation-name: ${changeTitleColor2};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    -webkit-animation-name: ${changeTitleColor2};
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    animation-delay: -10.5s;
    -webkit-animation-delay: -10.5s;
  }

  
  @media (max-width: 800px) {
    flex-direction: column;
    column-gap: 0;
    height: 600px;

    div {
      display: flex;
      flex-direction: column;
      padding: 0;
      align-items: center;
    }

    h3 {
      font-size: 18px;
      width: 300px;
    }

    .occupation {
      font-family: sen;
    }

    .name-title1 {
      font-size: 55px;
      font-weight: 700;
      margin-bottom: -15px;
      letter-spacing: -2px;
      width: 300px;
    }

    .name-title2 {
      font-size: 55px;
      font-weight: 700;
      letter-spacing: -2px;
    }
  }
`;

export const ImageMain = styled.img`
  width: 265px;
  border-radius: 90px;

  @media (max-width: 800px) {
    width: 180px;
  }
`;
