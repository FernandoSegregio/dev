import React from 'react';
import { MdMobileFriendly, MdOutlineDesktopMac } from 'react-icons/md';
import FARMAPP from '../images/images_projects/FARM-APP.gif';
import GALACTICOS from '../images/images_projects/GALACTICOS.gif';
import PACE from '../images/images_projects/PACE.gif';
import PIXEL from '../images/images_projects/PIXEL.gif';
import htmlIcon from '../images/icons_skills/html_icon.svg';
import cssIcon from '../images/icons_skills/css_icon.svg';
import gitIcon from '../images/icons_skills/git_icon.svg';
import javascriptIcon from '../images/icons_skills/javascript_icon.svg';
import reactIcon from '../images/icons_skills/react_icon.svg';
import styledIcon from '../images/icons_skills/styled_components_icon.svg';
import bootstrapIcon from '../images/icons_skills/bootstrap_icon.svg';
// import jestIcon from '../../images/icons_skills/jest_icon.svg';
// import mySQLIcon from '../../images/icons_skills/mySQL_icon.svg';
// import nodeIcon from '../../images/icons_skills/node_icon.svg';
// import communicationIcon from '../../images/icons_skills/communication_icon.svg';
// import empathyIcon from '../../images/icons_skills/empathy_icon.svg';
// import teamWorkIcon from '../../images/icons_skills/team_work_icon.svg';
// import timeIcon from '../../images/icons_skills/time_icon.svg';

const projects = [
  {
    id: 1,
    name: 'FARM APP de Receitas',
    desc: 'Projeto realizado no fim do modulo de Front-end na Trybe, consite na criaçao de um aplicativo de receitas, utilizando as habilidades que aprendemos no módulo.',
    tech: 'React, Context API, Hooks, HTML, CSS, Bootstrap',
    img: FARMAPP,
    link: 'https://project-farm-app.vercel.app/',
    linkRep: 'Link Repositório',
    repo: 'https://github.com/FernandoSegregio/Project-FARM-APP',
    skills: 'skills:',
    skills1: reactIcon,
    skills2: javascriptIcon,
    skills3: bootstrapIcon,
    skills4: cssIcon,
    skills5: gitIcon,
    mobile: <MdMobileFriendly />,
    desktop: <MdOutlineDesktopMac />,
  },
  {
    id: 2,
    name: 'Pace Fácil',
    desc: `Aplicação feita exclusivamente mobile.
    Juntando 2 paixões, corrida e programação, criei este aplicativo para ajudar corredores a calcular o seu pace.`,
    tech: 'React, JavaScript, Styled Components, Logíca de Programação',
    img: PACE,
    link: 'https://pace-facil.vercel.app',
    linkRep: 'Link Repositório',
    repo: 'https://github.com/FernandoSegregio/calculadora-pace',
    skills: 'skills:',
    skills1: reactIcon,
    skills2: javascriptIcon,
    skills3: styledIcon,
    skills4: gitIcon,
    mobile: <MdMobileFriendly />,
    desktop: <MdOutlineDesktopMac />,
  },
  {
    id: 3,
    name: 'Natal Galácticos',
    desc: 'Aplicação criada para a divulgação da Campanha de Natal dos Galácticos.',
    tech: 'React, JavaScript, HTML, CSS',
    img: GALACTICOS,
    link: 'https://natalgalacticos2021.vercel.app',
    linkRep: 'Link Repositório',
    repo: 'https://github.com/FernandoSegregio/natalgalacticos',
    skills: 'skills:',
    skills1: reactIcon,
    skills2: javascriptIcon,
    skills3: cssIcon,
    skills4: gitIcon,
    mobile: <MdMobileFriendly />,
    desktop: <MdOutlineDesktopMac />,
  },
  {
    id: 4,
    name: 'Super Pixel Art World',
    desc: 'Projeto Realizado na Trybe, no módulo de fundamentos, usando manipulação do DOM e manipulação.',
    tech: 'React, JavaScript, HTML, CSS',
    img: PIXEL,
    link: 'https://pixel-art-gamma.vercel.app',
    linkRep: 'Link Repositório',
    repo: 'https://github.com/FernandoSegregio/pixelArt',
    skills: 'skills',
    skills1: javascriptIcon,
    skills2: htmlIcon,
    skills4: cssIcon,
    skills5: gitIcon,
    mobile: <MdMobileFriendly />,
    desktop: <MdOutlineDesktopMac />,
  },
];

export default projects;