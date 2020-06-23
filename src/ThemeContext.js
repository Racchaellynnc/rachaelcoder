import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor, switchSlider } from './theme';
import React from "react";


const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {

  const [themeState, setThemeState] = React.useState({
    mode: 'light',
    slide: 'on',
    menu: 'shut'
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
    margin-right: ${switchSlider}
  `;

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    const slide = (themeState.slide === 'on' ? `off` : `on`);
    const menu = (themeState.slide === 'shut' ? `open` : `shut`);
    setThemeState({mode, slide, menu});
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider className="theme"
        theme={{
          mode: themeState.mode,
          slide: themeState.slide,
          menu: themeState.menu
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeProvider;