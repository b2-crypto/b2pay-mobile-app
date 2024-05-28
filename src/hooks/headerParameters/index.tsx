import { createContext, useState } from 'react';
import { headerParametersContextType, headerParametersProps, headerParametersProviderProps } from './types';

export const headerParametersContext = createContext<headerParametersContextType>({
  headerParameters: {
    showBackButton: true,
    showConfigButton: true,
  },
  setHeaderParameters: () => false,
});

const HeaderParametersProvider: React.FC<headerParametersProviderProps> = ({ children }) => {
  const [headerParameters, setHeaderParameters] = useState<headerParametersProps>({
    showBackButton: true,
    showConfigButton: true,
  });

  const value: headerParametersContextType = {
    headerParameters,
    setHeaderParameters,
  };

  return <headerParametersContext.Provider value={value}>{children}</headerParametersContext.Provider>;
};

export default HeaderParametersProvider;
