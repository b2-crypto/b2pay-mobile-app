export type backendRoutesTypes = {
  auth: authRoutesType;
};

export type authRoutesType = {
  'sing-in': string;
  'refresh-token': string;
};
