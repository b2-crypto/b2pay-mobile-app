import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

export default () => {
  const { theme } = useContext(themeContext);

  return StyleSheet.create({
    dotsWrapper: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    simpleDotsWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: 20,
      height: 18,
      justifyContent: 'space-between',
      alignItems: 'center',
      textAlign: 'center',
    },
    dot: {
      width: 10,
      height: 12,
      borderRadius: 5,
      marginHorizontal: 4,
    },
    dotSimple: {
      width: 4,
      height: 4,
      backgroundColor: theme.secondary.neutral['900'],
    },
  });
};
