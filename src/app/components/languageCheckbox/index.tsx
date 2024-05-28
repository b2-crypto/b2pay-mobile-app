import { Pressable, Text, View } from 'react-native';
import { LanguageCheckboxProps } from './types';
import styleSheetFunc from './styles';
import { useContext } from 'react';
import { themeContext } from '../../../hooks/themeContext';

const LanguageCheckBox: React.FC<LanguageCheckboxProps> = props => {
  const { checked = true, language, select } = props;
  const { theme } = useContext(themeContext);
  const styles = styleSheetFunc(theme.primary.darkPurple[700], theme.primary.darkPurple[600]);
  return (
    <Pressable onPress={select}>
      <View
        style={[
          { backgroundColor: checked ? theme.primary.rose['rose-11'] : theme.secondary.neutral['000x000'] },
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
