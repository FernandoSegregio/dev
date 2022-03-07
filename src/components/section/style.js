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
    column-gap: 2%;
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
    padding-top: 45px;
    margin-left: 8%;
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
  padding: 40px 85px;

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

  .contact {
    padding-bottom: 0;
  }

  .container-contact-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    column-gap: 6%;
    align-items: center;
    margin: -60px 0;
  }

  span {
    display: flex;
    column-gap: 17%;
  }

  .github-icon {
    width: 44px;
  }

  .github-icon2 {
    width: 147px;
  }

  .linkedin-icon {
    width: 206px;
  }

  .linkedin-icon2 {
    visibility: hidden;
    width: 0;
  }

  .gmail-icon {
    width: 300px;
    visibility: visible;
  }
  
  .gmail-icon2 {
    width: 0;
    visibility: hidden;
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
    color: ${(props) => props.theme.title80};  
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
    color: ${(props) => props.theme.title80};
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

    span {
      column-gap: 0;
    }

  .github-icon {
    width: 52px;
  }

  .github-icon2 {
    visibility: hidden;
    width: 0;
  }

  .linkedin-icon {
    visibility: hidden;
    width: 0;
  }

  .linkedin-icon2 {
    visibility: visible;
    width: 48px;
  }

  .gmail-icon {
    width: 0;
    visibility: hidden;
  }
  
  .gmail-icon2 {
    width: 60px;
    visibility: visible;
  }

    .button-form {
      column-gap: 8%;
    }

    .contact {
    padding-bottom: 7%;
  }

  .container-contact-icon {
    margin: 0px;
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
    font-size: 14px;
    width: 33%;
    height: 34px;
  }
`;

export const SectionProjectsStyle = styled.section`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  width: 100%;
  padding: 40px 85px;

  .card > div {
      display: flex;
      flex-direction: column;
      padding-top: 15px;
    }

  p {
    font-size: 15px;
    height: 92px;
  }

  a {
    text-decoration: none;
    font-size: 15px;
    padding: 1px;
  }

  a:visited {
    color: ${(props) => props.theme.link};
  }

  h3 {
    font-size: 40px;
    font-family: sen;
    padding-bottom: 30px;
  }

  @media (max-width: 800px) {
    padding: 36px 33px;

    h3 {
      font-size: 30px;
    }

    p {
      font-size: 14px;
      margin: 7px 0px;
    }

    .card > div {
      padding-top: 7px;
    }

  }
`;
