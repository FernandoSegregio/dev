import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { SectionSkillsStyle } from './style';
import { dark, light } from '../../style/theme/theme';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';
import htmlIcon from '../../images/icons_skills/html_icon.svg';
import cssIcon from '../../images/icons_skills/css_icon.svg';
import gitIcon from '../../images/icons_skills/git_icon.svg';
import javascriptIcon from '../../images/icons_skills/javascript_icon.svg';
import reactIcon from '../../images/icons_skills/react_icon.svg';
import styledIcon from '../../images/icons_skills/styled_components_icon.svg';
import bootstrapIcon from '../../images/icons_skills/bootstrap_icon.svg';
import jestIcon from '../../images/icons_skills/jest_icon.svg';
import mySQLIcon from '../../images/icons_skills/mySQL_icon.svg';
import nodeIcon from '../../images/icons_skills/node_icon.svg';
import scrumIcon from '../../images/icons_skills/scrum_icon.svg';
import communicationIcon from '../../images/icons_skills/communication_icon.svg';
import empathyIcon from '../../images/icons_skills/empathy_icon.svg';
import teamWorkIcon from '../../images/icons_skills/team_work_icon.svg';
import timeIcon from '../../images/icons_skills/time_icon.svg';
import typescriptIcon from '../../images/icons_skills/typescript_icon.svg';

export default function SectionSkills() {
  const { theme, language } = useContext(PortfolioContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <SectionSkillsStyle>
        <h3 className="skills-title">
          {language === 'pt-BR'
            ? languageData.titleNav3.pt
            : languageData.titleNav3.en}
        </h3>
        <h5 className="hard">
          {language === 'pt-BR'
            ? languageData.titleHard.pt
            : languageData.titleHard.en}
        </h5>
        <div>
          <p>
            <img src={typescriptIcon} alt="Typscript" />
            Typescript
          </p>
          <p>
            <img src={javascriptIcon} alt="Javascript" />
            Javascript
          </p>
          <p>
            <img src={htmlIcon} alt="HTML 5" />
            HTML 5
          </p>
          <p>
            <img src={cssIcon} alt="CSS 3" />
            CSS 3
          </p>
          <p>
            <img src={reactIcon} alt="React" />
            React
          </p>
          <p>
            <img src={jestIcon} alt="Jest" />
            Jest
          </p>
          <p className="styled-components">
            <img src={styledIcon} alt="Styled Components" />
            Styled Components
          </p>
          <p>
            <img src={bootstrapIcon} alt="Bootstrap" />
            Bootstrap
          </p>
          <p>
            <img src={mySQLIcon} alt="MySQL" />
            MySQL
          </p>
          <p>
            <img src={nodeIcon} alt="Node" />
            Node
          </p>
          <p>
            <img src={gitIcon} alt="Git" />
            Git
          </p>
          <p>
            <img src={scrumIcon} alt="Scrum" />
            Scrum
          </p>
        </div>
        <h5 className="soft">
          {language === 'pt-BR'
            ? languageData.titleSoft.pt
            : languageData.titleSoft.en}
        </h5>
        <div className="soft">
          <p>
            <img
              src={communicationIcon}
              alt={
                language === 'pt-BR'
                  ? languageData.softCommunication.pt
                  : languageData.softCommunication.en
              }
            />
            {language === 'pt-BR'
              ? languageData.softCommunication.pt
              : languageData.softCommunication.en}
          </p>
          <p>
            <img
              src={empathyIcon}
              alt={
                language === 'pt-BR'
                  ? languageData.softEmpathy.pt
                  : languageData.softEmpathy.en
              }
            />
            {language === 'pt-BR'
              ? languageData.softEmpathy.pt
              : languageData.softEmpathy.en}
          </p>
          <p>
            <img
              src={teamWorkIcon}
              alt={
                language === 'pt-BR'
                  ? languageData.softTeamWork.pt
                  : languageData.softTeamWork.en
              }
            />
            {language === 'pt-BR'
              ? languageData.softTeamWork.pt
              : languageData.softTeamWork.en}
          </p>
          <p>
            <img
              src={timeIcon}
              alt={
                language === 'pt-BR'
                  ? languageData.softTime.pt
                  : languageData.softTime.en
              }
            />
            {language === 'pt-BR'
              ? languageData.softTime.pt
              : languageData.softTime.en}
          </p>
        </div>
      </SectionSkillsStyle>
    </ThemeProvider>
  );
}
