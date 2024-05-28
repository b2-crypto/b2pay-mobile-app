import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    paddingBottom: 8,
    paddingTop: 4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logWrapper: {
    display: 'flex',
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
  titleWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 141,
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
    width: 138,
    height: 68,
    paddingRight: 16,
  },
});

export default styles;
