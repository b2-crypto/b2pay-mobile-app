import { View, Text, Pressable } from 'react-native';
import Icon from '../icon';
import { useContext, useState } from 'react';
import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { NavigationProp, NavigationState } from '@react-navigation/native';
import styles from './styles';
import ChangeLanguagePopUp from '../changeLanguageCheckbox';

type HeaderProps = {
  title: string;
  showBackButton?: boolean;
  showConfigButton?: boolean;
  onBackPress?: () => void;
  navigation: NavigationProp<NavigationState>;
};

const Header: React.FC<HeaderProps> = props => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const { title, onBackPress, showBackButton = true, showConfigButton = true, navigation } = props;
  const { t } = useContext(parametrizationContext);

  return (
    <View style={styles.container}>
      <View style={styles.logWrapper}>
        <Icon name={'logo'} height={showBackButton ? 40 : 64} width={136} />
        {showBackButton && (
          <Pressable onPress={onBackPress ? onBackPress : navigation.goBack}>
            <View style={styles.backWrapper}>
              <Icon name={'back'} height={24} sx={{ maxWidth: 24 }} />
              <Text style={styles.backText}>{t?.header.backButton}</Text>
            </View>
          </Pressable>
        )}
      </View>
      <View style={styles.titleWrapper}>{title && <Text style={styles.titleText}>{title}</Text>}</View>

      <View style={styles.iconsSideWrapper}>
        {showConfigButton && (
          <Pressable style={{ height: 24, width: 24 }} onPress={() => setShowPopUp(!showPopUp)}>
            <Icon
              name={!showPopUp ? 'config' : 'expandLess'}
              height={!showPopUp ? 24 : 15}
              sx={{ maxWidth: !showPopUp ? 24 : 15 }}
            />
          </Pressable>
        )}
        <ChangeLanguagePopUp show={showPopUp}></ChangeLanguagePopUp>
      </View>
    </View>
  );
};
export default Header;
