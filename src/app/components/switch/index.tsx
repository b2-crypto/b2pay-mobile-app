import { useContext } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { themeContext } from '../../../hooks/themeContext';

type SwitchProps = {
  onValueChange: (value: boolean) => void;
};

const stylesCreated = () => {
  return StyleSheet.create({
    wrapper: {
      width: 47,
      height: 24,
      backgroundColor: 'red',
      display: 'flex',
      justifyContent: 'center',
    },
    inner: {
      marginRight: 4,
      marginLeft: 4,
      width: 20,
      height: 20,
      backgroundColor: 'white',
    },
  });
};
const Switch: React.FC<SwitchProps> = ({ onValueChange }) => {
  const styles = stylesCreated();
  const { theme } = useContext(themeContext);
  const isActivated = useSharedValue(false);
  const progress = useSharedValue<number>(0);
  const offset = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [theme.secondary.neutral['500-switch'], theme.primary.rose['500']],
    ),
  }));

  const animateInnerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  const toggle = () => {
    onValueChange && onValueChange(!isActivated.value);
    isActivated.value = !isActivated.value;
    const newOffset = 20 - offset.value;
    progress.value = withTiming(isActivated.value ? 0 : 1, { duration: 100 });
    offset.value = withSpring(newOffset, {
      restDisplacementThreshold: 5,
      restSpeedThreshold: 5,
    });
  };

  return (
    <Pressable onPress={toggle}>
      <Animated.View style={[styles.wrapper, animatedStyle]}>
        <Animated.View style={[styles.inner, animateInnerStyle]}></Animated.View>
      </Animated.View>
    </Pressable>
  );
};

export default Switch;
