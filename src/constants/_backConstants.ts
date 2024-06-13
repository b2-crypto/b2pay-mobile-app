import { backendRoutesTypes } from './types';

export const BACKEND_URL: string = 'https://stage.b2fintech.com';
export const BACKEND_ROUTES: backendRoutesTypes = {
  auth: {
    'sing-in': '/auth/sign-in',
    'refresh-token': '/auth/refresh-token',
  },
};
export const API_NAME: string = 'b2crypto-key';
export const API_VALUE: string = '$2b$10$AFwQ00do4OJVuW9Lm/Di7eeZ3lpIYh7pw7YHNm3jBy0h7yKsVVd8e';
export const CONTENT_TYPE: string = 'application/json';
export const HEADERS = {
  'Content-Type': CONTENT_TYPE,
  'apiKey-name': API_NAME,
  'apiKey-value': API_VALUE,
};

export const METHOD = ['GET', 'POST', 'PUT', 'DELETE'];
export const ALWAYS_PARAMETRIZE_TEXT_VERSION: string = '0';
export const ALWAYS_PARAMETRIZE_TEXT_VERSION_ON_SERVER: string = '0.0.2';
