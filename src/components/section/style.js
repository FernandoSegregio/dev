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

  h5 {
    font-size: 25px;
    font-family: sen;
    padding-top: 30px;
    /* writing-mode: vertical-rl;
    transform: rotate(180deg); */
    /* position: relative;  */
    top: 122px;
    left: -4%;
  }

  .soft {
    column-gap: 2%;
  }

  @media (max-width: 800px) {
    padding: 36px 40px;

    h3 {
      font-size: 30px;
      padding-bottom: 10px;
    }

    div {
    display: flex;
    justify-content: center;
    padding-top: 10px;
    }


    img {
      width: 45px;
      height: 45px;
      margin: 10px;
    }

    p {
      font-size: 12px;
      text-align: center;
    }

    h5 {
      font-size: 15px;
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
    flex-direction: column;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  .form {
    column-gap: 60px;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  input {
    margin-top: 1%;
    width: 100%;
    height: 40px;
    background-color: ${(props) => props.theme.backForms};
    border: 1px solid ${(props) => props.theme.border};
    font-family: sans-serif;
    font-size: 16px;
    border-radius: 3px;
    color: var(--antiwhite);
    padding: 5px 10px;
  }

  textarea {
    height: 168px;
    margin-top: 1%;
    width: 100%;
    background-color: ${(props) => props.theme.backForms};
    font-family: sans-serif;
    font-size: 17px;
    resize: none;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 3px;
    color: var(--antiwhite);
    padding: 5px 10px;
  }

  .button-form {
    width: 100vw;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    column-gap: 33%;
  }

  @media (max-width: 800px) {
    padding: 36px 33px;

    h3 {
      font-size: 30px;
    }
    .form {
      flex-direction: column;
      row-gap: 16px;
    }

    div {
      width: 100%;
    }

    .button-form {
      column-gap: 14%;
    }
  }
`;

export const ButtonSubmitContact = styled.button`
  background-color: ${(props) => props.theme.backForms};
  color: ${(props) => props.theme.textButton};
  border-radius: 3px;
  width: 20%;
  height: 20%;
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.border};
  font-size: 17px;
  padding: 1%;
  margin-top: 1%;
  font-weight: normal;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 8px;
  }
`;
