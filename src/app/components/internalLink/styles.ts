import { StyleSheet } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';

export default () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
    container: {
      width: 'auto',
      height: 'auto',
    },
    text: {
      color: theme.primary.rose[500],
      fontSize: 14,
      fontFamily: 'Tektur-Regular',
      lineHeight: 20,
    },
  });
};
