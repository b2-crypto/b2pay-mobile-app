import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';

import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { themeContext } from '../../../hooks/themeContext';
import Icon from '../icon';
import { vectorStep1 } from './vectors';

const stylesCreate = () => {
  const { light } = useContext(themeContext);

  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: light.primary.darkPurple[700],
    },
    vectorStyle: {
      marginRight: 0,
      zIndex: -1,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    vectorWrapper: {
      width: '100%',
      height: '100%',
      marginRight: 0,
      zIndex: -1,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '50%',
      width: '80%',
      paddingRight: 0,
    },
    title: {
      fontSize: 20,
      fontFamily: 'Geologica-Regular',
      letterSpacing: 0.4,
      textAlign: 'center',
      color: light.secondary.neutral[100],
    },
    description: {
      fontSize: 16,
      fontFamily: 'Geologica-Regular',
      textAlign: 'center',
      width: '100%',
      color: light.secondary.neutral[100],
      paddingTop: 20,
    },
    logoWrapper: {
      width: '80%',
      height: '40%',
      paddingLeft: 20,
    },
  });
};
const Step1 = () => {
  const styles = stylesCreate();
  const { t } = useContext(parametrizationContext);

  return (
    <View style={styles.container}>
      <SvgXml
        xml={vectorStep1}
        width="100%"
        height={'85%'}
        preserveAspectRatio="xMidYMid meet"
        style={styles.vectorStyle}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{t?.pages.onBoarding.welcome}</Text>
        <Animated.View style={styles.logoWrapper}>
          <Icon name="bigLogo" isDark={true} />
        </Animated.View>
        <Text style={styles.description}>{t?.pages.onBoarding['description-step-1']}</Text>
      </View>
    </View>
  );
};

export default Step1;
