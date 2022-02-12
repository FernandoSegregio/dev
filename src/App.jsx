import React from 'react';
import Header from './components/header/Header';
import SectionMain from './components/section/SectionMain';
import PortfolioProvider from './context/PortfolioProvider';
import GlobalStyles from './style/GlobalStyles';

function App() {
  return (
    <PortfolioProvider>
      <GlobalStyles />
      <Header />
      <SectionMain />
    </PortfolioProvider>
  );
}

export default App;
