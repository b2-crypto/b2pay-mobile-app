import React, { ReactElement } from 'react';
import ParametrizationProvider from './parametrizationContext';

type HooksWrapperProps = {
  children: React.ReactNode;
};

const GlobalContextWrapper: React.FC<HooksWrapperProps> = ({ children }): ReactElement => {
  return <ParametrizationProvider>{children}</ParametrizationProvider>;
};
export default GlobalContextWrapper;
