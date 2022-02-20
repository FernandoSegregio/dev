import styled from 'styled-components';

const SectionAboutStyle = styled.section`
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
    
  }

`;

export default SectionAboutStyle;
