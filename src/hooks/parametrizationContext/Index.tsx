import React, {ReactElement, createContext} from 'react';
import {
  parametrizationContextType,
  parametrizationProviderProps,
} from './types';

const parametrizationContext = createContext<
  parametrizationContextType | undefined
>(undefined);

const ParametrizationProvider: React.FC<parametrizationProviderProps> = ({
  children,
}): ReactElement => {
  const getText = () => {
    return 'Hello World';
  };
  return (
    <parametrizationContext.Provider value={{getText}}>
      {children}
    </parametrizationContext.Provider>
  );
};

export default ParametrizationProvider;
