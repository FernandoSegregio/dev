import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${(props) => props.theme.background};
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
  @media(max-width: 800px) {
    flex-direction: column;
    column-gap: 0;
    height: (100vh -200px);
    
  div {
    display: flex;
    flex-direction: column;
    padding: 0, 0;
    align-items: center;
  }


  h3 {
    font-size: 20px;
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
