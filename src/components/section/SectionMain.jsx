import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import PortfolioContext from '../../context/PortfolioContext';
import photo from '../../images/photo.png';
import { ImageMain, Section } from './style';
import languageData from '../../support/languageData';
import { dark, light } from '../../style/theme/theme';

export default function SectionMain() {
  const { language, theme } = useContext(PortfolioContext);

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <Section>
        <div>
          <h3>
            {language === 'pt-BR'
              ? languageData.greetingTitle.pt
              : languageData.greetingTitle.en}
          </h3>
          <h3 className="name-title1">{languageData.firstNameTitle.pt}</h3>
          <h3 className="name-title2">{languageData.lastNameTitle.pt}</h3>
          <h3 className="occupation">
            {language === 'pt-BR'
              ? languageData.occupationTitle.pt
              : languageData.occupationTitle.en}
          </h3>
        </div>
        <ImageMain src={photo} alt="Foto Fernando Segregio" />
      </Section>
    </ThemeProvider>
  );
}
