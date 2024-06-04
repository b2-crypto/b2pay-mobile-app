import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 325,
    height: 400,
  },
  buttonWrapper: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 40,
    marginTop: 56,
  },
  registerButtonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    width: '100%',
  },
  registerText: {
    fontSize: 11,
    fontFamily: 'Geologica-Regular',
    marginBottom: 8,
    lineHeight: 16,
  },
  generalWrapper: {
    width: '100%',
    height: '100%',
  },
});
