import React, { useContext, useEffect } from 'react';
import PortfolioContext from '../context/PortfolioContext';

export default function SectionMain() {
  const {
    language,
    theme,
  } = useContext(PortfolioContext);

  const languageUser = () => language;

  useEffect(() => {
    languageUser();
  }, [
    language,
  ]);

  const languageObject = {
    greetingTitle: { pt: 'Olá, eu sou', en: 'Hi, I am' },
    firstNameTitle: { pt: 'Fernando' },
    lastNameTitle: { pt: 'Segregio' },
    occupationTitle: {
      pt: 'Desenvolvedor Front-end',
      en: 'Front-end Developer',
    },
  };

  return (
    <section style={theme ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }}>
      <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '20%' }}>
        <h3 style={{ fontSize: '40px', marginBottom: '2%' }}>{ language === 'pt-BR' ? languageObject.greetingTitle.pt : languageObject.greetingTitle.en }</h3>
        <h3 style={{ fontSize: '115px', margin: '0' }}>{ languageObject.firstNameTitle.pt }</h3>
        <h3 style={{ fontSize: '115px', margin: '0' }}>{ languageObject.lastNameTitle.pt }</h3>
        <h3 style={{ fontSize: '30px' }}>{ language === 'pt-BR' ? languageObject.occupationTitle.pt : languageObject.occupationTitle.en }</h3>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </section>
  );
}
