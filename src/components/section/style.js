import styled from 'styled-components';

export const SectionAboutStyle = styled.section`
  text-align: justify;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 20px;
  width: 100%;
  font-weight: 300;
  padding: 10px 85px;

  h3 {
    font-size: 40px;
    font-family: sen;
    padding-bottom: 30px;
  }

  @media (max-width: 800px) {
    padding: 10px 33px;

    h3 {
      font-size: 30px;
    }
  }
`;

export const SectionSkillsStyle = styled.section`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100%;
  padding: 80px 85px;
  
  div {
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 40px;
    font-family: sen;
    padding-bottom: 30px;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 100px;
    height: 100px;
    margin: 20px;
  }

  @media (max-width: 800px) {
    padding: 10px 33px;

    h3 {
      font-size: 30px;
    }

    img {
      width: 45px;
      height: 45px;
      margin: 10px;
    }
  }
`;
