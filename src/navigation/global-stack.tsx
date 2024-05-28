import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//This have all the pages exported in index pages
import * as pages from '../app/pages';
import { PagesNames } from './pagesNames';
import GlobalContextWrapper from '../hooks';
import Layout from '../app/elements';
import Header from '../app/components/header';

const Stack = createNativeStackNavigator();

const LayoutRoot = (navigation: ReactNavigation.RootParamList, Component: React.FC) => {
  return (
    <Layout navigation={navigation}>
      <Component></Component>
    </Layout>
  );
};

export const GlobalStack: React.FC = () => (
  <GlobalContextWrapper>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }} initialRouteName={PagesNames.InitPage}>
        {/* Start Init Page */}
        <Stack.Screen name={PagesNames.InitPage} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.InitPage)}
        </Stack.Screen>
        {/* End Init Page */}

        {/* Start Home Page */}
        <Stack.Screen name={PagesNames.Home} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.HomePage)}
        </Stack.Screen>
        {/* En Home page*/}
      </Stack.Navigator>
    </NavigationContainer>
  </GlobalContextWrapper>
);
35;
