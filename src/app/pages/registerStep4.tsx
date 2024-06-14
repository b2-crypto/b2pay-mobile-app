import React, { useContext, useEffect, useState } from 'react';
import { DimensionValue, Dimensions, ScrollView, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { AuthContext } from '../../hooks/auth';
import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { themeContext } from '../../hooks/themeContext';
import { Button } from '../components/button';
import Icon from '../components/icon';
import Input from '../components/inputPassword';
import RegisterStep from '../components/registerStep';
import stylesStep4 from './styles/registerStep4';
import { pageProps } from './types';

const RegisterStep4: React.FC<pageProps> = ({ navigation }) => {
  //Control states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { theme } = useContext(themeContext);
  const { RegisterUser, loading } = useContext(AuthContext);

  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);

  const offset = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => {
    const handleChangeStrongColor = (value: number) => {
      const colors = [theme.informative.red, theme.informative.yellow, theme.informative.green];
      if (value < 40) return colors[0];
      if (value < 90) return colors[1];
      return colors[2];
    };
    return {
      width: (offset.value + '%') as DimensionValue,
      backgroundColor: handleChangeStrongColor(offset.value),
    };
  });

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

  const styles = stylesStep4();

  const onPasswordChange = (text: string) => {
    setPassword(text);
    const setRules = {
      length: text.length >= 8,
      uppercase: /[A-Z]/.test(text),
      lowercase: /[a-z]/.test(text),
      number: /[0-9]/.test(text),
      special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text),
    };
    setPasswordRules(setRules);

    const numberOfValidRules = Object.values(setRules).filter(Boolean).length;
    offset.value = withTiming(numberOfValidRules * 20, { duration: 200 });
  };

  const numberOfValidRules = Object.values(passwordRules).filter(Boolean).length;
  const matchPassword = password === confirmPassword;
  const canRegister = numberOfValidRules === 5 && matchPassword;
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.registerStep4.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep4.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep4.description}</Text>
          <View style={[styles.passwordWrapper, { marginBottom: !isPasswordFocused ? 24 : 0 }]}>
            <Input
              label={t?.pages.registerStep4['password-label']}
              onChangeText={onPasswordChange}
              onFocus={setIsPasswordFocused}
            />
          </View>

          {isPasswordFocused && (
            <>
              <View style={styles.progress}>
                <Animated.View style={[styles.bar, animatedStyles]} />
              </View>
              {numberOfValidRules === 5 && (
                <View style={styles.securePasswordWrapper}>
                  <Icon name={'infoGreen'} width={24} height={24} />
                  <Text style={[styles.securePasswordText, styles.grate]}>
                    {t?.pages.registerStep4['password-secure-3']}
                  </Text>
                </View>
              )}
              {numberOfValidRules > 2 && numberOfValidRules < 5 && (
                <View style={styles.securePasswordWrapper}>
                  <Icon name={'infoYellow'} width={24} height={24} />
                  <Text style={[styles.securePasswordText, styles.medium]}>
                    {t?.pages.registerStep4['password-secure-2']}
                  </Text>
                </View>
              )}
              {numberOfValidRules > 0 && numberOfValidRules <= 2 && (
                <View style={styles.securePasswordWrapper}>
                  <Icon name={'infoDanger'} width={24} height={24} />
                  <Text style={[styles.securePasswordText, styles.weak]}>
                    {t?.pages.registerStep4['password-secure-1']}
                  </Text>
                </View>
              )}
            </>
          )}
          {isPasswordFocused && (
            <View style={styles.rules}>
              <View style={styles.rule}>
                <View style={styles.iconWrapper}>
                  {passwordRules.length && <Icon name="checked" width={16} height={16} />}
                </View>
                <Text style={styles.ruleText}>{t?.pages.registerStep4['password-rule-1']}</Text>
              </View>
              <View style={styles.rule}>
                <View style={styles.iconWrapper}>
                  {passwordRules.uppercase && <Icon name="checked" width={16} height={16} />}
                </View>
                <Text style={styles.ruleText}>{t?.pages.registerStep4['password-rule-2']}</Text>
              </View>
              <View style={styles.rule}>
                <View style={styles.iconWrapper}>
                  {passwordRules.lowercase && <Icon name="checked" width={16} height={16} />}
                </View>
                <Text style={styles.ruleText}>{t?.pages.registerStep4['password-rule-3']}</Text>
              </View>
              <View style={styles.rule}>
                <View style={styles.iconWrapper}>
                  {passwordRules.number && <Icon name="checked" width={16} height={16} />}
                </View>
                <Text style={styles.ruleText}>{t?.pages.registerStep4['password-rule-4']}</Text>
              </View>
              <View style={styles.rule}>
                <View style={styles.iconWrapper}>
                  {passwordRules.special && <Icon name="checked" width={16} height={16} />}
                </View>
                <Text style={styles.ruleText}>{t?.pages.registerStep4['password-rule-5']}</Text>
              </View>
            </View>
          )}

          <Input
            label={t?.pages.registerStep4['confirm-password-label']}
            onChangeText={t => setConfirmPassword(t)}
            onFocus={setIsConfirmPasswordFocused}
          />
          {password && confirmPassword && !matchPassword && (
            <View style={styles.securePasswordWrapper}>
              <Icon name={'infoDanger'} width={24} height={24} />
              <Text style={[styles.securePasswordText, styles.weak]}>
                {t?.pages.registerStep4['password-no-match']}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      {windowHeight < 800 || isPasswordFocused || isConfirmPasswordFocused ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.registerStep4['continue-button']}
              disabled={!canRegister}
              isLoading={loading}
              onClick={() => RegisterUser && RegisterUser(password)}
            />
          </View>

          <RegisterStep selected={4} />
        </>
      )}
    </View>
  );
};

export default RegisterStep4;
