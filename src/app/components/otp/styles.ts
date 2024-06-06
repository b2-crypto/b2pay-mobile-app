import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

export default () => {
  const { theme } = useContext(themeContext);

  return StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 20,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: theme.secondary.neutral['200-logo-bg'],
      padding: 24,
      alignSelf: 'stretch',
    },
    Input: {
      borderBlockColor: theme.primary.darkPurple['700'],
      borderColor: theme.primary.darkPurple['700'],
      backgroundColor: theme.secondary.neutral['000'],
      height: 52,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      fontFamily: 'Tektur-ExtraBold',
    },

    outlinedStyle: {
      borderWidth: 0,
      borderBlockColor: theme.primary.darkPurple['700'],
      borderColor: theme.primary.darkPurple['700'],
      position: 'absolute',
      top: -2,
    },
  });
};
