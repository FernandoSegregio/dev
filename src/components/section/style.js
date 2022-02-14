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
  }

  .name-title2 {
    font-size: 130px;
    font-weight: 800;
    letter-spacing: -5px;
    margin-bottom: 3%;
  }

`;

export const ImageMain = styled.img`
   width: 265px; 
   border-radius: 90px; 
`;
