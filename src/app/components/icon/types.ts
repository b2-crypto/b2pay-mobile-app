import { ViewStyle } from 'react-native';
import { lightIcons } from './icons';

export type IconProps = {
  name: keyof typeof lightIcons;
  onClick?: () => void;
  size?: number;
  height?: number;
  width?: number;
  sx?: ViewStyle;
};
