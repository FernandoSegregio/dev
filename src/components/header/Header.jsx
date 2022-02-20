import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { IoMdMoon as Moon } from 'react-icons/io';
import { FiSun as Sun } from 'react-icons/fi';
import { Link } from 'react-scroll';
import brazil from '../../images/brazil-circle.svg';
import EUA from '../../images/EUA-circle.svg';
import PortfolioContext from '../../context/PortfolioContext';
import { HeaderStyle, FlagStyle } from './style';
import languageData from '../../support/languageData';
import { dark, light } from '../../style/theme/theme';
import DropdownMenuHamb from './Hamburguer';

const titleHeader = '< NandoDev />';

export default function Header() {
  const {
    theme, setTheme, language, setLanguage,
  } = useContext(PortfolioContext);

  function alterTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      {DropdownMenuHamb()}
      <HeaderStyle>
        <nav className="nav">
          <ul>
            <li className="logo">{titleHeader}</li>
            <Link to="about" spy smooth offset={-50} duration={5000}>
              <li>
                {language === 'pt-BR'
                  ? languageData.titleNav1.pt
                  : languageData.titleNav1.en}
              </li>
            </Link>
            <li>
              {language === 'pt-BR'
                ? languageData.titleNav2.pt
                : languageData.titleNav2.en}
            </li>
            <Link to="skills" spy smooth offset={-50} duration={5000}>
              <li>
                {language === 'pt-BR'
                  ? languageData.titleNav3.pt
                  : languageData.titleNav3.en}
              </li>
            </Link>
            <li>
              {language === 'pt-BR'
                ? languageData.titleNav4.pt
                : languageData.titleNav4.en}
            </li>
          </ul>
        </nav>
        <button
          type="button"
          onClick={() => alterTheme()}
          className="button-visible"
        >
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
        <FlagStyle>
          <input
            type="image"
            value="pt-BR"
            onClick={(e) => setLanguage(e.target.value)}
            src={brazil}
            alt={
              language === 'pt-BR'
                ? languageData.altFlagBrazil.pt
                : languageData.altFlagBrazil.en
            }
            width="25px"
            height="25px"
          />
          <input
            type="image"
            value="en-US"
            onClick={(e) => setLanguage(e.target.value)}
            src={EUA}
            alt={
              language === 'pt-BR'
                ? languageData.altFlagEUA.pt
                : languageData.altFlagEUA.en
            }
            width="25px"
            height="25px"
          />
        </FlagStyle>
      </HeaderStyle>
    </ThemeProvider>
  );
}
