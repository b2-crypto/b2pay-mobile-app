import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import InputEmail from '../components/input';
import RegisterStep from '../components/registerStep';
import stylesRecoveryStep from './styles/registerStep2';
import { pageProps } from './types';

const RecoveryStep1: React.FC<pageProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('');

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

  const styles = stylesRecoveryStep();

  const canContinue = emailRegex.test(email);
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.recoveryPasswordStep1.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.recoveryPasswordStep1.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.recoveryPasswordStep1.description}</Text>
          <InputEmail
            label={t?.pages.recoveryPasswordStep1.email}
            onChangeText={setEmail}
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
