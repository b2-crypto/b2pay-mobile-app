import { DimensionValue, StyleSheet } from 'react-native';
import { buttonDefaultStylesProps } from './types';

export const text = () => {
  return StyleSheet.create({});
};

export const buttonDefaultStyles = (props: buttonDefaultStylesProps) => {
  const { heigh, color, fontFamily, textColor, fontSize, borderBackGround, borderColor } = props;
  const heightValues = {
    right: '-18%',
    top: '-10%',
    bottom: '-10%',
    left: '-18%',
    width: 350,
    height: 58,
    borderWidth: borderColor ? 2 : 0,
    fontSize: fontSize || 20,
  };

  switch (heigh) {
    case 'thin':
      heightValues.height = 40;
      heightValues.left = '-17%';
      heightValues.right = '-17%';
      break;

    case 'medium':
      heightValues.width = 100;
      heightValues.left = '-65%';
      heightValues.right = '-65%';
      break;
    case 'small':
      heightValues.width = 100;
      heightValues.height = 40;
      heightValues.left = '-60%';
      heightValues.right = '-60%';

      break;
    case 'extra small':
      heightValues.width = 71;
      heightValues.height = 24;
      heightValues.left = '-110%';
      heightValues.right = '110%';
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
    buttonPrimary: {
      width: heightValues.width,
      height: heightValues.height,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
    },
    buttonBackground: {
      backgroundColor: color,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: heightValues.borderWidth,
      borderTopWidth: heightValues.borderWidth,
      borderTopColor: borderColor,
      borderBottomColor: borderColor,
      borderRightWidth: heightValues.borderWidth,
      borderRightColor: borderColor,
      borderLeftWidth: heightValues.borderWidth,
      borderLeftColor: borderColor,
    },
    borderTopLeft: {
      backgroundColor: borderBackGround,
      width: 100,
      height: '50%',
      position: 'absolute',
      left: heightValues.left as DimensionValue,
      top: heightValues.top as DimensionValue,
      zIndex: 1,
      borderBottomWidth: heightValues.borderWidth,
      borderBottomColor: borderColor,
      transform: [{ rotate: '-45deg' }],
    },
    borderBottomLeft: {
      backgroundColor: borderBackGround,
      borderTopColor: borderColor,
      borderTopWidth: heightValues.borderWidth,
      width: 100,
      height: '50%',
      position: 'absolute',
      left: heightValues.left as DimensionValue,
      bottom: heightValues.bottom as DimensionValue,
      zIndex: 1,
      transform: [{ rotate: '45deg' }],
    },
    borderTopRight: {
      backgroundColor: borderBackGround,
      width: 100,
      height: '50%',
      position: 'absolute',
      right: heightValues.right as DimensionValue,
      top: heightValues.top as DimensionValue,
      zIndex: 1,
      transform: [{ rotate: '45deg' }],
      borderBottomColor: borderColor,
      borderBottomWidth: heightValues.borderWidth,
      borderRightColor: borderColor,
      borderRightWidth: heightValues.borderWidth,
    },
    borderBottomRight: {
      backgroundColor: borderBackGround,
      width: 100,
      height: '50%',
      position: 'absolute',
      right: heightValues.right as DimensionValue,
      bottom: heightValues.bottom as DimensionValue,
      zIndex: 1,
      transform: [{ rotate: '-45deg' }],
      borderTopColor: borderColor,
      borderTopWidth: heightValues.borderWidth,
      borderRightColor: borderColor,
      borderRightWidth: heightValues.borderWidth,
    },
  });
};
