import { dark, light } from './colors';
import fonts from './fonts';

export type themeContextProviderProps = {
  children: React.ReactNode;
};

export type themeContextType = {
  theme: typeof light;
  themeFonts: typeof fonts;
  isDarkMode: boolean;
  dark: typeof dark;
  light: typeof light;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  statusBarColor?: string;
  setStatusBarColor?: React.Dispatch<React.SetStateAction<string | undefined>>;
};
