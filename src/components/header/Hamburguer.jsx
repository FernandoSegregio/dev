import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { styled, keyframes } from '@stitches/react';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import PortfolioContext from '../../context/PortfolioContext';
import languageData from '../../support/languageData';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  backgroundColor: 'white',
  borderRadius: 6,
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: violet.violet9,
    color: violet.violet1,
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;

// Your app...
const Box = styled('div', {});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 30,
  width: 30,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#8c8787e8',
  // backgroundColor: `${(props) => props.theme.background}`,
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
});

function DropdownMenuHamb() {
  const { language } = useContext(PortfolioContext);
  return (
    <Box className="menu">
      <DropdownMenu className="hamburguer">
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <HamburgerMenuIcon />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            <Link to="about" spy smooth offset={-50} duration={5000}>
              {language === 'pt-BR'
                ? languageData.titleNav1.pt
                : languageData.titleNav1.en}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="projects" spy smooth offset={-50} duration={5000}>
              {language === 'pt-BR'
                ? languageData.titleNav2.pt
                : languageData.titleNav2.en}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="skills" spy smooth offset={-50} duration={5000}>
              {language === 'pt-BR'
                ? languageData.titleNav3.pt
                : languageData.titleNav3.en}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="contact" spy smooth offset={-50} duration={5000}>
              {language === 'pt-BR'
                ? languageData.titleNav4.pt
                : languageData.titleNav4.en}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
}

export default DropdownMenuHamb;
