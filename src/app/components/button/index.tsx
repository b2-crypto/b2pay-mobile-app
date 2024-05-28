import React, { useContext, useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { buttonDefaultStyles } from './styles';
import { ButtonProps, buttonDefaultProps, buttonDefaultStylesProps, handleChangeColor } from './types';
import { themeContext } from '../../../hooks/themeContext';

//Contains the button default
const DefaultButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    color: disabled ? theme.secondary.neutral[500] : theme.primary.rose[500],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: theme.secondary.neutral[100],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
    backgroundColor: theme.secondary.neutral['100'],
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed)
      return setButtonProps({
        ...buttonProps,
        color: theme.primary.rose[500],
        backgroundColor: theme.secondary.neutral['100'],
      });
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.darkPurple[400],
          backgroundColor: theme.secondary.neutral['100'],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.rose[700],
          backgroundColor: theme.secondary.neutral['100'],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.darkPurple[200],
          backgroundColor: theme.secondary.neutral['100'],
        });
      default:
        setButtonProps({
          ...buttonProps,
          color: theme.primary.darkPurple[500],
          backgroundColor: theme.secondary.neutral['100'],
        });
        break;
    }
  };

  const buttonStyles = buttonDefaultStyles(buttonProps);

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme]);

  return (
    <Pressable
      style={buttonStyles.buttonPrimary}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={buttonStyles.borderTopLeft}></View>
      <View style={buttonStyles.borderBottomLeft}></View>
      <View style={buttonStyles.buttonBackground}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={buttonStyles.borderTopRight}></View>
      <View style={buttonStyles.borderBottomRight}></View>
    </Pressable>
  );
};

//Contains the button black
const SecondaryButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);
  const backgroundColor = theme.secondary.neutral['100'];

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    color: disabled ? theme.secondary.neutral[300] : backgroundColor,
    borderColor: disabled ? theme.secondary.neutral[500] : theme.primary.rose[600],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: disabled ? theme.secondary.neutral[500] : theme.primary.rose[600],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
    backgroundColor: backgroundColor,
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed) return setButtonProps(initialButtonProps);
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          color: theme.secondary.neutral['20066%'],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.rose['rose-11'],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.rose['rose-12'],
        });
        break;
    }
  };

  const buttonStyles = buttonDefaultStyles(buttonProps);

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme]);

  return (
    <Pressable
      style={buttonStyles.buttonPrimary}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={buttonStyles.borderTopLeft}></View>
      <View style={buttonStyles.borderBottomLeft}></View>
      <View style={buttonStyles.buttonBackground}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={buttonStyles.borderTopRight}></View>
      <View style={buttonStyles.borderBottomRight}></View>
    </Pressable>
  );
};

//Contains the button default
const TertiaryButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    color: disabled ? theme.secondary.neutral[300] : theme.secondary.neutral['button-background'],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: disabled ? theme.secondary.neutral[500] : theme.primary.rose[600],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
    backgroundColor: theme.secondary.neutral['100'],
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed)
      return setButtonProps({
        ...buttonProps,
        color: theme.secondary.neutral['button-background'],
        textColor: theme.primary.rose[600],
      });
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          color: theme.secondary.neutral['20066%'],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.rose['rose-11'],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          color: theme.primary.rose['rose-12'],
        });
      default:
        setButtonProps({
          ...buttonProps,
          color: theme.primary.darkPurple[500],
        });
        break;
    }
  };

  const buttonStyles = buttonDefaultStyles(buttonProps);

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme]);

  return (
    <Pressable
      style={[
        buttonStyles.buttonPrimary,
        {
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 5,
        },
      ]}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={buttonStyles.borderTopLeft}></View>
      <View style={buttonStyles.borderBottomLeft}></View>
      <View style={buttonStyles.buttonBackground}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={buttonStyles.borderTopRight}></View>
      <View style={buttonStyles.borderBottomRight}></View>
    </Pressable>
  );
};

export const CustomButton: React.FC<ButtonProps> = props => {
  const { type, onClick, size, text } = props;
  switch (type) {
    case 'primary':
      return <DefaultButton text={text} onClick={onClick} size={size} />;
    case 'secondary':
      return <SecondaryButton text={text} onClick={onClick} size={size} />;
    case 'tertiary':
      return <TertiaryButton text={text} onClick={onClick} size={size} />;
    default:
      return <DefaultButton text={text} onClick={onClick} size={size} />;
  }
};

export { CustomButton as Button };
