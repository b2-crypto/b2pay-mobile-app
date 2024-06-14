import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { headerParametersContext } from '../../hooks/headerParameters';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { Button } from '../components/button';
import CheckBox from '../components/checkBox';
import Input from '../components/input';
import MiniCheckBox from '../components/miniCheckBox';
import RegisterStep from '../components/registerStep';
import stylesStep1 from './styles/profileCreationStep1';
import { pageProps } from './types';
import MiniInput from '../components/miniInput';

export const pageName = 'ProfileCreationStep1';
const ProfileCreationStep1: React.FC<pageProps> = ({ navigation }) => {
  const [selected, setSelected] = React.useState('');

  const { changeHeaderParameters } = useContext(headerParametersContext);
  const { t } = useContext(parametrizationContext);

  //Used when the component is focused

  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);
  const [isNationalityFocused, setIsNationalityFocused] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');

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
            <Input
              label={t?.pages.profileCreationStep1['firstname']}
              onChangeText={t => setFirstName(t)}
              onFocus={setIsFirstNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep1['lastname']}
              onChangeText={t => setLastName(t)}
              onFocus={setIsLastNameFocused}
            />
            <Input
              label={t?.pages.profileCreationStep1['nationality']}
              onChangeText={t => setNationality(t)}
              onFocus={setIsNationalityFocused}
            />
          </View>
          <Text style={styles.description}>{t?.pages.profileCreationStep1['birthdate']}</Text>
          <View style={styles.birthdateContainer}>

            <MiniInput
              label={t?.pages.profileCreationStep1['dd']}
              onChangeText={t => setNationality(t)}
              onFocus={setIsNationalityFocused}
            />
             <MiniInput
              label={t?.pages.profileCreationStep1['mm']}
              onChangeText={t => setNationality(t)}
              onFocus={setIsNationalityFocused}
            />
             <MiniInput
              label={t?.pages.profileCreationStep1['yyyy']}
              onChangeText={t => setNationality(t)}
              onFocus={setIsNationalityFocused}
            />
          </View>
          <Text style={styles.description}>{t?.pages.profileCreationStep1['gender']}</Text>
          <View style={styles.checkboxWrapperGender}>
          <View style={styles.checkboxWrapperGenderFirstRow}>
  {t?.pages.profileCreationStep1['checkBox-List-gender'].slice(0, 2).map((item, index) => (
    <MiniCheckBox
      key={index}
      checked={selected === item.value}
      label={item.label}
      select={() => setSelected(item.value)}
    />
  ))}
</View>
<View>
  {t?.pages.profileCreationStep1['checkBox-List-gender'].slice(2, 3).map((item, index) => (
    <CheckBox
      key={index}
      checked={selected === item.value}
      label={item.label}
      select={() => setSelected(item.value)}
    />
  ))}
</View>

          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          text={t?.pages.profileCreationStep1['continue-button']}
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
