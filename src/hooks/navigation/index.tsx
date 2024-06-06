import { ParamListBase, RouteProp } from '@react-navigation/native';
import { createContext, useState } from 'react';

import { pagesNameType } from '../../app/pages/types';

type navigationType = {
  navigate: (route: pagesNameType) => void;
};
export type NavigationContextType = {
  navigation?: navigationType;
  setNavigation?: React.Dispatch<React.SetStateAction<navigationType | undefined>>;
  route?: RouteProp<ParamListBase, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRoute?: React.Dispatch<any>;
};

export type NavigationProviderProps = {
  children: React.ReactNode;
};

export const navigationContext = createContext<NavigationContextType>({});

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [navigation, setNavigation] = useState<navigationType | undefined>(undefined);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [route, setRoute] = useState<any | undefined>(undefined);

  const value = {
    navigation,
    setNavigation,
    route,
    setRoute: setRoute,
  };
  return <navigationContext.Provider value={value}>{children}</navigationContext.Provider>;
};
