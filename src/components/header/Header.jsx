import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoIosArrowBack as ArrowBack, IoIosArrowForward as ArrowForward } from 'react-icons/io';
import { FiSun as Sun } from 'react-icons/fi';
import brazil from '../../images/brazil-circle.svg';
import EUA from '../../images/EUA-circle.svg';
import PortfolioContext from '../../context/PortfolioContext';
import { HeaderStyle } from './style';

export default function Header() {
  const {
    theme,
    setTheme,
    language,
    setLanguage,
  } = useContext(PortfolioContext);

  const languageObject = {
    titleNav1: { pt: 'Sobre', en: 'About' },
    titleNav2: { pt: 'Projetos', en: 'Projects' },
    titleNav3: { pt: 'Habilidades', en: 'Skills' },
    titleNav4: { pt: 'Contato', en: 'Contact' },
    altFlagBrazil: { pt: 'Bandeira Brasil', en: 'Flag Brazil' },
    altFlagEUA: { pt: 'Bandeira EUA', en: 'Flag EUA' },
  };

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
        <li style={{ display: 'flex', alignItems: 'flex-end' }}>
          <ArrowBack />
          NandoDev/
          <ArrowForward />
        </li>
        <li>{ language === 'pt-BR' ? languageObject.titleNav1.pt : languageObject.titleNav1.en }</li>
        <li>{ language === 'pt-BR' ? languageObject.titleNav2.pt : languageObject.titleNav2.en }</li>
        <li>{ language === 'pt-BR' ? languageObject.titleNav3.pt : languageObject.titleNav3.en }</li>
        <li>{ language === 'pt-BR' ? languageObject.titleNav4.pt : languageObject.titleNav4.en }</li>
      </nav>
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
            ? <Sun style={{ color: 'white', fontSize: '20px' }} className="theme-clean" />
            : <Moon style={{ fontSize: '20px' }} className="theme-dark" />}
        </button>
      </div>
      <div style={{
        display: 'flex',
        width: '20%',
        justifyContent: 'center',
      }}
      >
        <input
          type="image"
          value="pt-BR"
          onClick={(e) => setLanguage(e.target.value)}
          src={brazil}
          alt={language === 'pt-BR'
            ? languageObject.altFlagBrazil.pt
            : languageObject.altFlagBrazil.en}
          width="25px"
          height="25px"
          style={{ marginRight: '5%' }}
        />
        <input
          type="image"
          value="en-US"
          onClick={(e) => setLanguage(e.target.value)}
          src={EUA}
          alt={language === 'pt-BR'
            ? languageObject.altFlagEUA.pt
            : languageObject.altFlagEUA.en}
          width="25px"
          height="25px"
        />
      </div>
    </HeaderStyle>
  );
}
