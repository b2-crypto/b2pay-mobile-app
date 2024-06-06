import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import InputEmail from '../components/input';
import InternalLink from '../components/internalLink';
import RegisterStep from '../components/registerStep';
import Switch from '../components/switch';
import stylesStep2 from './styles/registerStep2';
import { pageProps, pagesNameType } from './types';

const RegisterStep2: React.FC<pageProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('');
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [emailExists, setEmailExists] = React.useState<boolean>(false);

  //Control states
  const [error, setError] = React.useState<string | undefined>('');
  const [emailInputIsFocused, setEmailInputIsFocused] = React.useState(false);
  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  const validateEmail = async () => {
    if (email === '' || email === undefined) {
      setError(t?.pages.registerStep2['no-email']);
    } else if (!emailRegex.test(email)) {
      setError(t?.pages.registerStep2['email-invalid']);
    } else if (email === 'daniel@gg.com') {
      setError(t?.pages.registerStep2['email-exists']);
      setEmailExists(true);
    } else {
      setError('');
    }

    // await fetch('https://api.example.com/validate-email', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.emailExists) {
    //       setError(t?.pages.registerStep2['email-exists']);
    //     }
    //   });
  };

  const styles = stylesStep2();

  const canContinue = emailRegex.test(email) && termsAccepted;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.registerStep2.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep2.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep2.description}</Text>
          <InputEmail
            label={t?.pages.registerStep2.email}
            onChangeText={setEmail}
            onFocus={focus => setEmailInputIsFocused(focus)}
            errorMessage={error}
            onEndEditing={validateEmail}
          />
          {emailExists && (
            <View style={styles.link}>
              <InternalLink link="Login" text="Login" />
              <Text style={styles.text}> or </Text>
              <InternalLink link="RecoveryStep1" text="Reset Password" />
            </View>
          )}
        </View>
      </ScrollView>
      {windowHeight < 800 && emailInputIsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <View style={styles.policyWrapper}>
              <Text style={styles.policyText}>{t?.pages.registerStep2['policy-description']}</Text>
              <Switch onValueChange={setTermsAccepted} />
            </View>
            <View style={styles.policyLink}>
              <InternalLink
                text={t?.pages.registerStep2['policy-link'].label || ''}
                link={(t?.pages.registerStep2['policy-link'].url as pagesNameType) || 'InitPage'}
              />
            </View>
            <Button
              text={t?.pages.registerStep2['continue-button']}
              disabled={!canContinue}
              onClick={() => {
                navigation.navigate('RegisterStep3');
              }}
            />
          </View>
          <RegisterStep selected={2} />
        </>
      )}
    </View>
  );
};

export default RegisterStep2;
