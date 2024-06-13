import { Pressable, View } from 'react-native';

import Icon from '../icon';
import styles from './styles';

export type RegisterStepProps = {
  selected: number;
  numberOfSteps?: number;
  onClick?: (i: number) => void;
};
const RegisterStep: React.FC<RegisterStepProps> = props => {
  const { selected = 1, numberOfSteps = 4, onClick } = props;
  const printIcons = () => {
    const steps = [];
    for (let i = 1; i <= numberOfSteps; i++) {
      steps.push(
        <Pressable key={'step' + i} onPress={() => onClick && onClick(i)}>
          <Icon
            name={selected === i ? 'stepSelected' : 'stepNoSelected'}
            height={16}
            width={selected === i ? 40 : 16}
            sx={{ marginRight: 5 }}
          />
        </Pressable>,
      );
    }
    return steps;
  };
  return <View style={styles.wrapper}>{printIcons()}</View>;
};

export default RegisterStep;
