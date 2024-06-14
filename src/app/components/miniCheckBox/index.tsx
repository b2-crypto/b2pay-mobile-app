import React, { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';

import { themeContext } from '../../../hooks/themeContext';
import styleSheetFunc from './styles';

export type CheckBoxType = {
  checked: boolean;
  label: string;
  select: () => void;
};

const MiniCheckBox: React.FC<CheckBoxType> = props => {
  const { checked = true, label, select } = props;
  const { theme } = useContext(themeContext);
  const styles = styleSheetFunc();
  return (
    <Pressable onPress={select} style={styles.pressableStyles}>
      <View
        style={[
          {
            backgroundColor: checked ? theme.primary.rose['rose-11'] : theme.secondary.neutral['000'],
            borderWidth: checked ? 2 : 0,
            borderColor: checked ? theme.primary.darkPurple[700] : theme.secondary.neutral['000'],
          },
          styles.wrapper,
        ]}>
        <View style={styles.checkBorder}>
          <View style={[styles.checked, { display: checked ? 'flex' : 'none' }]}></View>
        </View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default MiniCheckBox;
