import { ViewStyle } from 'react-native';
import light from './icons/light';

export type IconProps = {
  name: keyof typeof light;
  onClick?: () => void;
  size?: number;
  height?: number;
  width?: number;
  sx?: ViewStyle;
};
