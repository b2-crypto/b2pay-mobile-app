import React, { ReactElement } from 'react';

import HeaderParametersProvider from './headerParameters';
import { NavigationProvider } from './navigation';

import ParametrizationProvider from './parametrizationContext';
import ThemeProvider from './themeContext';

type HooksWrapperProps = {
  children: React.ReactNode;
};

const GlobalContextWrapper: React.FC<HooksWrapperProps> = ({ children }): ReactElement => {
  return (
    <ThemeProvider>
      <ParametrizationProvider>
        <HeaderParametersProvider>
          <NavigationProvider>{children}</NavigationProvider>
        </HeaderParametersProvider>
      </ParametrizationProvider>
    </ThemeProvider>
  );
};
export default GlobalContextWrapper;
