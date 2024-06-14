import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StatusBar, StatusBarStyle, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { parametrizationContext } from '../../hooks/parametrizationContext';
import { themeContext } from '../../hooks/themeContext';
import { Button } from '../components/button';
import Step1 from '../components/onboardingSteps/step1';
import Step2 from '../components/onboardingSteps/step2';
import Step3 from '../components/onboardingSteps/step3';
import RegisterStep from '../components/registerStep';
import { pageProps } from './types';

const createStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    buttonWrapper: {
      width: '100%',
      height: '20%',
      zIndex: 10,
      position: 'absolute',
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
};

type CarrouselItemProp = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: any;
  index: number;
};

const STYLES = ['default', 'dark-content', 'light-content'] as const;

const OnBoarding: React.FC<pageProps> = ({ navigation }) => {
  const { light, theme } = React.useContext(themeContext);
  const { t } = useContext(parametrizationContext);

  const [step, setStep] = React.useState<number>(1);

  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(STYLES[0]);
  const [statusBarBackground, setStatusBarBackground] = useState<string>(light.primary.darkPurple[700]);

  const isCarousel = React.useRef<Carousel<CarrouselItemProp>>(null);

  const data = [Step1(), Step2(), Step3()];

  const CarouselCardItem = ({ item, index }: CarrouselItemProp) => {
    return <View key={index}>{item}</View>;
  };

  const next = () => {
    isCarousel.current && isCarousel.current.snapToNext();
    setStep(step + 1);
  };

  const navigateToItem = (index: number) => {
    isCarousel.current && isCarousel.current.snapToItem(index - 1);
    setStep(index);
  };

  const SLIDER_WIDTH = Dimensions.get('window').width;

  useEffect(() => {
    setStatusBarStyle(step === 3 ? STYLES[1] : STYLES[2]);
    setStatusBarBackground(step === 3 ? light.secondary.yellow[400] : light.primary.darkPurple[700]);
  }, [step]);

  const renderStatusBar = () => (
    <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarBackground} showHideTransition={'fade'} />
  );

  const handleFinish = () => {
    AsyncStorage.setItem('onboarding', 'true');
    navigation.navigate('InitPage');
  };
  const styles = createStyles();

  return (
    <View style={styles.container}>
      {renderStatusBar()}
      <Carousel
        layout="stack"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={SLIDER_WIDTH}
        inactiveSlideShift={0}
        useScrollView={true}
        vertical={false}
        onSnapToItem={index => setStep(index + 1)}
      />
      <View style={styles.buttonWrapper}>
        <RegisterStep numberOfSteps={3} selected={step} onClick={navigateToItem} />
        {step < 3 && <Button size="small" type="tertiary" text={t?.pages.onBoarding.skip} onClick={next} />}
        {step === 3 && (
          <Button
            size="small"
            type="primary"
            text={t?.pages.onBoarding.done}
            textColor={theme.secondary.yellow[400]}
            onClick={handleFinish}
          />
        )}
      </View>
    </View>
  );
};

export default OnBoarding;
