import { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';

const styles = () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
    container: {
      height: 80,
      width: '100%',
      paddingBottom: 8,
      paddingTop: 4,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      zIndex: 100,
      backgroundColor: theme.secondary.neutral[100],
      borderBottomWidth: 1,
      borderBottomColor: theme.secondary.neutral[300],
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    logWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '33%',
      height: 68,
    },
    backWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 94,
      height: 24,
    },
    backText: {
      fontFamily: 'Tektur-Regular',
      fontSize: 14,
      marginLeft: 2,
    },
    titleWrapper: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '33%',
      height: 68,
    },
    titleText: {
      fontFamily: 'Tektur-Bold',
      fontSize: 24,
    },
    iconsSideWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: '33%',
      height: 68,
      marginRight: 20,
    },
  });
};
export default styles;
