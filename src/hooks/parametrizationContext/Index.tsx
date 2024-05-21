import React, { ReactElement, createContext, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';

import { Language, parametrizationContextType, parametrizationProviderProps } from './types';
import Parametrization from './parametrization';
import localParametrizeFiles_ES from './localParametrizeFiles_ES.json';

export const parametrizationContext = createContext<parametrizationContextType>({ t: undefined });

const getDeviceLanguage = (): Language => {
  //Contents the device language
  const deviceLanguage: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier; // Android
  const language: Language = deviceLanguage.split('_')[0] as Language;
  return language;
};

const ParametrizationClass = new Parametrization(getDeviceLanguage());

const ParametrizationProvider: React.FC<parametrizationProviderProps> = ({ children }): ReactElement => {
  const [parametrization, setParametrization] = useState<typeof localParametrizeFiles_ES | undefined>(undefined);

  const generateParametrization = async () => {
    const haveANewParametrization = await ParametrizationClass.checkIfTheVersionChanged();
    if (!haveANewParametrization && (await ParametrizationClass.exists()))
      return setParametrization(await ParametrizationClass.getText());
    // If the version changed, get the new parametrization
    const newParametrization = await ParametrizationClass.getParametrizationFromServer();
    setParametrization(newParametrization);
    return newParametrization;
  };

  // // Find if the parametrization file have a new version
  useEffect(() => {
    generateParametrization();
  }, []);

  const value: parametrizationContextType = {
    t: parametrization,
  };

  return <parametrizationContext.Provider value={value}>{children}</parametrizationContext.Provider>;
};

export default ParametrizationProvider;
