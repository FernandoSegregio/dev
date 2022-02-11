import React from 'react';
import Header from './components/Header';
import SectionMain from './components/SectionMain';
import PortfolioProvider from './context/PortfolioProvider';

function App() {
  return (
    <PortfolioProvider>
      <Header />
      <SectionMain />
    </PortfolioProvider>
  );
}

export default App;
