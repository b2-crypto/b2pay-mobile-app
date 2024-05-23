import { light } from './colors';

export type themeContextProviderProps = {
  children: React.ReactNode;
};

export type themeContextType = {
  theme: typeof light;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};
