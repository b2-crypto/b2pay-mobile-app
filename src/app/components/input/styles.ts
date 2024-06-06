import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

export default () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
    Input: {
      borderBlockColor: theme.primary.darkPurple['700'],
      borderColor: theme.primary.darkPurple['700'],
      backgroundColor: theme.secondary.neutral['000'],
      width: '100%',
      borderWidth: 0,
      fontFamily: 'Tecktur-Regular',
      justifyContent: 'center',
      borderRadius: 5,
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
      marginBottom: 7,
    },
    borderError: {
      borderColor: theme.informative.red,
      borderWidth: 2,
    },
    underlineStyle: {
      borderWidth: 0,
    },
    container: {
      width: '100%',
      marginBottom: 5,
    },
    danger: {
      flexDirection: 'column',
      marginTop: 15,
    },
    dangerText: {
      color: theme.informative.red,
      fontSize: 13,
      fontFamily: 'Geologica-Regular',
      maxWidth: '100%',
      paddingRight: 30,
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    link: {
      flexDirection: 'row',
      paddingLeft: 32,
    },
    text: {
      color: theme.primary.darkPurple['700'],
      fontSize: 13,
      fontFamily: 'Geologica-Regular',
      lineHeight: 18,
    },
    icon: {
      paddingLeft: 0,
      paddingRight: 30,
    },
  });
};
