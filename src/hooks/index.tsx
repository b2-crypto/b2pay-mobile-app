import React, { ReactElement } from 'react';
import ParametrizationProvider from './parametrizationContext';
import ThemeProvider from './themeContext';

type HooksWrapperProps = {
  children: React.ReactNode;
};

const GlobalContextWrapper: React.FC<HooksWrapperProps> = ({ children }): ReactElement => {
  return (
    <ThemeProvider>
      <ParametrizationProvider>{children}</ParametrizationProvider>
    </ThemeProvider>
  );
};
export default GlobalContextWrapper;
