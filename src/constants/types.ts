export type backendRoutesTypes = {
  auth: authRoutesType;
};

export type authRoutesType = {
  'sing-in': string;
  'registry-user': string;
  'refresh-token': string;
  'validate-email': string;
  'send-opt': string;
  'validate-opt': string;
};
