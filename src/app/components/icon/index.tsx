import { useContext } from 'react';
import { DimensionValue, Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { themeContext } from '../../../hooks/themeContext';
import dark from './icons/dark';
//ICONS FROM ICONS LIST
import light from './icons/light';
import styles from './styles';
import { IconProps } from './types';

const Icon: React.FC<IconProps> = props => {
  const { onClick, name, size = '100%', height, width, sx, isDark } = props;
  const { isDarkMode } = useContext(themeContext);
  const iconsList: typeof light = isDark || isDarkMode ? dark : light;

  const icon = (
    <View style={[styles.container, sx, { maxWidth: width as DimensionValue }]}>
      <SvgXml xml={iconsList[name]} width={width || size} height={height || size} preserveAspectRatio="xMidYMid meet" />
    </View>
  );
  return onClick ? <Pressable onPress={onClick}>{icon}</Pressable> : icon;
};
export default Icon;
