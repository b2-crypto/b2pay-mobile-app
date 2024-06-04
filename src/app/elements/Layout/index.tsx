import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { FocusAwareStatusBarProps, LayoutProps } from './types';
import createStyles from './styles';
import { themeContext } from '../../../hooks/themeContext';
import { useContext } from 'react';

const FocusAwareStatusBar = (props: FocusAwareStatusBarProps) => {
  const { barStyle, backgroundColor } = props;
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} /> : null;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useContext(themeContext);
  const inserts = useSafeAreaInsets();
  const styles = createStyles(theme.secondary.neutral[100], inserts);
  return (
    <SafeAreaView style={styles.container}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor={theme.secondary.neutral['100']} />
      {children}
    </SafeAreaView>
  );
};
export default Layout;
