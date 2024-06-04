import { View, Text, Pressable } from 'react-native';
import Icon from '../icon';
import { useContext, useState } from 'react';
import { parametrizationContext } from '../../../hooks/parametrizationContext';
import stylesCreate from './styles';
import ChangeLanguagePopUp from '../changeLanguageCheckbox';
import { headerParametersContext } from '../../../hooks/headerParameters';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const Header: React.FC<NativeStackHeaderProps> = props => {
  const { navigation } = props;
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const { headerParameters } = useContext(headerParametersContext);
  const { title, showBackButton = false, showConfigButton = false, showLogo = false } = headerParameters;
  const { t } = useContext(parametrizationContext);
  const styles = stylesCreate();

  return (
    <View style={styles.container}>
      <View style={styles.logWrapper}>
        {showLogo && <Icon name={'logo'} height={showBackButton ? 40 : 64} width={136} />}
        {showBackButton && (
          <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
            <View style={styles.backWrapper}>
              <Icon name={'back'} height={24} width={24} />
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
              height={!showPopUp ? 24 : 20}
              sx={{ maxWidth: !showPopUp ? 24 : 20 }}
            />
          </Pressable>
        )}
        <ChangeLanguagePopUp show={showPopUp} close={() => setShowPopUp(false)}></ChangeLanguagePopUp>
      </View>
    </View>
  );
};
export default Header;
