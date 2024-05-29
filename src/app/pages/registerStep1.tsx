import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { headerParametersContext } from '../../hooks/headerParameters';
import { pageProps } from './types';
import CheckBox from '../components/checkBox';
import stylesStep1 from './styles/registerStep1';
import { themeContext } from '../../hooks/themeContext';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import RegisterStep from '../components/registerStep';

export const pageName = 'RegisterStep1';
const RegisterStep1: React.FC<pageProps> = ({ navigation }) => {
  const [selected, setSelected] = React.useState('');

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { theme } = useContext(themeContext);
  const { t } = useContext(parametrizationContext);

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

  const styles = stylesStep1(theme.primary.rose[500], theme.primary.darkPurple[500], theme.primary.darkPurple[700]);
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.registerStep1.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.registerStep1.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.registerStep1.description}</Text>
          <View style={styles.checkboxWrapper}>
            {t?.pages.registerStep1['checkBox-List'].map((item, index) => (
              <CheckBox
                key={index}
                checked={selected === item.value}
                label={item.label}
                select={() => setSelected(item.value)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          text={t?.pages.registerStep1['continue-button']}
          disabled={selected === ''}
          // onPress={() => {
          //   navigation.navigate('RegisterStep2');
          // }}
        />
      </View>
      <RegisterStep selected={1} />
    </View>
  );
};

export default RegisterStep1;
