import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { AuthContext } from '../../hooks/auth';
import { Auth } from '../../hooks/auth/utils';
import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import InputEmail from '../components/input';
import RegisterStep from '../components/registerStep';
import stylesRecoveryStep from './styles/registerStep2';
import { pageProps, validateEmailResponseType } from './types';

const RecoveryStep1: React.FC<pageProps> = ({ navigation }) => {
  const [loadingValidation, setLoadingValidation] = React.useState<boolean>(false);
  const [emailIsValid, setEmailIsValid] = React.useState<boolean>(false);

  //Control states
  const [error, setError] = React.useState<string | undefined>('');
  const [emailInputIsFocused, setEmailInputIsFocused] = React.useState(false);
  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { recovery, setRecovery } = useContext(AuthContext);

  const { t } = useContext(parametrizationContext);
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
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

    if (recovery?.email === '' || recovery?.email === undefined)
      return setError(t?.pages.recoveryPasswordStep1['no-email']);
    if (!emailRegex.test(recovery?.email)) return setError(t?.pages.recoveryPasswordStep1['email-invalid']);

    authClass
      .validateEmail(recovery?.email)
      .then((response: validateEmailResponseType) => {
        console.log('Response:', response);
        if (response.statusCode === 200) {
          setEmailIsValid(true);
          setError('');
        } else {
          setEmailIsValid(false);
          setError(t?.pages.recoveryPasswordStep1['email-no-exists']);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setLoadingValidation(false);
      });
  };

  const styles = stylesRecoveryStep();

  const canContinue = emailRegex.test(recovery.email) && emailIsValid;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.recoveryPasswordStep1.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.recoveryPasswordStep1.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.recoveryPasswordStep1.description}</Text>
          <InputEmail
            label={t?.pages.recoveryPasswordStep1.email}
            onChangeText={email => setRecovery({ ...recovery, email })}
            onFocus={focus => setEmailInputIsFocused(focus)}
            errorMessage={error}
            onEndEditing={validateEmail}
          />
        </View>
      </ScrollView>
      {windowHeight < 800 && emailInputIsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.recoveryPasswordStep1['continue-button']}
              disabled={!canContinue}
              isLoading={loadingValidation}
              onClick={() => {
                navigation.navigate('RecoveryStep2');
              }}
            />
          </View>
          <RegisterStep selected={1} numberOfSteps={3} />
        </>
      )}
    </View>
  );
};

export default RecoveryStep1;
