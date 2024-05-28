import { StyleSheet } from 'react-native';

export default (fontColor: string, CheckColor: string) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 40,
      marginBottom: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    text: {
      fontSize: 16,
      fontFamily: 'Geologica-Regular',
      color: fontColor,
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
  });
