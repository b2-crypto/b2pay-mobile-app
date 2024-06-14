import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect } from 'react';
import { StatusBar } from 'react-native';

import Header from '../app/components/header';
import Layout from '../app/elements/Layout';
//This have all the pages exported in index pages
import * as pages from '../app/pages';
import { navigationLayout, pageProps } from '../app/pages/types';
import GlobalContextWrapper from '../hooks';
import { navigationContext } from '../hooks/navigation';
import { themeContext } from '../hooks/themeContext';
import { PagesNames } from './pagesNames';

const Stack = createNativeStackNavigator();

const LayoutRoot = (nav: navigationLayout, Component: React.FC<pageProps>) => {
  const { isDarkMode, theme } = useContext(themeContext);

  const { route, navigation } = nav;

  const { setNavigation, setRoute } = useContext(navigationContext);

  useEffect(() => {
    setNavigation && setNavigation(navigation);
    setRoute && setRoute(route);
  }, [navigation, route]);

  return (
    <Layout navigation={nav.navigation}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={theme.secondary.neutral[100]}
      />
      <Component navigation={nav.navigation} route={nav.route}></Component>
    </Layout>
  );
};

export const GlobalStack: React.FC = () => (
  <GlobalContextWrapper>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }} initialRouteName={PagesNames.Loading}>
        {/* Start Onboarding */}
        <Stack.Screen name={PagesNames.Loading} options={{ headerShadowVisible: false, headerShown: false }}>
          {nav => LayoutRoot(nav, pages.Loading)}
        </Stack.Screen>
        {/* End Onboarding */}

        {/* Start Onboarding */}
        <Stack.Screen name={PagesNames.OnBoarding} options={{ headerShadowVisible: false, headerShown: false }}>
          {nav => LayoutRoot(nav, pages.OnBoarding)}
        </Stack.Screen>
        {/* End Onboarding */}

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

        {/* Profile Creation Step 1 */}
        <Stack.Screen name={PagesNames.ProfileCreationStep1} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.ProfileCreationStep1)}
        </Stack.Screen>
        {/* Profile Creation Step 1 */}

        {/* Profile Creation Step 2 */}
        <Stack.Screen name={PagesNames.ProfileCreationStep2} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.ProfileCreationStep2)}
        </Stack.Screen>
        {/* Profile Creation Step 2 */}

        {/* Profile Creation Step 3 */}
        <Stack.Screen name={PagesNames.ProfileCreationStep3} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.ProfileCreationStep3)}
        </Stack.Screen>
        {/* Profile Creation Step 3 */}
        {/* Profile Creation Step 4 */}
        <Stack.Screen name={PagesNames.ProfileCreationStep4} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.ProfileCreationStep4)}
        </Stack.Screen>
        {/* Profile Creation Step 4 */}

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
          {nav => LayoutRoot(nav, pages.RecoveryStep2)}
        </Stack.Screen>
        {/*  recovery step 2 */}

        {/* recovery step 3 */}
        <Stack.Screen name={PagesNames.RecoveryStep3} options={{ headerShadowVisible: false }}>
          {nav => LayoutRoot(nav, pages.RecoveryStep3)}
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
