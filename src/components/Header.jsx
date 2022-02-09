import React, { useState } from 'react';
import brazil from '../images/brazil-circle.svg';
import EUA from '../images/EUA-circle.svg';

export default function Header() {
  const [language, setLanguage] = useState(navigator.language);

  const languageObject = {
    titleNav1: { pt: 'Sobre', en: 'About' },
    titleNav2: { pt: 'Projetos', en: 'Projects' },
    titleNav3: { pt: 'Habilidades', en: 'Skills' },
    titleNav4: { pt: 'Contato', en: 'Contact' },
    altFlagBrazil: { pt: 'Bandeira Brasil', en: 'Flag Brazil' },
    altFlagEUA: { pt: 'Bandeira EUA', en: 'Flag EUA' },
  };

  return (
    <header>
      <nav>
        <h3>{ language === 'PT-BR' ? languageObject.titleNav1.pt : languageObject.titleNav1.en }</h3>
        <h3>{ language === 'PT-BR' ? languageObject.titleNav2.pt : languageObject.titleNav2.en }</h3>
        <h3>{ language === 'PT-BR' ? languageObject.titleNav3.pt : languageObject.titleNav3.en }</h3>
        <h3>{ language === 'PT-BR' ? languageObject.titleNav4.pt : languageObject.titleNav4.en }</h3>
      </nav>
      <div>
        <input
          type="image"
          value="PT-BR"
          onClick={(e) => setLanguage(e.target.value)}
          src={brazil}
          alt={language === 'PT-BR'
            ? languageObject.altFlagBrazil.pt
            : languageObject.altFlagBrazil.en}
        />
        <input
          type="image"
          value="EN-US"
          onClick={(e) => setLanguage(e.target.value)}
          src={EUA}
          alt={language === 'PT-BR'
            ? languageObject.altFlagEUA.pt
            : languageObject.altFlagEUA.en}
        />
      </div>
    </header>
  );
}
