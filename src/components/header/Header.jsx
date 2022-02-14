import React, { useContext } from 'react';
import { IoMdMoon as Moon } from 'react-icons/io';
import { FiSun as Sun } from 'react-icons/fi';
import brazil from '../../images/brazil-circle.svg';
import EUA from '../../images/EUA-circle.svg';
import PortfolioContext from '../../context/PortfolioContext';
import { HeaderStyle, FlagStyle } from './style';
import languageData from '../../support/languageData';

const titleHeader = '<NandoDev/>';

export default function Header() {
  const {
    theme,
    setTheme,
    language,
    setLanguage,
  } = useContext(PortfolioContext);

  function alterTheme() {
    if (theme) {
      setTheme(false);
    } if (!theme) {
      setTheme(true);
    }
  }

  return (
    <HeaderStyle>
      <nav>
        <li>
          { titleHeader }
        </li>
        <li>{ language === 'pt-BR' ? languageData.titleNav1.pt : languageData.titleNav1.en }</li>
        <li>{ language === 'pt-BR' ? languageData.titleNav2.pt : languageData.titleNav2.en }</li>
        <li>{ language === 'pt-BR' ? languageData.titleNav3.pt : languageData.titleNav3.en }</li>
        <li>{ language === 'pt-BR' ? languageData.titleNav4.pt : languageData.titleNav4.en }</li>
      </nav>
      <button
        type="button"
        onClick={() => alterTheme()}
        className="button-visible"
      >
        { theme
          ? <Sun />
          : <Moon className="theme-dark" />}
      </button>
      <FlagStyle>
        <input
          type="image"
          value="pt-BR"
          onClick={(e) => setLanguage(e.target.value)}
          src={brazil}
          alt={language === 'pt-BR'
            ? languageData.altFlagBrazil.pt
            : languageData.altFlagBrazil.en}
          width="25px"
          height="25px"
        />
        <input
          type="image"
          value="en-US"
          onClick={(e) => setLanguage(e.target.value)}
          src={EUA}
          alt={language === 'pt-BR'
            ? languageData.altFlagEUA.pt
            : languageData.altFlagEUA.en}
          width="25px"
          height="25px"
        />
      </FlagStyle>
    </HeaderStyle>
  );
}
