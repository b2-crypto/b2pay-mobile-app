import { View } from 'react-native';
import LanguageCheckBox from '../languageCheckbox';
import stylesChange from './styles';
import { ChangeLanguagePopUpProps, languageList } from './types';
import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { useContext } from 'react';
import { Language } from '../../../hooks/parametrizationContext/types';
import { themeContext } from '../../../hooks/themeContext';

const ChangeLanguagePopUp: React.FC<ChangeLanguagePopUpProps> = props => {
  const { show } = props;
  const { t, language: parametrizationLanguage, setLanguage } = useContext(parametrizationContext);
  const { theme } = useContext(themeContext);

  const languageList = (language: languageList, index: number, checked: boolean) => (
    <LanguageCheckBox
      language={language.label}
      key={'language-list' + index}
      checked={checked}
      select={() => setLanguage && setLanguage(language.value as Language)}></LanguageCheckBox>
  );

  const styles = stylesChange(theme.secondary.neutral['000']);
  return (
    <View style={[styles.ChangeLanguagePopUp, { display: !show ? 'none' : 'flex' }]}>
      {t?.languages.map((language: languageList, index: number) =>
        languageList(language, index, language.value === parametrizationLanguage),
      )}
    </View>
  );
};

export default ChangeLanguagePopUp;
