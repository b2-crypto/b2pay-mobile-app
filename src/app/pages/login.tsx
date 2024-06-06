import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import Input from '../components/input';
import InputPassword from '../components/inputPassword';
import InternalLink from '../components/internalLink';
import loginStyles from './styles/login';
import { pageProps } from './types';

type loginData = {
  email: string;
  password: string;
};
const Login: React.FC<pageProps> = ({ navigation }) => {
  const [data, setData] = React.useState<loginData>({ email: '', password: '' });
  const [passwordError, setPasswordError] = React.useState<string | undefined>('');
  const [emailError, setEmailError] = React.useState<string | undefined>('');
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const { t } = useContext(parametrizationContext);

  const styles = loginStyles();

  const handleEmailChange = (value: string) => {
    setData({ ...data, email: value });
  };
  const handleEndEditing = () => {
    if (data.email === '' || data.email === undefined) {
      setEmailError(t?.pages.login['no-email']);
    } else if (!emailRegex.test(data.email)) {
      setEmailError(t?.pages.login['email-invalid']);
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (value: string) => {
    setData({ ...data, password: value });
    if (value === '' || value === undefined) {
      setPasswordError(t?.pages.login['no-password']);
    } else {
      setPasswordError('');
    }
  };

  const canContinue = !emailError && !passwordError && data.email !== '' && data.password !== '';

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
            />
          </View>
          <View style={styles.passWrapper}>
            <InputPassword
              onChangeText={handlePasswordChange}
              label={t?.pages.login.password}
              errorMessage={passwordError}
            />
          </View>
          <View style={styles.forgotPasswordWrapper}>
            <InternalLink link={'RecoveryStep1'} text={t?.pages.login['forget-password']} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          text={t?.pages.registerStep1['continue-button']}
          disabled={!canContinue}
          onClick={() => {
            navigation.navigate('Home');
          }}
        />

        <View style={styles.registerLinkWrapper}>
          <Text>{t?.pages.login['dont-have-account']}</Text>
          <InternalLink link={'RegisterStep1'} text={t?.pages.login.register} />
        </View>
      </View>
    </View>
  );
};

export default Login;
