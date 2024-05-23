import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export const pageName = 'Home';
import { parametrizationContext } from '../../hooks/parametrizationContext';
import { themeContext } from '../../hooks/themeContext';

function Home(): React.JSX.Element {
  const { t } = React.useContext(parametrizationContext);
  const { theme } = React.useContext(themeContext);
  return (
    <SafeAreaView>
      <Text>
        {t?.pages.home.welcome}
        {theme.primary.darkPurple['100']}
      </Text>
    </SafeAreaView>
  );
}

export default Home;
