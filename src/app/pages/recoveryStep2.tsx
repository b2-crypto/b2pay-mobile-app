import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Keyboard, ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import OTP from '../components/otp';
import OTPCounter from '../components/otpCounter';
import RegisterStep from '../components/registerStep';
import recoveryStep2Styles from './styles/registerStep3';
import { pageProps } from './types';

const recoveryPasswordStep2: React.FC<pageProps> = ({ navigation }) => {
  //Control states
  const [changeOTP, setChangeOPT] = React.useState('');
  const [otpIsFocused, setOtpIsFocused] = React.useState(false);
  const [canRequest, setCanRequest] = useState(false);
  const [counter, setCounter] = useState(3);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);
  //Used when the component is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      changeHeaderParameters({
        showLogo: true,
        showBackButton: true,
      });
    });
    return unsubscribe;
  }, [navigation]);

  const styles = recoveryStep2Styles();

  const handleFinish = () => {
    setIsFirstTime(false);
    setCanRequest(true);
  };

  const handleNewRequest = () => {
    setCanRequest(false);
    setCounter(3);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const canContinue = changeOTP.length === 5;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.recoveryPasswordStep2.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.recoveryPasswordStep2.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.recoveryPasswordStep2.description}</Text>
          <OTP onChangeText={t => setChangeOPT(t)} onFocus={setOtpIsFocused} />
          <Text style={styles.resend}>{t?.pages.recoveryPasswordStep2.code}</Text>

          <OTPCounter
            handleFinish={handleFinish}
            counter={counter}
            setCounter={setCounter}
            isFirstTime={isFirstTime}
            setIsFirstTime={setIsFirstTime}
          />
        </View>
      </ScrollView>
      {windowHeight < 800 && otpIsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.recoveryPasswordStep2['continue-button']}
              disabled={!canContinue}
              onClick={() => {
                navigation.navigate('RecoveryStep3');
              }}
            />
            {!isKeyboardVisible && (
              <View style={styles.resendButton}>
                <Button
                  type="tertiary"
                  text={t?.pages.recoveryPasswordStep2['resend-button']}
                  disabled={!canRequest}
                  onClick={handleNewRequest}
                />
              </View>
            )}
          </View>

          <RegisterStep selected={2} numberOfSteps={3} />
        </>
      )}
    </View>
  );
};

export default recoveryPasswordStep2;
