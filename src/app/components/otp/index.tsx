import { useContext, useRef, useState } from 'react';
import { TextInput, View } from 'react-native';
import { TextInputProps } from 'react-native-paper';

import { themeContext } from '../../../hooks/themeContext';
import stylesOTP from './styles';

type OTPProps = {
  label?: string;
  onChangeText: (text: string) => void;
  onFocus?: (focus: boolean) => void;
  onEndEditing?: () => void;
  errorMessage?: string;
  emailExists?: boolean;
};

const OTP: React.FC<OTPProps> = props => {
  const [isFocused, setIsFocused] = useState(false);
  const [focusedInput, setFocusedInput] = useState<number>(6);
  const [otp, setOtp] = useState<(string | undefined)[]>([undefined, undefined, undefined, undefined, undefined]);

  const styles = stylesOTP();
  const { theme } = useContext(themeContext);
  const { onChangeText, onEndEditing, onFocus } = props;

  const refInput1 = useRef({} as TextInput);
  const refInput2 = useRef({} as TextInput);
  const refInput3 = useRef({} as TextInput);
  const refInput4 = useRef({} as TextInput);
  const refInput5 = useRef({} as TextInput);

  const changeFocus = (ref: number) => {
    switch (ref) {
      case 1:
        refInput1.current?.focus();
        break;
      case 2:
        refInput2.current?.focus();
        break;
      case 3:
        refInput3.current?.focus();
        break;
      case 4:
        refInput4.current?.focus();
        break;
      case 5:
        refInput5.current?.focus();
        break;
      default:
        refInput1.current?.focus();
        break;
    }
  };

  const blurAll = () => {
    refInput1.current?.blur();
    refInput2.current?.blur();
    refInput3.current?.blur();
    refInput4.current?.blur();
    refInput5.current?.blur();
  };

  const handleTextChange = (text: string, position: number) => {
    if (text.length === 5) {
      const newOtp = [text[0], text[1], text[2], text[3], text[4]];
      setOtp(newOtp);
      onChangeText && onChangeText(newOtp.join(''));
      refInput5.current?.blur();
      return;
    }

    const newOtp = [...otp];
    newOtp[position] = text[1] || text[0];
    setOtp(newOtp);
    onChangeText && onChangeText(newOtp.join(''));
    const index = newOtp.indexOf(undefined);
    if (index === -1) blurAll();
    else changeFocus(index + 1);
  };

  const inputProps: TextInputProps = {
    keyboardType: 'numeric',
    placeholderTextColor: theme.primary.darkPurple[700],
    onEndEditing: onEndEditing,
    mode: 'outlined',
    style: styles.Input,
    textColor: theme.primary.darkPurple[700],
    outlineColor: theme.primary.darkPurple[700],
    outlineStyle: [
      styles.outlinedStyle,
      {
        borderTopWidth: isFocused ? 2 : 0,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TextInput
        {...inputProps}
        style={[
          inputProps.style,
          {
            borderWidth: focusedInput === 0 ? 2 : 0,
            backgroundColor:
              focusedInput === 0
                ? theme.secondary.neutral['text-input-focus']
                : theme.secondary.neutral['text-input-default'],
          },
        ]}
        value={otp[0]}
        onChangeText={t => handleTextChange(t, 0)}
        ref={refInput1}
        onFocus={() => {
          setFocusedInput(0);
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setFocusedInput(6);
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
      />
      <TextInput
        {...inputProps}
        style={[
          inputProps.style,
          {
            borderWidth: focusedInput === 1 ? 2 : 0,
            backgroundColor:
              focusedInput === 1
                ? theme.secondary.neutral['text-input-focus']
                : theme.secondary.neutral['text-input-default'],
          },
        ]}
        value={otp[1]}
        onChangeText={t => handleTextChange(t, 1)}
        ref={refInput2}
        onFocus={() => {
          setFocusedInput(1);
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setFocusedInput(6);
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
      />
      <TextInput
        {...inputProps}
        style={[
          inputProps.style,
          {
            borderWidth: focusedInput === 2 ? 2 : 0,
            backgroundColor:
              focusedInput === 2
                ? theme.secondary.neutral['text-input-focus']
                : theme.secondary.neutral['text-input-default'],
          },
        ]}
        value={otp[2]}
        onChangeText={t => handleTextChange(t, 2)}
        ref={refInput3}
        onFocus={() => {
          setFocusedInput(2);
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setFocusedInput(6);
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
      />
      <TextInput
        {...inputProps}
        style={[
          inputProps.style,
          {
            borderWidth: focusedInput === 3 ? 2 : 0,
            backgroundColor:
              focusedInput === 3
                ? theme.secondary.neutral['text-input-focus']
                : theme.secondary.neutral['text-input-default'],
          },
        ]}
        value={otp[3]}
        onChangeText={t => handleTextChange(t, 3)}
        ref={refInput4}
        onFocus={() => {
          setFocusedInput(3);
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setFocusedInput(6);
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
      />
      <TextInput
        {...inputProps}
        style={[
          inputProps.style,
          {
            borderWidth: focusedInput === 4 ? 2 : 0,
            backgroundColor:
              focusedInput === 4
                ? theme.secondary.neutral['text-input-focus']
                : theme.secondary.neutral['text-input-default'],
          },
        ]}
        value={otp[4]}
        onChangeText={t => handleTextChange(t, 4)}
        ref={refInput5}
        onFocus={() => {
          setFocusedInput(4);
          setIsFocused(true);
          onFocus && onFocus(true);
        }}
        onBlur={() => {
          setFocusedInput(6);
          setIsFocused(false);
          onFocus && onFocus(false);
        }}
      />
    </View>
  );
};
export default OTP;
