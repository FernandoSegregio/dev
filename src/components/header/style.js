import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 20px;
  padding-top: 2%;
  width: 100vw;

  li {
    font-weight: 500;
    list-style: none;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 70%;
    justify-content: space-evenly;
  }

  button {
    display: flex;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.text};
    font-size: 20px;
    width: 10%;
  }
  .logo {
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 25px;
    font-weight: 700;
    animation: changeLogoColor 8s infinite;
  }

  @keyframes changeLogoColor {
    0% {
      background-image: linear-gradient(to right, #007cf0, #00dfd8);
      color: black;
      background-clip: text;
      -webkit-background-clip: text;

      -webkit-text-fill-color: transparent;
    }
    100% {
      background-image: linear-gradient(to right, #7928ca, #ff0080);
    }
  }

  @media(max-width: 800px) {
    padding-top: 0;
  .logo {
    visibility: hidden;
  }
  
  button {
    justify-content: center;
  } 
}
`;

export const FlagStyle = styled.div`
  display: flex;
  width: 20%;
  justify-content: center;
  column-gap: 5%;
`;
