import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import PortfolioProvider from './context/PortfolioProvider';
import GlobalStyle from './style/GlobalStyle';
import SectionAbout from './components/section/SectionAbout';
import SectionSkills from './components/section/SectionSkills';
import SectionContact from './components/section/SectionContact';
import SectionProjects from './components/section/SectionProjects';

function App() {
  return (
    <PortfolioProvider>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
