import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

export const pageName = 'Home';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <Text>Welcome {isDarkMode}</Text>
    </SafeAreaView>
  );
}

export default Home;
