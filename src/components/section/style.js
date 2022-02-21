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
    padding: 36px 33px;

    h3 {
      font-size: 30px;
    }

    img {
      width: 45px;
      height: 45px;
      margin: 10px;
    }

    p {
      font-size: 12px;
    }
  }
`;

export const SectionContactsStyle = styled.section`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100%;
  padding: 80px 85px;

  h3 {
    font-size: 40px;
    font-family: sen;
    padding-bottom: 30px;
  }

  form {
    display: flex;
    column-gap: 60px;
    row-gap: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
    row-gap: 20px;
  }

  input {
    margin-top: 1%;
    width: 100%;
    height: 40px;
    background-color: #504c4ce8;
    border: none;
    font-family: sans-serif;
    font-size: 16px;
    border-radius: 3px;
    color: var(--antiwhite);
    padding: 5px 10px;
  }

  textarea {
    height: 210px;
    margin-top: 1%;
    width: 100%;
    background-color: #504c4ce8;
    font-family: sans-serif;
    font-size: 17px;
    resize: none;
    border: none;
    border-radius: 3px;
    color: var(--antiwhite);
    padding: 5px 10px;
  }

  @media (max-width: 800px) {
    padding: 36px 33px;

    h3 {
      font-size: 30px;
    }
    form {
      flex-direction: column;
      row-gap: 16px;
    }

    div {
      width: 100%
    }

  }
`;

export const ButtonSubmitContact = styled.button`
  color: #504c4ce8;
  width: 25%;
  font-size: 18px;
  padding: 1%;
  border: 1px solid '#302d2de8';
  border-radius: 3px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;

  button {
    background-color: '#949292';
  }

  @media (max-width: 800px) {
    font-size: 12px;
  }

`;
