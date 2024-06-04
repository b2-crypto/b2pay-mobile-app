import React, { ReactElement } from 'react';
import ParametrizationProvider from './parametrizationContext';
import ThemeProvider from './themeContext';
import HeaderParametersProvider from './headerParameters';
import { NavigationProvider } from './navigation';

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
