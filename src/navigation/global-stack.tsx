import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';

import Header from '../app/components/header';
import Layout from '../app/elements/Layout';
//This have all the pages exported in index pages
import * as pages from '../app/pages';
import { navigationLayout, pageProps } from '../app/pages/types';
import GlobalContextWrapper from '../hooks';
import { navigationContext } from '../hooks/navigation';
import { PagesNames } from './pagesNames';

const Stack = createNativeStackNavigator();

const LayoutRoot = (nav: navigationLayout, Component: React.FC<pageProps>) => {
  const { route, navigation } = nav;

  const { setNavigation, setRoute } = useContext(navigationContext);
  useEffect(() => {
    setNavigation && setNavigation(navigation);
    setRoute && setRoute(route);
  }, [navigation, route]);

  return (
    <Layout navigation={nav.navigation}>
      <Component navigation={nav.navigation} route={nav.route}></Component>
    </Layout>
  );
};

export const GlobalStack: React.FC = () => (
  <GlobalContextWrapper>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }} initialRouteName={PagesNames.RecoveryStep1}>
        {/* Start Init Page */}
        <Stack.Screen name={PagesNames.InitPage} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.InitPage)}
        </Stack.Screen>
        {/* End Init Page */}

        {/* Register Step 1 */}
        <Stack.Screen name={PagesNames.RegisterStep1} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RegisterStep1)}
        </Stack.Screen>
        {/* Register Step 1 */}

        {/* Register Step 2 */}
        <Stack.Screen name={PagesNames.RegisterStep2} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RegisterStep2)}
        </Stack.Screen>
        {/* Register Step 2 */}

        {/* Register Step 3 */}
        <Stack.Screen name={PagesNames.RegisterStep3} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RegisterStep3)}
        </Stack.Screen>
        {/* Register Step 3 */}
        {/* Register Step 4 */}
        <Stack.Screen name={PagesNames.RegisterStep4} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RegisterStep4)}
        </Stack.Screen>
        {/* Register Step 4 */}

        {/* Login */}
        <Stack.Screen name={PagesNames.Login} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.login)}
        </Stack.Screen>
        {/* Login */}

        {/* recovery step 1 */}
        <Stack.Screen name={PagesNames.RecoveryStep1} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RecoveryStep1)}
        </Stack.Screen>
        {/*  recovery step 1 */}

        {/* recovery step 2 */}
        <Stack.Screen name={PagesNames.RecoveryStep2} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.login)}
        </Stack.Screen>
        {/*  recovery step 2 */}

        {/* recovery step 3 */}
        <Stack.Screen name={PagesNames.RecoveryStep3} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.login)}
        </Stack.Screen>
        {/*  recovery step 3 */}

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
