import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import FooterStyle from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';

export default function Footer() {
  const { language, theme } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <FooterStyle>
        <h4>
          {language === 'pt-BR'
            ? languageData.textFooter.pt
            : languageData.textFooter.en}
          <span className="heart"> 💜 </span>
          <span className="coffee">☕ </span>
        </h4>
      </FooterStyle>
    </ThemeProvider>
  );
}
