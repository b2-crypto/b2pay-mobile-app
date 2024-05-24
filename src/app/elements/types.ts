import { StatusBarStyle } from 'react-native';

export type FocusAwareStatusBarProps = {
  barStyle: StatusBarStyle;
  backgroundColor: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  navigation: ReactNavigation.RootParamList;
};
