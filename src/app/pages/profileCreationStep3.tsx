import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, Keyboard, ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import OTP from '../components/otp';
import OTPCounter from '../components/otpCounter';
import ProfileCreationStep from '../components/profileCreationStep';
import stylesStep3 from './styles/profileCreationStep3';
import { pageProps } from './types';
import Input from '../components/input';

const ProfileCreationStep3: React.FC<pageProps> = ({ navigation }) => {
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

  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);


  const [firstName, setFirstName] = useState('');
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
          <Text style={styles.title}>{t?.pages.profileCreationStep3.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.profileCreationStep3.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.profileCreationStep3.description}</Text>
          <View style={styles.checkboxWrapper}>
            <Input
              label={t?.pages.profileCreationStep3['country-residence']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep3['state']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep3['city']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep3['postalcode']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep3['phonenumber']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
          </View>
        </View>
      </ScrollView>
      {windowHeight < 800 && otpIsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.profileCreationStep3['continue-button']}
/*               disabled={!canContinue}
 */              onClick={() => {
                navigation.navigate('ProfileCreationStep4');
              }}
            />
            
          </View>

          <ProfileCreationStep selected={3} />
        </>
      )}
    </View>
  );
};

export default ProfileCreationStep3;
