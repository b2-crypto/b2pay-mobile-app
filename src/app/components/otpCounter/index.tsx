import { parametrizationContext } from '../../../hooks/parametrizationContext';
import { useContext, useEffect } from 'react';
import Icon from '../icon';
import { StyleSheet, View, Text } from 'react-native';
import { themeContext } from '../../../hooks/themeContext';

const stylesCreate = () => {
  const { theme } = useContext(themeContext);
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: 25,
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 8,
      width: '100%',
    },
    alertGreyGText: {
      fontFamily: 'Geologica-Regular',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.secondary.neutral['600'],
      width: '80%',
      marginLeft: 8,
    },
    counter: {
      fontFamily: 'Geologica-regular',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      color: theme.primary.rose['500'],
    },
    alertRed: {
      fontFamily: 'Geologica-regular',
      fontSize: 13,
      fontStyle: 'normal',
      lineHeight: 20,
      width: '80%',
      marginLeft: 8,
      color: theme.informative.red,
    },
  });
};

type OTPCounterProps = {
  handleFinish?: () => void;
  counter: number;
  setCounter: (counter: number) => void;
  setIsFirstTime: (isFirstTime: boolean) => void;
  isFirstTime: boolean;
};

const OTPCounter: React.FC<OTPCounterProps> = props => {
  const { handleFinish, counter, setCounter, isFirstTime } = props;

  const { t } = useContext(parametrizationContext);
  const styles = stylesCreate();

  useEffect(() => {
    if (counter > 0) {
      const time = setInterval(() => setCounter(counter - 1), 1000);
      return () => clearInterval(time);
    } else if (counter === 0) handleFinish && handleFinish();
  }, [counter]);

  const formatTime = () => {
    return `${counter === 60 ? '01' : '00'}:${counter < 10 ? `0${counter}` : counter === 60 ? '00' : counter}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{formatTime()}</Text>
      <View style={styles.wrapper}>
        <Icon name={counter === 0 ? 'infoDanger' : 'infoGrey'} width={24} height={24} />
        {isFirstTime && counter !== 0 && (
          <Text style={styles.alertGreyGText}>{t?.pages.registerStep3['counter-alert']}</Text>
        )}
        {!isFirstTime && counter !== 0 && (
          <Text style={styles.alertGreyGText}>{t?.pages.registerStep3['counter-alert-2']}</Text>
        )}
        {counter === 0 && <Text style={styles.alertRed}>{t?.pages.registerStep3['counter-error']}</Text>}
      </View>
    </View>
  );
};

export default OTPCounter;
