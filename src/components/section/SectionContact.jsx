import React, {
  useContext,
} from 'react';
import { ThemeProvider } from 'styled-components';
import PortfolioContext from '../../context/PortfolioContext';
import { dark, light } from '../../style/theme/theme';
import contactData from '../../support/contactData';
import languageData from '../../support/languageData';
import { SectionContactsStyle } from './style';

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
      </SectionContactsStyle>
    </ThemeProvider>
  );
}
