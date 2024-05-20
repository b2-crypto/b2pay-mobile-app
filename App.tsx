/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, useColorScheme} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <Text>Welcome {isDarkMode}</Text>
    </SafeAreaView>
  );
}

export default App;
