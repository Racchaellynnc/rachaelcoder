import theme from 'styled-theming';

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#4f4f4f',
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});