import React, { useContext, useEffect } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function SectionMain() {
  const {
    language,
  } = useContext(PortfolioContext);

  const languageUser = () => language;

  useEffect(() => {
    languageUser();
  }, [
    language,
  ]);

  const languageObject = {
    greetingTitle: { pt: 'Olá, eu sou', en: 'Hi, I am' },
    nameTitle: { pt: 'Fernando Segregio' },
    occupationTitle: {
      pt: 'Desenvolvedor Front-end',
      en: 'Front-end Developer',
    },
  };

  return (
    <section>
      <h3>{ language === 'pt-BR' ? languageObject.greetingTitle.pt : languageObject.greetingTitle.en }</h3>
      <h3>{ languageObject.nameTitle.pt }</h3>
      <h3>{ language === 'pt-BR' ? languageObject.occupationTitle.pt : languageObject.occupationTitle.en }</h3>
    </section>
  );
}
