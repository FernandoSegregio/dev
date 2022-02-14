import React, { useContext, useEffect } from 'react';
import PortfolioContext from '../../context/PortfolioContext';
import photo from '../../images/photo.png';

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
      pt: 'Desenvolvedor Web Front-end',
      en: 'Front-end Web Developer',
    },
  };

  return (
    <section style={theme ? {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: '20px',
    } : {
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
        <h3 style={{ fontSize: '40px' }}>{ language === 'pt-BR' ? languageObject.greetingTitle.pt : languageObject.greetingTitle.en }</h3>
        <h3
          className="name-title1"
          style={
          {
            fontSize: '130px', fontWeight: '800', marginBottom: '-50px', width: '580px', letterSpacing: '-5px',
          }
}
        >
          { languageObject.firstNameTitle.pt }

        </h3>
        <h3
          className="name-title2"
          style={{
            fontSize: '130px', fontWeight: '800', letterSpacing: '-5px',
          }}
        >
          { languageObject.lastNameTitle.pt }

        </h3>
        <h3 style={{ fontSize: '30px', marginTop: '3%' }}>{ language === 'pt-BR' ? languageObject.occupationTitle.pt : languageObject.occupationTitle.en }</h3>
      </div>
      <div>
        <img src={photo} alt="" style={{ width: '265px', borderRadius: '90px' }} />
      </div>
    </section>
  );
}
