import React from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';

export const pageName = 'Home';
import { parametrizationContext } from '../../hooks/parametrizationContext';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const { t } = React.useContext(parametrizationContext);
  return (
    <SafeAreaView>
      <Text>
        {t?.pages.home.welcome}
        {isDarkMode}
      </Text>
    </SafeAreaView>
  );
}

export default Home;
