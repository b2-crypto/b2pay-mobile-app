import React, { ReactElement, createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import { dark, light } from './colors';
import fonts from './fonts';
import { themeContextProviderProps, themeContextType } from './types';

const initContext: themeContextType = {
  theme: light,
  themeFonts: fonts,
  isDarkMode: false,
  setDarkMode: () => false,
};

export const themeContext = createContext<themeContextType>(initContext);

const ThemeProvider: React.FC<themeContextProviderProps> = ({ children }): ReactElement => {
  const [theme, setTheme] = useState<typeof light>(light);
  const themeFonts: typeof fonts = fonts;
  const [isDarkMode, setDarkMode] = useState<boolean>(useColorScheme() === 'dark');

  useEffect(() => {
    setTheme(isDarkMode ? dark : light);
  }, [isDarkMode]);

  const value: themeContextType = {
    theme,
    themeFonts,
    isDarkMode,
    setDarkMode,
  };

  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
};

export default ThemeProvider;
