import React, { useContext, useRef } from 'react';
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
      }, (error) => {
        console.log(error.text);
      });
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
                  type="text"
                  id="name"
                  name="user_name"
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
                  name="user_email"
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
            <ButtonSubmitContact type="reset">
              {language === 'pt-BR'
                ? languageData.textButtonClear.pt
                : languageData.textButtonClear.en}
            </ButtonSubmitContact>
            <ButtonSubmitContact type="submit" value="Send">
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
