import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import { themeContext } from '../../../hooks/themeContext';
import Icon from '../icon';
import InternalLink from '../internalLink';
import stylesInput from './styles';

export type TextInputProps = {
  label?: string;
  onChangeText: (text: string) => void;
  onFocus?: (focus: boolean) => void;
  onEndEditing?: () => void;
  errorMessage?: string;
  emailExists?: boolean;
  showPassword?: boolean;
};
const InputPassword: React.FC<TextInputProps> = props => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { label, onChangeText, onEndEditing, onFocus, errorMessage, emailExists, showPassword = false } = props;
  const { theme } = useContext(themeContext);

  const handleTextChange = (text: string) => {
    setValue(text);
    onChangeText && onChangeText(text);
  };

  const styles = stylesInput();

  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={value}
        secureTextEntry={!showPassword}
        placeholderTextColor={theme.primary.darkPurple['500']}
        onChangeText={text => handleTextChange(text)}
        onFocus={() => {
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
        onEndEditing={onEndEditing}
        mode="flat"
        style={[styles.Input, { borderWidth: isFocused ? 2 : 0 }, errorMessage ? styles.borderError : {}]}
        underlineStyle={styles.underlineStyle}
        contentStyle={{ color: theme.primary.darkPurple['500'] }}
        cursorColor={theme.primary.darkPurple['500']}
        underlineColor={theme.primary.darkPurple['500']}
        textColor={theme.primary.darkPurple['500']}
        activeOutlineColor={theme.primary.darkPurple['500']}
        selectionColor={theme.primary.darkPurple['500']}
        selectionHandleColor={theme.primary.darkPurple['500']}
        underlineColorAndroid={theme.primary.darkPurple['500']}
        activeUnderlineColor={errorMessage ? theme.informative.red : theme.primary.darkPurple['500']}
      />
      {errorMessage && (
        <View style={styles.danger}>
          <View style={styles.wrapper}>
            <Icon name="infoDanger" width={24} height={24} sx={styles.icon} />
            <Text style={styles.dangerText}>{errorMessage}</Text>
          </View>
          {emailExists && (
            <View style={styles.link}>
              <InternalLink link="Home" text="Login" />
              <Text style={styles.text}> or </Text>
              <InternalLink link="Home" text="Reset Password" />
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default InputPassword;
