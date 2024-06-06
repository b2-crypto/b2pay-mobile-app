import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

export default () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
    parent: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      width: '100%',
      height: '80%',
    },
    wrapper: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      paddingHorizontal: 40,
      paddingVertical: 32,
      width: '100%',
      height: '100%',
    },
    title: {
      fontSize: 32,
      fontFamily: 'Tektur-Bold',
      fontStyle: 'normal',
      color: theme.primary.darkPurple[700],
    },
    subtitle: {
      fontFamily: 'Geologica-Thin',
      fontSize: 15,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.secondary.neutral[500],
    },
    buttonWrapper: {
      marginTop: 40,
      marginBottom: 40,
      paddingHorizontal: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.secondary.neutral['navbar-bg'],
    },
    emailWrapper: {
      width: '100%',
      marginTop: 40,
      marginBottom: 24,
    },
    passWrapper: {
      width: '100%',
      marginBottom: 10,
    },
    forgotPasswordWrapper: {
      width: '100%',
      alignItems: 'flex-end',
    },
    registerLinkWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 20,
    },
  });
};
