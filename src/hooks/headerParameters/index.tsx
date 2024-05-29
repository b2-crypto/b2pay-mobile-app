import { createContext, useState } from 'react';
import { headerParametersContextType, headerParametersProps, headerParametersProviderProps } from './types';

export const headerParametersContext = createContext<headerParametersContextType>({
  headerParameters: {
    showBackButton: false,
    showConfigButton: true,
    showLogo: false,
  },
  setHeaderParameters: () => false,
  changeHeaderParameters: () => false,
});

const HeaderParametersProvider: React.FC<headerParametersProviderProps> = ({ children }) => {
  const [headerParameters, setHeaderParameters] = useState<headerParametersProps>({
    showBackButton: false,
    showConfigButton: true,
  });

  const changeHeaderParameters = (newHeaderParameters: headerParametersProps) => {
    setHeaderParameters({ ...headerParameters, ...newHeaderParameters });
  };

  const value: headerParametersContextType = {
    headerParameters,
    setHeaderParameters,
    changeHeaderParameters,
  };

  return <headerParametersContext.Provider value={value}>{children}</headerParametersContext.Provider>;
};

export default HeaderParametersProvider;
