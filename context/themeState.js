import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../theme/themeConfig";

const ThemeContext = createContext();

const ThemeWrapper = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    currentTheme == "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeWrapper, useThemeContext };
