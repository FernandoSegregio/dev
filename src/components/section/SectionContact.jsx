import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ButtonSubmitContact, SectionContactsStyle } from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';

export default function SectionContact() {
  const { language, theme } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <SectionContactsStyle>
        <h3 className="contact">
          {language === 'pt-BR'
            ? languageData.titleNav4.pt
            : languageData.titleNav4.en}
        </h3>
        <form>
          <div className="form">
            <div>
              <label htmlFor="name">
                {language === 'pt-BR'
                  ? languageData.textLabelName.pt
                  : languageData.textLabelName.en}
                <input
                  type="text"
                  id="name"
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
            <ButtonSubmitContact type="submit">
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
