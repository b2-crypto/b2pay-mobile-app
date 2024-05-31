import { StyleSheet } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';

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
    },
    container: {
      width: '100%',
    },
    outlinedStyle: {
      borderWidth: 0,
      borderBlockColor: theme.primary.darkPurple['700'],
      borderColor: theme.primary.darkPurple['700'],
      position: 'absolute',
      top: -2,
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
