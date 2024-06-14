import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Keyboard, ScrollView, Text, View } from 'react-native';

import { AuthContext } from '../../hooks/auth';
import { Auth } from '../../hooks/auth/utils';
import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import OTP from '../components/otp';
import OTPCounter from '../components/otpCounter';
import RegisterStep from '../components/registerStep';
import stylesStep3 from './styles/registerStep3';
import { pageProps } from './types';

const RegisterStep3: React.FC<pageProps> = ({ navigation }) => {
  //Control states
  const [changeOTP, setChangeOPT] = React.useState('');
  const [otpIsFocused, setOtpIsFocused] = React.useState(false);
  const [canRequest, setCanRequest] = useState(false);
  const [counter, setCounter] = useState(60);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [loadingRequest, setLoadingRequest] = React.useState<boolean>(false);

  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);
  const { register } = useContext(AuthContext);

  const authClass = new Auth();
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

  const sendOPT = () => {
    authClass.sendOPT(register.email).then(response => {
      console.log(response);
    });
  };

  const handleFinish = () => {
    setIsFirstTime(false);
    setCanRequest(true);
  };

  const handleNewRequest = () => {
    setCanRequest(false);
    setCounter(60);
    sendOPT();
  };

  const handleValidateOpt = () => {
    setLoadingRequest(true);
    authClass
      .validateOPT(register.email, changeOTP)
      .then(response => {
        console.log(response);
        response.statusCode === 200 ? navigation.navigate('RegisterStep4') : console.log('Opt no validado');
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoadingRequest(false);
        //TODO: SALTAR MIENTRAS NO HAYA UNA PANTALLA DE ERROR
        navigation.navigate('RegisterStep4');
      });
  };

  //To send the OPT
  useEffect(() => {
    if (isFirstTime) {
      sendOPT();
    }
  }, []);

  //To control the keyboard
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
  const styles = stylesStep3();

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
              isLoading={loadingRequest}
              onClick={handleValidateOpt}
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
