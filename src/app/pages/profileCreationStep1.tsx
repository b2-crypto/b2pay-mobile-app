import React, { useContext, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import CheckBox from '../components/checkBox';
import RegisterStep from '../components/registerStep';
import stylesStep1 from './styles/registerStep1';
import { pageProps } from './types';

export const pageName = 'ProfileCreationStep1';
const ProfileCreationStep1: React.FC<pageProps> = ({ navigation }) => {
  const [selected, setSelected] = React.useState('');

  const { changeHeaderParameters } = useContext(headerParametersContext);
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

  const styles = stylesStep1();
  return (
    <View style={styles.parent}>
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>{t?.pages.profileCreationStep1.title}</Text>
          <Text style={styles.subtitle}>{t?.pages.profileCreationStep1.subtitle}</Text>
          <Text style={styles.description}>{t?.pages.profileCreationStep1.description}</Text>
          <View style={styles.checkboxWrapper}>
            {t?.pages.profileCreationStep1['checkBox-List'].map((item, index) => (
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
          onClick={() => {
            navigation.navigate('ProfileCreationStep2');
          }}
        />
      </View>
      <RegisterStep selected={1} />
    </View>
  );
};

export default ProfileCreationStep1;
