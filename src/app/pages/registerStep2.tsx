import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { AuthContext } from '../../hooks/auth';
import { Auth } from '../../hooks/auth/utils';
import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import InputEmail from '../components/input';
import InternalLink from '../components/internalLink';
import RegisterStep from '../components/registerStep';
import Switch from '../components/switch';
import stylesStep2 from './styles/registerStep2';
import { pageProps, pagesNameType, validateEmailResponseType } from './types';

const RegisterStep2: React.FC<pageProps> = ({ navigation }) => {
  const [loadingValidation, setLoadingValidation] = React.useState<boolean>(false);
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [emailExists, setEmailExists] = React.useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = React.useState<boolean>(false);

  //Control states
  const [error, setError] = React.useState<string | undefined>('');
  const [emailInputIsFocused, setEmailInputIsFocused] = React.useState(false);
  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { register, setRegister } = useContext(AuthContext);
  const { t } = useContext(parametrizationContext);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

  const validateEmail = async () => {
    setEmailIsValid(false);
    setLoadingValidation(true);

    if (register?.email === '' || register?.email === undefined) return setError(t?.pages.registerStep2['no-email']);
    if (!emailRegex.test(register?.email)) return setError(t?.pages.registerStep2['email-invalid']);
    authClass
      .validateEmail(register?.email)
      .then((response: validateEmailResponseType) => {
        if (response.statusCode === 200) {
          setEmailExists(true);
          setEmailIsValid(false);
          setError(t?.pages.registerStep2['email-exists']);
        } else {
          setEmailExists(false);
          setEmailIsValid(true);
          setError('');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoadingValidation(false);
      });
  };

  const handleChangeEmail = (email: string) => {
    setRegister({ ...register, email });
  };

  const styles = stylesStep2();

  const canContinue = emailRegex.test(register.email) && termsAccepted && emailIsValid && !emailInputIsFocused;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.registerStep2.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep2.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep2.description}</Text>
          <InputEmail
            label={t?.pages.registerStep2.email}
            onChangeText={handleChangeEmail}
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
              isLoading={loadingValidation}
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
