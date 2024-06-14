/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
// @ts-nocheck
import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { LogBox } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

import { themeContext } from '../../../hooks/themeContext';
import Icon from '../icon';
import stylesInput from './styles';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export type TextInputProps = {
  label?: string;
  onChangeText: (text: string) => void;
  onFocus?: (focus: boolean) => void;
  onEndEditing?: () => void;
  errorMessage?: string;
  emailExists?: boolean;
};
const Select: React.FC<TextInputProps> = props => {
  const [isFocused, setIsFocused] = useState(false);

  const { label, onChangeText, onEndEditing, onFocus, errorMessage } = props;
  const { theme } = useContext(themeContext);

  const handleTextChange = (text: string) => {
    setValue(text);
    onChangeText && onChangeText(text);
  };

  const styles = stylesInput();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Citizenship ID', value: 'citizenid' },
    { label: 'Foreigner ID', value: 'foreignerid' },
    { label: 'Passport', value: 'passport' },
    { label: 'Identity Card', value: 'nationalid' },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="ID Type"
        style={[styles.Input, { borderWidth: isFocused ? 2 : 0 }, errorMessage ? styles.borderError : {}]}
      />
      {errorMessage && (
        <View style={styles.danger}>
          <View style={styles.wrapper}>
            <Icon name="infoDanger" width={24} height={24} sx={styles.icon} />
            <Text style={styles.dangerText}>{errorMessage}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Select;
