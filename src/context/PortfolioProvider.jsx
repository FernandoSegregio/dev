import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PortfolioContext from './PortfolioContext';

export default function PortfolioProvider({ children }) {
  const themeUser = window.matchMedia('(prefers-color-scheme: dark)');
  const languageUser = navigator.language;

  const [language, setLanguage] = useState(languageUser);
  const [theme, setTheme] = useState(themeUser.matches);

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
