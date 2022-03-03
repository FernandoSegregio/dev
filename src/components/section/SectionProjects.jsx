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
        <h3 className="projects">
          {language === 'pt-BR'
            ? languageData.titleNav2.pt
            : languageData.titleNav2.en}
        </h3>
        <div className="carousel">
          {projects.map((project) => (
            <div key={project.id} className="card">
              <h4>{project.name}</h4>
              <img src={project.img} alt={project.name} />
              <div>
                <p className="desc-prj">{project.desc}</p>
                <a className="link-rep" href={project.repo}>{project.linkRep}</a>
                <a className="link-rep" href={project.link}>{project.name}</a>
              </div>
            </div>
          ))}
        </div>
      </SectionProjectsStyle>
    </ThemeProvider>
  );
}
