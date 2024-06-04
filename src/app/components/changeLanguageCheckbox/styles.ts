import { StyleSheet } from 'react-native';

export default (backgroundColor: string) =>
  StyleSheet.create({
    ChangeLanguagePopUp: {
      position: 'absolute',
      top: 50,
      right: 20,
      width: 200,
      height: 'auto',
      backgroundColor: backgroundColor,
      zIndex: 100,
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 11,
    },
    close: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 99,
      backgroundColor: 'transparent',
      width: 1000,
      height: 1000,
      overflow: 'hidden',
    },
  });
