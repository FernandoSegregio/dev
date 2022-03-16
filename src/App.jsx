import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import SectionAbout from './components/section/SectionAbout';
import SectionSkills from './components/section/SectionSkills';
import SectionContact from './components/section/SectionContact';
import SectionProjects from './components/section/SectionProjects';
import { dark, light } from './style/theme/theme';
import PortfolioContext from './context/PortfolioContext';
import GlobalStyle from './style/GlobalStyle';

function App() {
  const { theme } = useContext(PortfolioContext);
  return (

    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <GlobalStyle />
      <Header />
      <Main />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionContact />
      <Footer />
    </ThemeProvider>

  );
}

export default App;
