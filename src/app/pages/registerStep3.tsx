import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, Text, View, Keyboard } from 'react-native';
import { headerParametersContext } from '../../hooks/headerParameters';
import { pageProps } from './types';
import stylesStep3 from './styles/registerStep3';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import RegisterStep from '../components/registerStep';
import OTP from '../components/otp';
import OTPCounter from '../components/otpCounter';

const RegisterStep3: React.FC<pageProps> = ({ navigation }) => {
  //Control states
  const [changeOTP, setChangeOPT] = React.useState('');
  const [otpIsFocused, setOtpIsFocused] = React.useState(false);
  const [canRequest, setCanRequest] = useState(false);
  const [counter, setCounter] = useState(60);
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

  const styles = stylesStep3();

  const handleFinish = () => {
    setIsFirstTime(false);
    setCanRequest(true);
  };

  const handleNewRequest = () => {
    setCanRequest(false);
    setCounter(60);
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
          <Text style={styles.title}>{t?.pages.registerStep3.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep3.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep3.description}</Text>
          <OTP onChangeText={t => setChangeOPT(t)} onFocus={setOtpIsFocused} />
          <Text style={styles.resend}>{t?.pages.registerStep3.code}</Text>

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
              text={t?.pages.registerStep3['continue-button']}
              disabled={!canContinue}
              onClick={() => {
                navigation.navigate('RegisterStep4');
              }}
            />
            {!isKeyboardVisible && (
              <View style={styles.resendButton}>
                <Button
                  type="tertiary"
                  text={t?.pages.registerStep3['resend-button']}
                  disabled={!canRequest}
                  onClick={handleNewRequest}
                />
              </View>
            )}
          </View>

          <RegisterStep selected={3} />
        </>
      )}
    </View>
  );
};

export default RegisterStep3;
