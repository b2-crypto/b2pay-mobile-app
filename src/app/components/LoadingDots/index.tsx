import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

import Icon from '../icon';
import stylesCreate from './styles';

type LoadingDotsProps = {
  isSimple?: boolean;
};

const LoadingDots: React.FC<LoadingDotsProps> = ({ isSimple }) => {
  const dotOne = useSharedValue<number>(0);
  const dotTwo = useSharedValue<number>(0);
  const dotTree = useSharedValue<number>(0);

  const simpleDotOne = useSharedValue<number>(2);
  const simpleDotTwo = useSharedValue<number>(2);
  const simpleDotTree = useSharedValue<number>(2);

  useEffect(() => {
    dotOne.value = withRepeat(withTiming(dotOne.value - 10 * -1, { duration: 200 }), -1, true);
    simpleDotOne.value = withRepeat(withTiming(simpleDotOne.value - 4 * -1, { duration: 1000 }), -1, true);

    setTimeout(() => {
      dotTwo.value = withRepeat(withTiming(dotTwo.value - 10 * -1, { duration: 200 }), -1, true);
      simpleDotTwo.value = withRepeat(withTiming(simpleDotTwo.value - 4 * -1, { duration: 1000 }), -1, true);
    }, 500);

    setTimeout(() => {
      dotTree.value = withRepeat(withTiming(dotTree.value - 10 * -1, { duration: 200 }), -1, true);
      simpleDotTree.value = withRepeat(withTiming(simpleDotTree.value - 4 * -1, { duration: 1000 }), -1, true);
    }, 1000);
  }, []);

  const animatedStylesDot1 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: dotOne.value }],
    };
  });
  const animatedStylesDot2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: dotTwo.value }],
    };
  });
  const animatedStylesDot3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: dotTree.value }],
    };
  });

  const simpleDotAnimatedStyles1 = useAnimatedStyle(() => {
    return {
      width: simpleDotOne.value,
      height: simpleDotOne.value,
    };
  });
  const simpleDotAnimatedStyles2 = useAnimatedStyle(() => {
    return {
      width: simpleDotTwo.value,
      height: simpleDotTwo.value,
    };
  });

  const simpleDotAnimatedStyles3 = useAnimatedStyle(() => {
    return {
      width: simpleDotTree.value,
      height: simpleDotTree.value,
    };
  });

  const styles = stylesCreate();

  const simpleDot = (
    <View style={styles.simpleDotsWrapper}>
      <Animated.View style={[styles.dotSimple, simpleDotAnimatedStyles1]}></Animated.View>
      <Animated.View style={[styles.dotSimple, simpleDotAnimatedStyles2]}></Animated.View>
      <Animated.View style={[styles.dotSimple, simpleDotAnimatedStyles3]}></Animated.View>
    </View>
  );
  return isSimple ? (
    simpleDot
  ) : (
    <View style={styles.dotsWrapper}>
      <Animated.View style={[styles.dot, animatedStylesDot1]}>
        <Icon name="loadingDot" width={10} height={12} />
      </Animated.View>
      <Animated.View style={[styles.dot, animatedStylesDot2]}>
        <Icon name="loadingDot" width={10} height={12} />
      </Animated.View>
      <Animated.View style={[styles.dot, animatedStylesDot3]}>
        <Icon name="loadingDot" width={10} height={12} />
      </Animated.View>
    </View>
  );
};
export default LoadingDots;
