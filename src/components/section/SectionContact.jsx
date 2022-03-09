import React, {
  useContext, useRef, useState, useEffect,
} from 'react';
import { ThemeProvider } from 'styled-components';
import emailjs from '@emailjs/browser';
import { ButtonSubmitContact, SectionContactsStyle } from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';
import contactData from '../../support/contactData';

export default function SectionContact() {
  const { language, theme } = useContext(PortfolioContext);
  const form = useRef();
  const REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [disabledReset, setDisabledReset] = useState(true);

  function verifyInputs() {
    if (!name || !email || !subject || !message) return true;
    if (name.length < 3) return true;
    if (!REGEX_EMAIL.test(email)) return true;
    if (subject.length < 5) return true;
    if (message.length < 5) return true;

    return false;
  }

  function verifyInputsValue() {
    if (name || email || subject || message) return false;
    return true;
  }

  useEffect(() => {
    setDisabled(verifyInputs());
    setDisabledReset(verifyInputsValue());
  }, [name, email, subject, message]);

  function resetForm() {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const {
      VITE_YOUR_SERVICE_ID,
      VITE_YOUR_TEMPLATE_ID,
      VITE_YOUR_USER_ID,
    } = import.meta.env;

    emailjs
      .sendForm(
        VITE_YOUR_SERVICE_ID,
        VITE_YOUR_TEMPLATE_ID,
        form.current,
        VITE_YOUR_USER_ID,
      )
      .then((result) => {
        console.log(result.text);
        alert('Email enviado com sucesso');
      }, (error) => {
        console.log(error.text);
      });
    resetForm();
  };

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <SectionContactsStyle>
        <h3 className="contact">
          {language === 'pt-BR'
            ? languageData.titleNav4.pt
            : languageData.titleNav4.en}
        </h3>
        <div className="container-contact-icon">
          {contactData.map((contact) => (
            <a
              href={contact.end}
              key={contact.class}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>
                <img
                  src={contact.img}
                  alt={contact.img}
                  className={contact.class}
                />
                {contact.img2 && (
                  <img
                    src={contact.img2}
                    alt={contact.img2}
                    className={contact.class2}
                  />
                )}
              </span>
            </a>
          ))}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form">
            <div>
              <label htmlFor="name">
                {language === 'pt-BR'
                  ? languageData.textLabelName.pt
                  : languageData.textLabelName.en}
                <input
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                  type="text"
                  id="name"
                  name="userName"
                  placeholder={
                    language === 'pt-BR'
                      ? languageData.textInputName.pt
                      : languageData.textInputName.en
                  }
                />
              </label>
              <label htmlFor="email">
                Email:
                <input
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                  name="from_name"
                  type="email"
                  id="email"
                  placeholder={
                    language === 'pt-BR'
                      ? languageData.textInputEmail.pt
                      : languageData.textInputEmail.en
                  }
                />
              </label>
              <label htmlFor="subject">
                {language === 'pt-BR'
                  ? languageData.textLabelSubject.pt
                  : languageData.textLabelSubject.en}
                <input
                  value={subject}
                  onChange={({ target }) => setSubject(target.value)}
                  name="message"
                  type="text"
                  id="subject"
                  placeholder={
                    language === 'pt-BR'
                      ? languageData.textInputSubject.pt
                      : languageData.textInputSubject.en
                  }
                />
              </label>
            </div>
            <div>
              <label htmlFor="text-contact">
                {language === 'pt-BR'
                  ? languageData.textLabelMsg.pt
                  : languageData.textLabelMsg.en}
                <textarea
                  value={message}
                  onChange={({ target }) => setMessage(target.value)}
                  name="message"
                  id="text-contact"
                  rows={9}
                  spellheck="true"
                  placeholder={
                    language === 'pt-BR'
                      ? languageData.textInputMsg.pt
                      : languageData.textInputMsg.en
                  }
                />
              </label>
            </div>
          </div>
          <div className="button-form">
            <ButtonSubmitContact
              type="reset"
              onClick={() => resetForm()}
              disabled={disabledReset}
            >
              {language === 'pt-BR'
                ? languageData.textButtonClear.pt
                : languageData.textButtonClear.en}
            </ButtonSubmitContact>
            <ButtonSubmitContact type="submit" value="Send" disabled={disabled}>
              {language === 'pt-BR'
                ? languageData.textButtonEnv.pt
                : languageData.textButtonEnv.en}
            </ButtonSubmitContact>
          </div>
        </form>
      </SectionContactsStyle>
    </ThemeProvider>
  );
}
