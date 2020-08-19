import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#c3f2f7',
  dark: '#031c26'
});

export const textColor = theme('mode', {
  light: '#444',
  dark: '#d3e7ea'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#4f4f4f',
  dark: '#dbfaff'
});

export const buttonTextColor = theme('mode', {
  light: '#999',
  dark: '#888'
});

export const switchSlider = theme('slide', {
  on: '0px',
  off: '0px'
});

export const paralaxColor = theme('mode', {
  light: '#50B0BD',
  dark: '#50B0BD'
});

export const aboutMeBoxes = theme('mode', {
  light: '#C3F2F7',
  dark: '#061C26'
});

export const aboutMeBoxesText = theme('mode', {
  light: '#111',
  dark: '#999'
});

export const ContactBox = theme('mode', {
  light: '#97c5c9',
  dark: '#142933'
});

export const SkillsBlue = theme('mode', {
  light: '#50B0BD',
  dark: '#012d3f'
});

export const SkillsBlueText = theme('mode', {
  light: '#fcfcfc',
  dark: '##50B0BD'
});

export const SkillsGray = theme('mode', {
  light: '#999',
  dark: '#222'
});

export const SkillsGrayText = theme('mode', {
  light: '#111',
  dark: '#50b0bd'
});

export const SkillsWhite = theme('mode', {
  light: '#fcfcfc',
  dark: '#50b0bd'
});

export const SkillsWhiteText = theme('mode', {
  light: '#061C26',
  dark: '#061C26'
});

export const FooterColor = theme('mode', {
  light: 'linear-gradient(to right, #50B0BD 20%, #999 80%); ',
  dark: 'linear-gradient(to right, #0A2737 20%, #222 80%); '
});