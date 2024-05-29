import { StyleSheet } from 'react-native';

export default (fontColor: string, CheckColor: string) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      minWidth: 300,
      height: 72,
      marginBottom: 8,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
    },

    text: {
      fontSize: 16,
      fontFamily: 'Geologica-Regular',
      color: fontColor,
      marginLeft: 24,
    },
    checkBorder: {
      width: 24,
      height: 24,
      borderWidth: 2,
      borderColor: CheckColor,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    checked: {
      width: 16,
      height: 16,
      backgroundColor: CheckColor,
      borderRadius: 8,
    },
    pressableStyles: {
      width: '100%',
    },
  });
