import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { AuthContext } from '../../hooks/auth';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { themeContext } from '../../hooks/themeContext';
import LoadingDots from '../components/LoadingDots';
import Icon from '../components/icon';
import LoadingFullScreen from '../components/loadingFullScreen';
import { pageProps } from './types';

const createStyles = () => {
  const { light } = useContext(themeContext);
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: light.primary.darkPurple[700],
    },
    loadingText: {
      fontFamily: 'Geologica-Regular',
      fontSize: 16,
      fontStyle: 'normal',
      lineHeight: 24,
      marginTop: 28,
      marginRight: 10,
    },
    loadingWrapper: {
      display: 'flex',
      flexDirection: 'row',
      width: 200,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    logoWrapper: {
      width: '90%',
      height: '100%',
      paddingLeft: 20,
    },
  });
};

const Loading: React.FC<pageProps> = ({ navigation }) => {
  const { t, isLoading } = useContext(parametrizationContext);
  const {
    auth: { isLogged },
  } = useContext(AuthContext);
  const { light } = useContext(themeContext);

  const handleRedirect = async () => {
    const onboarding = await AsyncStorage.getItem('onboarding');
    if (isLoading) return;
    if (!onboarding)
      return setTimeout(async () => {
        navigation.navigate('OnBoarding');
      }, 1000);
    if (!isLogged)
      return setTimeout(async () => {
        navigation.navigate('InitPage');
      }, 1000);
    if (isLogged)
      return setTimeout(async () => {
        navigation.navigate('Home');
      }, 1000);
  };

  useEffect(() => {
    handleRedirect();
  }, [isLoading, isLogged]);

  const styles = createStyles();

  const statusBar = (
    <StatusBar barStyle={'light-content'} backgroundColor={light.primary.darkPurple[700]} showHideTransition={'fade'} />
  );

  const bigLogo = (
    <View style={styles.container}>
      {statusBar}
      <Animated.View style={styles.logoWrapper}>
        <Icon name="bigLogo" isDark={true} />
      </Animated.View>
    </View>
  );

  const Loading = (
    <View style={styles.container}>
      {statusBar}
      <LoadingFullScreen />
      <View style={styles.loadingWrapper}>
        <Text style={styles.loadingText}>{t?.pages.loadingPage.loading}</Text>
        <LoadingDots isSimple={true} />
      </View>
    </View>
  );

  return isLoading ? Loading : bigLogo;
};

export default Loading;
