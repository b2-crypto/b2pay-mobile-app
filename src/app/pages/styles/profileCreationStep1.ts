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
    checkboxWrapper: {
      marginTop: 0,
      width: '100%',
      gap: 15,
    },
    checkboxWrapperGender: {
      marginTop: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    checkboxWrapperGenderFirstRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    birthdateContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width:'100%'
    },
    buttonWrapper: {
      marginTop: 40,
      marginBottom: 40,
      paddingHorizontal: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      backgroundColor: theme.secondary.neutral['navbar-bg'],
      bottom: 0,
    },
  });
};
