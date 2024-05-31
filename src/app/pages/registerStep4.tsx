import React, { useContext, useEffect, useState } from 'react';
import { DimensionValue, Dimensions, ScrollView, Text, View } from 'react-native';
import { headerParametersContext } from '../../hooks/headerParameters';
import { pageProps } from './types';
import stylesStep4 from './styles/registerStep4';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import RegisterStep from '../components/registerStep';
import Input from '../components/inputPassword';
import Icon from '../components/icon';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { themeContext } from '../../hooks/themeContext';

const RegisterStep4: React.FC<pageProps> = ({ navigation }) => {
  //Control states
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { theme } = useContext(themeContext);

  const [passwordRules, setPasswordRules] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);

  const offset = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    width: (offset.value + '%') as DimensionValue,
    backgroundColor: interpolateColor(
      offset.value,
      [0, 40, 100],
      [theme.informative.red, theme.informative.yellow, theme.informative.green],
    ),
  }));

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
  console.log(password, confirmPassword, canRegister);
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.registerStep4.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep4.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep4.description}</Text>
          <View style={styles.passwordWrapper}>
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

          <Input label={t?.pages.registerStep4['confirm-password-label']} onChangeText={t => setConfirmPassword(t)} />
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
      {windowHeight < 800 && false ? (
        <></>
      ) : (
        <>
          <View style={styles.buttonWrapper}>
            <Button
              text={t?.pages.registerStep4['continue-button']}
              disabled={!canRegister}
              // onPress={() => {
              //   navigation.navigate('RegisterStep4');
              // }}
            />
          </View>

          <RegisterStep selected={4} />
        </>
      )}
    </View>
  );
};

export default RegisterStep4;
