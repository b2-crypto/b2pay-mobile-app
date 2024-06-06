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
      fontFamily: 'Geologica-Regular',
      fontSize: 15,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.primary.rose[500],
    },
    description: {
      fontFamily: 'Geologica-Thin',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.primary.darkPurple[500],
      marginTop: 16,
      marginBottom: 32,
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
    rules: {
      width: '100%',
      height: 'auto',
      marginBottom: 16,
      justifyContent: 'flex-start',
    },
    rule: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ruleText: {
      fontFamily: 'Geologica-Regular',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.primary.darkPurple[700],
      marginLeft: 8,
    },
    iconWrapper: {
      width: 16,
      height: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },

    progress: {
      width: '100%',
      height: 8,
      backgroundColor: theme.secondary.neutral[200],
    },
    bar: {
      width: '0%',
      height: '100%',
    },
    securePasswordWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    securePasswordText: {
      fontFamily: 'Geologica-Regular',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
    },
    grate: {
      color: theme.informative.green,
      padding: 8,
    },
    medium: {
      color: theme.informative.yellow,
      padding: 8,
    },
    weak: {
      color: theme.informative.red,
      padding: 8,
    },
    passwordWrapper: {
      width: '100%',
      height: 'auto',
      marginBottom: 5,
      justifyContent: 'flex-start',
    },
  });
};
