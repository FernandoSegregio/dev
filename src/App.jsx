import React from 'react';
import Header from './components/header/Header';
import SectionMain from './components/section/SectionMain';
import PortfolioProvider from './context/PortfolioProvider';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <PortfolioProvider>
      <GlobalStyle />
      <Header />
      <SectionMain />
    </PortfolioProvider>
  );
}

export default App;
