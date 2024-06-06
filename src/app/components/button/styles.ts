import { DimensionValue, StyleSheet } from 'react-native';

import { buttonDefaultStylesProps } from './types';

export const text = () => {
  return StyleSheet.create({});
};

export const buttonDefaultStyles = (props: buttonDefaultStylesProps) => {
  const { heigh, fontFamily, textColor, fontSize, borderColor, backGroundColor } = props;
  const heightValues = {
    width: '100%' as DimensionValue,
    height: 58,
    borderWidth: borderColor ? 2 : 0,
    fontSize: fontSize || 20,
  };

  switch (heigh) {
    case 'thin':
      heightValues.height = 40;
      break;
    case 'medium':
      heightValues.width = 100;
      break;
    case 'small':
      heightValues.width = 100;
      heightValues.height = 40;

      break;
    case 'extra small':
      heightValues.width = 71;
      heightValues.height = 24;
      heightValues.fontSize = 14;
    default:
  }

  return StyleSheet.create({
    text: {
      fontFamily: fontFamily,
      textAlign: 'center',
      color: textColor,
      fontSize: heightValues.fontSize,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      width: '100%',
      height: '100%',
    },
    buttonPrimary: {
      width: heightValues.width,
      height: heightValues.height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      flexDirection: 'row',
    },
    backGroundWrapper: {
      width: 16,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      zIndex: -1,
    },
    leftPosition: {
      left: 0,
    },
    rightPosition: {
      right: 0,
      transform: [{ rotate: '180deg' }],
    },
    textWrapper: {
      flex: 1,
      backgroundColor: backGroundColor,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: heightValues.borderWidth,
      borderBottomWidth: heightValues.borderWidth,
      borderColor: borderColor,
    },
  });
};
