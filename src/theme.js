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
