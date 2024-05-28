import { View } from 'react-native';
import LanguageCheckBox from '../languageCheckbox';
import styles from './styles';
import { ChangeLanguagePopUpProps, languageList } from './types';
import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { useContext } from 'react';
import { Language } from '../../../hooks/parametrizationContext/types';

const ChangeLanguagePopUp: React.FC<ChangeLanguagePopUpProps> = props => {
  const { show } = props;
  const { t, language: parametrizationLanguage, setLanguage } = useContext(parametrizationContext);
  const languageList = (language: languageList, index: number, checked: boolean) => (
    <LanguageCheckBox
      language={language.label}
      key={'language-list' + index}
      checked={checked}
      select={() => setLanguage && setLanguage(language.value as Language)}></LanguageCheckBox>
  );
  return (
    <View style={[styles.ChangeLanguagePopUp, { display: !show ? 'none' : 'flex' }]}>
      {t?.languages.map((language: languageList, index: number) =>
        languageList(language, index, language.value === parametrizationLanguage),
      )}
    </View>
  );
};

export default ChangeLanguagePopUp;
