import githubIcon from '../images/icon_contact/github-icon.svg';
import githubIcon2 from '../images/icon_contact/github-icon2.svg';
import linkedinIcon from '../images/icon_contact/linkedin-icon.svg';
import linkedinIcon2 from '../images/icon_contact/linkedin-icon2.svg';
import gmailIcon from '../images/icon_contact/gmail-icon.svg';

const contactIcon = [
  {
    id: 1,
    end: 'https://github.com/FernandoSegregio',
    class: 'github-icon',
    class2: 'github-icon2',
    img: githubIcon,
    img2: githubIcon2,
  },
  {
    id: 2,
    end: 'https://linkedin.com/in/fernando-segregio',
    class: 'linkedin-icon',
    class2: 'linkedin-icon2',
    img: linkedinIcon,
    img2: linkedinIcon2,
  },
  {
    id: 3,
    end: 'mailto:segregio@gmail.com',
    class: 'gmail-icon',
    img: gmailIcon,
  },
];

export default contactIcon;
