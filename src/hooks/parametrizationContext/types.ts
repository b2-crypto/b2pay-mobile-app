import React, { Dispatch, SetStateAction } from 'react';

import localParametrizeFiles_ES from './localParametrizeFiles_ES.json';

export type parametrizationContextType = {
  t?: typeof localParametrizeFiles_ES | undefined;
  language: Language;
  setLanguage?: Dispatch<SetStateAction<Language>>;
  changeOnboardingState?: () => Promise<void>;
  showOnboarding?: boolean;
  isLoading?: boolean;
};

export type parametrizationProviderProps = {
  children: React.ReactNode;
};

export enum typeOfLangues {
  es,
  en,
}

export type Language = 'es' | 'en';

export interface parametrizeText {
  language: Language;
}
