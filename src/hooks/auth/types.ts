export type authContextProps = {
  auth: authState;
  setAuth: (value: authState) => void;
  login?: loginState;
  setLogin: (value: loginState) => void;
  register?: registerState;
  setRegister: (value: registerState) => void;
  LoginUser?: (data: loginState) => Promise<void>;
  loading?: boolean;
  setLoading?: (value: boolean) => void;
};
export type authProvider = {
  children: React.ReactNode;
};
export type authState = {
  isLogged?: boolean;
  token?: string;
  refreshToken?: string;
};
export type loginState = {
  email: string;
  password: string;
  loginError?: string;
};

export type registerState = {
  email: string;
  password: string;
};

export type loginConsultSuccess = {
  statusCode: number;
  message: 'Unauthorized' | 'was successfully';
  data: {
    access_token: string;
    refresh_token: string;
  };
};
export type JWTType = {
  email: string;
  exp: number;
  firstName: string;
  iat: number;
  id: string;
  permissions: string[];
};
