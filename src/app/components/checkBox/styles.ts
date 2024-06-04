import { StyleSheet } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';

export default () => {
  const { theme } = useContext(themeContext);
  const fontColor = theme.primary.darkPurple[500];
  const CheckColor = theme.primary.darkPurple[500];

  return StyleSheet.create({
    wrapper: {
      width: '100%',
      minWidth: 300,
      height: 72,
      marginBottom: 24,
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
      borderRadius: 12,
    },

    checked: {
      width: 14,
      height: 14,
      backgroundColor: CheckColor,
      borderRadius: 8,
    },
    pressableStyles: {
      width: '100%',
    },
  });
};
