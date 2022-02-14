import React, { useContext, useEffect } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import photo from '../../images/photo.png';
import { ImageMain, Section } from './style';

export default function SectionMain() {
  const { language, theme } = useContext(PortfolioContext);

  const languageUser = () => language;

  useEffect(() => {
    languageUser();
  }, [language]);

  const languageObject = {
    greetingTitle: { pt: 'Olá, eu sou', en: 'Hi, I am' },
    firstNameTitle: { pt: 'Fernando' },
    lastNameTitle: { pt: 'Segregio' },
    occupationTitle: {
      pt: 'Desenvolvedor Web Front-end',
      en: 'Front-end Web Developer',
    },
  };

  return (
    <Section>
      <div>
        <h3>
          {language === 'pt-BR'
            ? languageObject.greetingTitle.pt
            : languageObject.greetingTitle.en}
        </h3>
        <h3 className="name-title1">{languageObject.firstNameTitle.pt}</h3>
        <h3 className="name-title2">{languageObject.lastNameTitle.pt}</h3>
        <h3>
          {language === 'pt-BR'
            ? languageObject.occupationTitle.pt
            : languageObject.occupationTitle.en}
        </h3>
      </div>
      <ImageMain src={photo} alt="Foto Fernando Segregio" />
    </Section>
  );
}
