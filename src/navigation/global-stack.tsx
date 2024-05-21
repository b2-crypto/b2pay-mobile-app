import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//This have all the pages exported in index pages
import * as pages from '../app/pages';
import { PagesNames } from './pagesNames';
import GlobalContextWrapper from '../hooks';

const Stack = createNativeStackNavigator();

export const GlobalStack: React.FC = () => (
  <GlobalContextWrapper>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={PagesNames.Home} component={pages.HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  </GlobalContextWrapper>
);
