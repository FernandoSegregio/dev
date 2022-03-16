import React, { useContext } from 'react';
import { SectionAboutStyle } from './style';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';
// import SectionAboutPhotos from './SectionAboutPhotos';

export default function SectionAbout() {
  const { language } = useContext(PortfolioContext);
  return (
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
  );
}
