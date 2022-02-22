import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionProjectsStyle } from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';
import projects from '../../support/projectsData';

export default function SectionProjects() {
  const { language, theme } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <SectionProjectsStyle>
        <h3 className="contact">
          {language === 'pt-BR'
            ? languageData.titleNav2.pt
            : languageData.titleNav2.en}
        </h3>
        <div className="carousel">
          {projects.map((project) => (
            <div key={project.name} className="card">
              <img src={project.img} alt={project.name} />
              <h4>{project.name}</h4>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </SectionProjectsStyle>
    </ThemeProvider>
  );
}
