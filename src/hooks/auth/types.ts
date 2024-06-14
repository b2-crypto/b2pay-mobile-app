export type authContextProps = {
  auth: authState;
  setAuth: (value: authState) => void;
  login: loginState;
  setLogin: React.Dispatch<React.SetStateAction<loginState>>;
  register: registerState;
  setRegister: React.Dispatch<React.SetStateAction<registerState>>;
  LoginUser?: (data: loginState) => Promise<void>;
  RegisterUser?: (password: string) => Promise<void>;
  loading?: boolean;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  recovery: recoveryState;
  setRecovery: React.Dispatch<React.SetStateAction<recoveryState>>;
};
export type recoveryState = {
  email: string;
  code?: string;
  password?: string;
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
  name: string;
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

export type registerConsultSuccess = {
  statusCode: number;
  message: string;
  data: {
    email: string;
    name: string;
    slug: string;
    password: string;
    active: true;
    apiKey: string;
    twoFactorSecret: string;
    twoFactorQr: string;
    twoFactorIsActive: boolean;
    authorizations: string[];
    permissions: string[];
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
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
