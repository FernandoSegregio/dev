import React, { useState } from 'react';
import { IoMdMoon as Moon } from 'react-icons/io';
import { FiSun as Sun } from 'react-icons/fi';
import brazil from '../images/brazil-circle.svg';
import EUA from '../images/EUA-circle.svg';

export default function Header() {
  const languageObject = {
    titleNav1: { pt: 'Sobre', en: 'About' },
    titleNav2: { pt: 'Projetos', en: 'Projects' },
    titleNav3: { pt: 'Habilidades', en: 'Skills' },
    titleNav4: { pt: 'Contato', en: 'Contact' },
    altFlagBrazil: { pt: 'Bandeira Brasil', en: 'Flag Brazil' },
    altFlagEUA: { pt: 'Bandeira EUA', en: 'Flag EUA' },
  };

  const themeUser = window.matchMedia('(prefers-color-scheme: dark)');

  const [language, setLanguage] = useState(navigator.language);
  const [theme, setTheme] = useState(themeUser.matches);

  function alterTheme() {
    if (theme) {
      setTheme(false);
    } if (!theme) {
      setTheme(true);
    }
  }

  return (
    <header>
      <nav>
        <h3>{ language === 'pt-BR' ? languageObject.titleNav1.pt : languageObject.titleNav1.en }</h3>
        <h3>{ language === 'pt-BR' ? languageObject.titleNav2.pt : languageObject.titleNav2.en }</h3>
        <h3>{ language === 'pt-BR' ? languageObject.titleNav3.pt : languageObject.titleNav3.en }</h3>
        <h3>{ language === 'pt-BR' ? languageObject.titleNav4.pt : languageObject.titleNav4.en }</h3>
      </nav>
      <div>
        <input
          type="image"
          value="pt-BR"
          onClick={(e) => setLanguage(e.target.value)}
          src={brazil}
          alt={language === 'pt-BR'
            ? languageObject.altFlagBrazil.pt
            : languageObject.altFlagBrazil.en}
          width="40px"
          height="40px"
        />
        <input
          type="image"
          value="en-US"
          onClick={(e) => setLanguage(e.target.value)}
          src={EUA}
          alt={language === 'pt-BR'
            ? languageObject.altFlagEUA.pt
            : languageObject.altFlagEUA.en}
          width="40px"
          height="40px"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={() => alterTheme()}
          className="button-visible"
          style={{
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          { theme
            ? <Moon className="theme-dark" />
            : <Sun className="theme-clean" /> }

        </button>
      </div>
    </header>
  );
}
