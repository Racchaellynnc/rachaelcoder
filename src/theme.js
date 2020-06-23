import theme from 'styled-theming';

console.log(theme)
export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});

export const textColor = theme('mode', {
  light: '#444',
  dark: '#d3e7ea'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#4f4f4f',
  dark: '#111'
});

export const buttonTextColor = theme('mode', {
  light: '#999',
  dark: '#f7ffa8'
});

export const switchSlider = theme('slide', {
  on: '7px',
  off: '7px'
});
