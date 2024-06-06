import React, { ReactElement, createContext, useEffect, useState } from 'react';
import { NativeModules, Platform } from 'react-native';

import localParametrizeFiles_ES from './localParametrizeFiles_ES.json';
import Parametrization from './parametrization';
import { Language, parametrizationContextType, parametrizationProviderProps } from './types';

export const parametrizationContext = createContext<parametrizationContextType>({ t: undefined, language: 'es' });

const getDeviceLanguage = (): Language => {
  //Contents the device language
  const deviceLanguage: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier; // Android
  const language: Language = deviceLanguage.split('_')[0] as Language;
  return language;
};

const ParametrizationProvider: React.FC<parametrizationProviderProps> = ({ children }): ReactElement => {
  const [parametrization, setParametrization] = useState<typeof localParametrizeFiles_ES | undefined>(undefined);
  const [language, setLanguage] = useState<Language>(getDeviceLanguage());

  const generateParametrization = async () => {
    const ParametrizationClass = new Parametrization(language);
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
  }, [language]);

  const value: parametrizationContextType = {
    t: parametrization,
    language,
    setLanguage,
  };

  return <parametrizationContext.Provider value={value}>{children}</parametrizationContext.Provider>;
};

export default ParametrizationProvider;
