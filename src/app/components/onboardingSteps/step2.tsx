import { useContext } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { themeContext } from '../../../hooks/themeContext';
import { illustration2 } from './vectors';

const stylesCreate = () => {
  const { light } = useContext(themeContext);
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
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
    contentWrapper: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '30%',
      width: '100%',
      paddingRight: 0,
    },
    description: {
      fontSize: 28,
      fontFamily: 'Geologica-Light',
      textAlign: 'center',
      width: '100%',
      maxWidth: 282,
      color: light.secondary.neutral[100],
    },
  });
};

const Step2 = () => {
  const { t } = useContext(parametrizationContext);

  const height = Dimensions.get('window').height;

  const dimensionHeightValue = height * 0.75;
  const dimensionWidthValue = dimensionHeightValue / 2.215;

  const styles = stylesCreate();
  return (
    <View style={styles.container}>
      <SvgXml
        xml={illustration2}
        width={dimensionWidthValue}
        height={dimensionHeightValue}
        preserveAspectRatio="xMidYMid meet"
        style={styles.vectorStyle}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.description}>{t?.pages.onBoarding['description-step-2']}</Text>
      </View>
    </View>
  );
};

export default Step2;
