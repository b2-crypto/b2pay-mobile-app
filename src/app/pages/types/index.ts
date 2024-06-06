import { ParamListBase, RouteProp } from '@react-navigation/native';

import { PagesNames } from '../../../navigation/pagesNames';

export type pagesNameType = keyof typeof PagesNames;

export type pageProps = {
  route: RouteProp<ParamListBase, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: {
    navigate: (route: pagesNameType) => void;
    addListener: (event: string, callback: () => void) => void;
  };
};

export type navigationLayout = {
  route: RouteProp<ParamListBase, string>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigation: any;
};
