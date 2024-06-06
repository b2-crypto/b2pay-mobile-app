import { useContext } from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native';

import { navigationContext } from '../../../hooks/navigation';
import { pagesNameType } from '../../pages/types';
import stylesCreate from './styles';

export type InternalLinkProps = { link: pagesNameType; text: string | undefined };

export const InternalLink: React.FC<InternalLinkProps> = props => {
  const { navigation } = useContext(navigationContext);
  const { link, text } = props;
  const styles = stylesCreate();
  return (
    <Pressable onPress={() => navigation?.navigate(link)} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default InternalLink;
