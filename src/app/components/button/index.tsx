import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { buttonDefaultStyles } from './styles';
import { ButtonProps, buttonDefaultProps, buttonDefaultStylesProps, handleChangeColor } from './types';
import { themeContext } from '../../../hooks/themeContext';
import { SvgXml } from 'react-native-svg';
import borderDefault from './border/default';
import borderDefaultThin from './border/default-thin';
import borderSecondary from './border/secondary';
import borderSecondaryThin from './border/secondary-thin';
import borderTertiary from './border/tertiary-default';
import borderTertiaryThin from './border/tertiary-thin';

//Contains the button default
const DefaultButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    backGroundColor: disabled ? theme.secondary.neutral[200] : theme.primary.rose[500],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: disabled ? theme.secondary.neutral[500] : theme.secondary.neutral[100],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed)
      return setButtonProps({
        ...buttonProps,
        backGroundColor: theme.primary.rose[500],
      });
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.darkPurple[400],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.rose[700],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.darkPurple[200],
        });
      default:
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.darkPurple[500],
        });
        break;
    }
  };

  const buttonStyles = buttonDefaultStyles(buttonProps);

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme, disabled]);

  return (
    <Pressable
      style={buttonStyles.buttonPrimary}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.leftPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderDefaultThin(buttonProps.backGroundColor)
              : borderDefault(buttonProps.backGroundColor)
          }
        />
      </View>
      <View style={buttonStyles.textWrapper}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.rightPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderDefaultThin(buttonProps.backGroundColor)
              : borderDefault(buttonProps.backGroundColor)
          }
        />
      </View>
    </Pressable>
  );
};

//Contains the button black
const SecondaryButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    backGroundColor: disabled ? theme.secondary.neutral[200] : theme.secondary.neutral[100],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: disabled ? theme.secondary.neutral[500] : theme.primary.rose[600],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
    borderColor: theme.primary.rose[500],
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed) return setButtonProps(initialButtonProps);
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.secondary.neutral['20066%'],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.rose['rose-11'],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.rose['rose-12'],
        });
        break;
    }
  };

  const buttonStyles = buttonDefaultStyles(buttonProps);

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme, disabled]);

  return (
    <Pressable
      style={buttonStyles.buttonPrimary}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.leftPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderSecondaryThin(buttonProps.backGroundColor, buttonProps.borderColor)
              : borderSecondary(buttonProps.backGroundColor, buttonProps.borderColor)
          }
        />
      </View>
      <View style={buttonStyles.textWrapper}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.rightPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderSecondaryThin(buttonProps.backGroundColor, buttonProps.borderColor)
              : borderSecondary(buttonProps.backGroundColor, buttonProps.borderColor)
          }
        />
      </View>
    </Pressable>
  );
};

//Contains the button default
const TertiaryButton: React.FC<buttonDefaultProps> = props => {
  const { text, disabled, onClick, size } = props;
  const { theme, themeFonts } = useContext(themeContext);

  const initialButtonProps: buttonDefaultStylesProps = {
    heigh: size || 'large',
    backGroundColor: theme.secondary.neutral[100],
    fontFamily: themeFonts.fontFamily.TekturExtraBold,
    textColor: disabled ? theme.secondary.neutral[500] : theme.primary.rose[600],
    fontSize: themeFonts.fontSize.mobile.ButtonLarge,
  };

  const [buttonProps, setButtonProps] = useState<buttonDefaultStylesProps>(initialButtonProps);

  const handleChangeColor: handleChangeColor = (type: 'focus' | 'press' | 'hover', pressed) => {
    if (!pressed) return setButtonProps(initialButtonProps);
    switch (type) {
      case 'focus':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.secondary.neutral['20066%'],
        });
        break;

      case 'press':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.rose['rose-11'],
        });
        break;
      case 'hover':
        setButtonProps({
          ...buttonProps,
          backGroundColor: theme.primary.rose['rose-12'],
        });
        break;
    }
  };

  useEffect(() => {
    setButtonProps(initialButtonProps);
  }, [theme]);

  useMemo(() => {
    setTimeout(() => {
      setButtonProps(initialButtonProps);
    }, 500);
  }, [props.disabled]);

  const buttonStyles = buttonDefaultStyles(buttonProps);
  return (
    <Pressable
      style={buttonStyles.buttonPrimary}
      disabled={disabled}
      onPress={onClick}
      onHoverOut={() => handleChangeColor('hover', false)}
      onHoverIn={() => handleChangeColor('hover', true)}
      onPressIn={() => handleChangeColor('press', true)}
      onPressOut={() => handleChangeColor('press', false)}>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.leftPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderTertiaryThin(buttonProps.backGroundColor)
              : borderTertiary(buttonProps.backGroundColor)
          }
        />
      </View>
      <View style={buttonStyles.textWrapper}>
        <Text style={buttonStyles.text}>{text}</Text>
      </View>
      <View style={[buttonStyles.backGroundWrapper, buttonStyles.rightPosition]}>
        <SvgXml
          xml={
            size === 'thin' || size === 'small'
              ? borderTertiaryThin(buttonProps.backGroundColor)
              : borderTertiary(buttonProps.backGroundColor)
          }
        />
      </View>
    </Pressable>
  );
};

export const CustomButton: React.FC<ButtonProps> = props => {
  const { type, onClick, size, text, disabled } = props;
  switch (type) {
    case 'primary':
      return <DefaultButton text={text} onClick={onClick} size={size} disabled={disabled} />;
    case 'secondary':
      return <SecondaryButton text={text} onClick={onClick} size={size} disabled={disabled} />;
    case 'tertiary':
      return <TertiaryButton text={text} onClick={onClick} size={size} disabled={disabled} />;
    default:
      return <DefaultButton text={text} onClick={onClick} size={size} disabled={disabled} />;
  }
};

export { CustomButton as Button };
