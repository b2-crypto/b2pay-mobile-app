import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from '../components/icon';
import { Button } from '../components/button';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
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
    marginTop: 56,
  },
  registerButtonWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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
export const pageName = 'initPage';
const InitPage: React.FC = () => {
  return (
    <ScrollView style={styles.generalWrapper}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Icon name={'bigLogo'} height={400} sx={{ maxWidth: 325 }} />
        </View>

        <View style={styles.buttonWrapper}>
          <Button text={'Login'} onClick={() => {}}></Button>
          <View style={styles.registerButtonWrapper}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <Button text={'Sign up'} onClick={() => {}} type="secondary"></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InitPage;
