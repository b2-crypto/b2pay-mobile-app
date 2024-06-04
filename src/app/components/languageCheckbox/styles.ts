import { StyleSheet } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';

export default () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
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
      color: theme.primary.darkPurple[700],
    },
    checkBorder: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: theme.primary.darkPurple[500],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    checked: {
      width: 14,
      height: 14,
      backgroundColor: theme.primary.darkPurple[500],
      borderRadius: 8,
    },
  });
};
