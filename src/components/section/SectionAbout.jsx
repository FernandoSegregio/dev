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
      <div>
        <p>
          {language === 'pt-BR'
            ? languageData.titleAbout.pt
            : languageData.titleAbout.en}
          {language === 'pt-BR'
            ? languageData.about0.pt
            : languageData.about0.en}
          <a href={languageData.linkTrybe}>
            <strong>
              {' '}
              {language === 'pt-BR'
                ? languageData.trybe.pt
                : languageData.trybe.en}

            </strong>
          </a>
        </p>
        <p>
          {language === 'pt-BR'
            ? languageData.about1.pt
            : languageData.about1.en}
        </p>
        <p>
          {language === 'pt-BR'
            ? languageData.about2.pt
            : languageData.about2.en}
        </p>
        {/* <p>
          {language === 'pt-BR'
            ? languageData.about3.pt
            : languageData.about3.en}
          <a href={languageData.linkTrybe}>
            <strong>
              {' '}
              {language === 'pt-BR'
                ? languageData.trybe.pt
                : languageData.trybe.en}

            </strong>
          </a>
        </p> */}
        <p>
          {language === 'pt-BR'
            ? languageData.about4.pt
            : languageData.about4.en}
        </p>
        <p>
          {language === 'pt-BR'
            ? languageData.about5.pt
            : languageData.about5.en}
        </p>
      </div>
    </SectionAboutStyle>
  );
}
