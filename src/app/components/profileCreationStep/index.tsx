import { View } from 'react-native';

import Icon from '../icon';
import styles from './styles';

export type RegisterStepProps = {
  selected: number;
  numberOfSteps?: number;
};
const ProfileCreationStep: React.FC<RegisterStepProps> = props => {
  const { selected = 1, numberOfSteps = 3 } = props;
  const printIcons = () => {
    const steps = [];
    for (let i = 1; i <= numberOfSteps; i++) {
      steps.push(
        <Icon
          key={i}
          name={selected === i ? 'stepSelected' : 'stepNoSelected'}
          height={16}
          width={selected === i ? 40 : 16}
          sx={{ marginRight: 5 }}
        />,
      );
    }
    return steps;
  };
  return <View style={styles.wrapper}>{printIcons()}</View>;
};

export default ProfileCreationStep;
