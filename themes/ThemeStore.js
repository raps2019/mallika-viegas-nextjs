import React, { useEffect, useState, useContext } from "/react";
import { ThemeProvider } from "styled-components";
import themes from "./themes";

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);
  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export { ThemeContext, ThemeStore, Theme };
