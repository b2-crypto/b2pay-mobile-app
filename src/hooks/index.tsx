import React, { ReactElement } from 'react';
import ParametrizationProvider from './parametrizationContext';
import ThemeProvider from './themeContext';
import HeaderParametersProvider from './headerParameters';

type HooksWrapperProps = {
  children: React.ReactNode;
};

const GlobalContextWrapper: React.FC<HooksWrapperProps> = ({ children }): ReactElement => {
  return (
    <ThemeProvider>
      <ParametrizationProvider>
        <HeaderParametersProvider>{children}</HeaderParametersProvider>
      </ParametrizationProvider>
    </ThemeProvider>
  );
};
export default GlobalContextWrapper;
