import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export default function PortfolioProvider({ children }) {
  const languageUser = navigator.language;
  const themeUser = window.matchMedia('(prefers-color-scheme: dark)');
  const themeUserCollor = themeUser.matches ? 'dark' : 'light';

  const [theme, setTheme] = useState(themeUserCollor);
  const [language, setLanguage] = useState(languageUser);

  const context = { language, setLanguage, theme, setTheme };

  return (
    <PortfolioContext.Provider value={context}>
      {children}
    </PortfolioContext.Provider>
  );
}
PortfolioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
