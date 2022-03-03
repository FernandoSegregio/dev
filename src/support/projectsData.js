import FARMAPP from '../images/images_projects/FARM-APP.gif';
import GALACTICOS from '../images/images_projects/GALACTICOS.gif';
import PACE from '../images/images_projects/PACE.gif';
import PIXEL from '../images/images_projects/PIXEL.gif';

const projects = [
  {
    id: 1,
    name: 'FARM APP de Receitas',
    desc: 'Projeto realizado no fim do modulo de Front-end na Trybe, consite na criaçao de um aplicativo de receitas, consumindo 2 APIs, uma de receitas de comidas e outra de receitas de bebidas',
    tech: 'React, Context API, Hooks, HTML, CSS, Bootstrap',
    img: FARMAPP,
    link: 'https://project-farm-app.vercel.app/',
    linkRep: 'Link Repositório',
    repo: 'https://github.com/FernandoSegregio/Project-FARM-APP',
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
  },
];

export default projects;
