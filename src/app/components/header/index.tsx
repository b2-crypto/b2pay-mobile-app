import { View, Text, StyleSheet } from 'react-native';
import Icon from '../icon';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    paddingBottom: 8,
    paddingTop: 4,
  },
  logWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 141,
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
    marginLeft: 4,
  },
});

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logWrapper}>
        <Icon name={'Logo'} height={40} width={136} />
        <View style={styles.backWrapper}>
          <Icon name={'back'} height={24} sx={{ maxWidth: 24 }} />
          <Text style={styles.backText}>Back</Text>
        </View>
      </View>

      {/* <View>
        <Icon name={'config'} height={24} width={24} />
      </View> */}
    </View>
  );
};
export default Header;
