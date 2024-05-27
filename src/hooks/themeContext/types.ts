import { light } from './colors';
import fonts from './fonts';

export type themeContextProviderProps = {
  children: React.ReactNode;
};

export type themeContextType = {
  theme: typeof light;
  themeFonts: typeof fonts;
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
