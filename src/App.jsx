import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PortfolioProvider from './context/PortfolioProvider';
import GlobalStyle from './style/GlobalStyle';
import SectionAbout from './components/section/SectionAbout';

function App() {
  return (
    <PortfolioProvider>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionAbout />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
