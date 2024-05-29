import { View } from 'react-native';
import Icon from '../icon';
import styles from './styles';

export type RegisterStepProps = {
  selected: number;
};
const RegisterStep: React.FC<RegisterStepProps> = props => {
  const { selected = 1 } = props;

  return (
    <View style={styles.wrapper}>
      <Icon
        name={selected === 1 ? 'stepSelected' : 'stepNoSelected'}
        height={16}
        width={selected === 1 ? 40 : 16}
        sx={{ marginRight: 5 }}
      />
      <Icon
        name={selected === 2 ? 'stepSelected' : 'stepNoSelected'}
        height={16}
        width={selected === 2 ? 40 : 16}
        sx={{ marginRight: 5 }}
      />
      <Icon
        name={selected === 3 ? 'stepSelected' : 'stepNoSelected'}
        height={16}
        width={selected === 3 ? 40 : 16}
        sx={{ marginRight: 5 }}
      />
      <Icon
        name={selected === 4 ? 'stepSelected' : 'stepNoSelected'}
        height={16}
        width={selected === 4 ? 40 : 16}
        sx={{ marginRight: 5 }}
      />
    </View>
  );
};

export default RegisterStep;
