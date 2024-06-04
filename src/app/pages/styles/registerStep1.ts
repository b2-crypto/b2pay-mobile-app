import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';

export default (subtitleFontColor: string, descriptionFontColor: string, titleFontColor: string) => {
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
      color: titleFontColor,
    },
    subtitle: {
      fontFamily: 'Geologica-Regular',
      fontSize: 15,
      fontStyle: 'normal',
      lineHeight: 20,
      color: subtitleFontColor,
    },
    description: {
      fontFamily: 'Geologica-Thin',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      color: descriptionFontColor,
      marginTop: 16,
      marginBottom: 32,
    },
    checkboxWrapper: {
      marginTop: 40,
      width: '100%',
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
