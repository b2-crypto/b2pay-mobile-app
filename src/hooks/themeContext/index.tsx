import React, { ReactElement, createContext, useEffect, useState } from 'react';
import { themeContextProviderProps, themeContextType } from './types';
import { dark, light } from './colors';
import { useColorScheme } from 'react-native';

const initContext: themeContextType = {
  theme: light,
  setDarkMode: () => false,
};

export const themeContext = createContext<themeContextType>(initContext);

const ThemeProvider: React.FC<themeContextProviderProps> = ({ children }): ReactElement => {
  const [theme, setTheme] = useState<typeof light>(light);
  const [isDarkMode, setDarkMode] = useState<boolean>(useColorScheme() === 'dark');

  useEffect(() => {
    setTheme(isDarkMode ? dark : light);
  }, [isDarkMode]);

  const value: themeContextType = {
    theme,
    setDarkMode,
  };

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
