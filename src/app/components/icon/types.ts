import { ViewStyle } from 'react-native';
import { NumberProp } from 'react-native-svg';

import light from './icons/light';

export type IconProps = {
  name: keyof typeof light;
  onClick?: () => void;
  size?: number;
  height?: NumberProp;
  width?: NumberProp;
  sx?: ViewStyle;
  isDark?: boolean;
};
