import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export default (backgroundColor: string, inserts: EdgeInsets) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
      width: '100%',
      height: '100%',
      paddingTop: inserts.top,
      paddingBottom: inserts.bottom,
      paddingLeft: inserts.left,
      paddingRight: inserts.right,
    },
    text: {
      fontSize: 20,
      textAlign: 'center',
    },
  });
