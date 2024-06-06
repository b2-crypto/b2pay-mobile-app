import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';
import styleSheetFunc from './styles';
import { LanguageCheckboxProps } from './types';

const LanguageCheckBox: React.FC<LanguageCheckboxProps> = props => {
  const { checked = true, language, select } = props;
  const { theme } = useContext(themeContext);
  const styles = styleSheetFunc();
  return (
    <Pressable onPress={select}>
      <View
        style={[
          { backgroundColor: checked ? theme.primary.rose['rose-11'] : theme.secondary.neutral['000'] },
          styles.wrapper,
        ]}>
        <Text style={styles.text}>{language}</Text>
        <View style={styles.checkBorder}>
          <View style={[styles.checked, { display: checked ? 'flex' : 'none' }]}></View>
        </View>
      </View>
    </Pressable>
  );
};

export default LanguageCheckBox;
