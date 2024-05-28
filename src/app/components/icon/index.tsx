import { Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';
import styles from './styles';
import { IconProps } from './types';

//ICONS FROM ICONS LIST
import light from './icons/light';
import dark from './icons/dark';
const Icon: React.FC<IconProps> = props => {
  const { onClick, name, size = '100%', height, width, sx } = props;
  const { isDarkMode } = useContext(themeContext);
  const iconsList: typeof light = isDarkMode ? dark : light;

  const icon = (
    <View style={[styles.container, sx]}>
      <SvgXml xml={iconsList[name]} width={width || size} height={height || size} />
    </View>
  );
  return onClick ? <Pressable onPress={onClick}>{icon}</Pressable> : icon;
};
export default Icon;
