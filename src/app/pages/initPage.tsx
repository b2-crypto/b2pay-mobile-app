import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from '../components/icon';
import { Button } from '../components/button';
import styles from './styles/initPage';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { headerParametersContext } from '../../hooks/headerParameters';
import { pageProps } from './types';

const InitPage: React.FC<pageProps> = ({ navigation }) => {
  const { t } = useContext(parametrizationContext);
  const { changeHeaderParameters } = useContext(headerParametersContext);

  //Used when the component is focused
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      changeHeaderParameters({
        showLogo: false,
        showBackButton: false,
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.generalWrapper}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Icon name={'bigLogo'} height={400} sx={{ maxWidth: 325 }} />
        </View>

        <View style={styles.buttonWrapper}>
          <Button text={t?.pages.initPage['login-button']} onClick={() => {}}></Button>
          <View style={styles.registerButtonWrapper}>
            <Text style={styles.registerText}>{t?.pages.initPage['forget-title']}</Text>
            <Button
              text={t?.pages.initPage['register-button']}
              onClick={() => navigation.navigate('RegisterStep1')}
              type="secondary"></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default InitPage;
