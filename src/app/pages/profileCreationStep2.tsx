import React, { useContext, useEffect } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import InputEmail from '../components/input';
import Input from '../components/input';
import InternalLink from '../components/internalLink';
import ProfileCreationStep from '../components/profileCreationStep';
import Switch from '../components/switch';
import stylesStep2 from './styles/profileCreationStep2';
import { pageProps, pagesNameType } from './types';
import Select from '../components/select';

const ProfileCreationStep2: React.FC<pageProps> = ({ navigation }) => {
  const [email, setEmail] = React.useState<string>('');
  const [termsAccepted, setTermsAccepted] = React.useState<boolean>(false);
  const [emailExists, setEmailExists] = React.useState<boolean>(false);

  //Control states
  const [error, setError] = React.useState<string | undefined>('');
  const [emailInputIsFocused, setIDType] = React.useState(false);
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

  const styles = stylesStep2();

  const canContinue = emailRegex.test(email) && termsAccepted;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.profileCreationStep2.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.profileCreationStep2.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.profileCreationStep2.description}</Text>
          <View style={styles.containerInputs}>
            <Select
              label={t?.pages.profileCreationStep2.idtype}
              onChangeText={setEmail}
              onFocus={focus => setIDType(focus)}
              /*               errorMessage={error}
               */
            />
            <Input
              label={t?.pages.profileCreationStep2.idnumber}
              onChangeText={setEmail}
              onFocus={focus => setIDType(focus)}
            />
          </View>

          {/*  {emailExists && (
            <View style={styles.link}>
              <InternalLink link="Login" text="Login" />
              <Text style={styles.text}> or </Text>
              <InternalLink link="RecoveryStep1" text="Reset Password" />
            </View>
          )} */}
        </View>
      </ScrollView>
      {windowHeight < 800 && emailInputIsFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.profileCreationStep2['continue-button']}
/*               disabled={!canContinue}
 */              onClick={() => {
                navigation.navigate('ProfileCreationStep3');
              }}
            />
          </View>
          <ProfileCreationStep selected={2} />
        </>
      )}
    </View>
  );
};

export default ProfileCreationStep2;
