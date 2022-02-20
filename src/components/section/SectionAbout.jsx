import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionAboutStyle } from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';

export default function SectionAbout() {
  const { language, theme } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <SectionAboutStyle>
        <h3 className="about">
          {language === 'pt-BR'
            ? languageData.titleNav1.pt
            : languageData.titleNav1.en}
        </h3>
        <p>
          {language === 'pt-BR'
            ? languageData.textAbout.pt
            : languageData.textAbout.en}
        </p>
      </SectionAboutStyle>
    </ThemeProvider>
  );
}
