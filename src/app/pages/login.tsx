import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { AuthContext } from '../../hooks/auth';
import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import Input from '../components/input';
import InputPassword from '../components/inputPassword';
import InternalLink from '../components/internalLink';
import loginStyles from './styles/login';
import { pageProps } from './types';

const Login: React.FC<pageProps> = ({ navigation }) => {
  const { login, setLogin, LoginUser, loading } = useContext(AuthContext);
  const [emailError, setEmailError] = React.useState<string | undefined>('');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const windowHeight = Dimensions.get('window').height;

  const [inputsFocused, setInputsFocused] = React.useState<boolean>();

  const { t } = useContext(parametrizationContext);
  const { changeHeaderParameters } = useContext(headerParametersContext);

  const styles = loginStyles();

  const handleEmailChange = (value: string) => {
    setLogin({ ...login!, email: value, loginError: '' });
  };

  //Verify if the email is valid and set the error message
  const handleEndEditing = () => {
    if (login?.email === '' || login?.email === undefined) {
      setEmailError(t?.pages.login['no-email']);
    } else if (!emailRegex.test(login.email)) {
      setEmailError(t?.pages.login['email-invalid']);
    } else {
      setEmailError('');
    }
  };

  //Verify if the password is valid and set the error message
  const handlePasswordChange = (value: string) => {
    setLogin({ ...login!, password: value, loginError: '' });
  };

  const handleLogin = async () => {
    if (!LoginUser) return;
    await LoginUser(login!);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      changeHeaderParameters({
        showLogo: true,
        showBackButton: true,
      });
    });
    return unsubscribe;
  }, [navigation]);

  const canContinue = !emailError && !login?.loginError && login?.email !== '' && login?.password !== '';
  const loginErrormessage = login?.loginError === 'Unauthorized' ? t?.pages.login['invalid-account'] : '';
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.login.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.login.subtitle}</Text>

          <View style={styles.emailWrapper}>
            <Input
              onChangeText={handleEmailChange}
              onEndEditing={handleEndEditing}
              label={t?.pages.login.email}
              errorMessage={emailError}
              onFocus={focus => setInputsFocused(focus)}
            />
          </View>
          <View style={styles.passWrapper}>
            <InputPassword
              onChangeText={handlePasswordChange}
              label={t?.pages.login.password}
              errorMessage={loginErrormessage}
              onFocus={focus => setInputsFocused(focus)}
            />
          </View>
          <View style={styles.forgotPasswordWrapper}>
            <InternalLink link={'RecoveryStep1'} text={t?.pages.login['forget-password']} />
          </View>
        </View>
      </ScrollView>

      {windowHeight < 800 && inputsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.registerStep1['continue-button']}
              disabled={!canContinue}
              isLoading={loading}
              onClick={handleLogin}
            />

            <View style={styles.registerLinkWrapper}>
              <Text>{t?.pages.login['dont-have-account']}</Text>
              <InternalLink link={'RegisterStep1'} text={t?.pages.login.register} />
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Login;
