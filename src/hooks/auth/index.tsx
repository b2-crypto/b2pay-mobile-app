import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

import {
  JWTType,
  authContextProps,
  authProvider,
  authState,
  loginConsultSuccess,
  loginState,
  recoveryState,
  registerConsultSuccess,
  registerState,
} from './types';
import { Auth } from './utils';

export const AuthContext = createContext<authContextProps>({
  auth: {},
  setAuth: () => false,
  login: {
    email: '',
    password: '',
  },
  setLogin: () => false,
  register: {
    name: '',
    email: '',
    password: '',
  },
  setRegister: () => false,
  recovery: {
    email: '',
    password: '',
  },
  setRecovery: () => false,
});

const loginInitialState: loginState = {
  email: '',
  password: '',
  loginError: '',
};

const authInitialState: authState = {
  isLogged: false,
  token: '',
  refreshToken: '',
};
const registerInitialState: registerState = {
  name: '',
  email: '',
  password: '',
};

const recoveryInitialState: recoveryState = {
  email: '',
  password: '',
};

const AuthContextProvider: React.FC<authProvider> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [auth, setAuth] = useState<authState>(authInitialState);
  const [login, setLogin] = useState<loginState>(loginInitialState);
  const [register, setRegister] = useState<registerState>(registerInitialState);
  const [recovery, setRecovery] = useState<recoveryState>(recoveryInitialState);

  const authClass = new Auth();

  const LoginUser = async (data: loginState) => {
    setLoading(true);
    try {
      const consult: loginConsultSuccess = await authClass.login(data);
      if (consult.statusCode === 201) {
        setAuth({
          isLogged: true,
          token: consult.data.access_token,
          refreshToken: consult.data.refresh_token,
        });
      } else {
        setLogin({ ...login, loginError: consult.message });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const RegisterUser = async (password: string) => {
    setLoading(true);
    setRegister({ ...register, password });
    try {
      const consult: registerConsultSuccess = await authClass.register(register);
      if (consult.data.email === register.email) {
        await LoginUser({ email: register.email, password });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getTokenInStorage = async () => await AsyncStorage.getItem('token');
  const saveTokenInStorage = async (token: authState) => {
    if ((await getTokenInStorage()) !== JSON.stringify({ token: token.token, refreshToken: token.refreshToken })) {
      await AsyncStorage.setItem('token', JSON.stringify({ token: token.token, refreshToken: token.refreshToken }));
    }
  };

  useEffect(() => {
    try {
      if (auth.token) {
        // Save the token in the storage
        saveTokenInStorage(auth);
        const res: JWTType = authClass.decodeJWT(auth.token);
        // if the token is expired, refresh it
        if (res.exp < Date.now() / 1000 && auth.refreshToken) {
          // refresh token
          authClass.refresh(auth.refreshToken!).then(data => {
            setAuth({
              isLogged: true,
              token: data.access_token,
              refreshToken: data.refresh_token,
            });
          });
        }
        //if the token is not expired, se to state
        else if (res.exp > Date.now() / 1000) {
          setAuth({
            ...auth,
            isLogged: true,
          });
        }
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }, [auth.token, auth.refreshToken]);

  useEffect(() => {
    setLoading(true);
    getTokenInStorage().then(token => {
      if (token) {
        setAuth({
          isLogged: false,
          ...JSON.parse(token),
        });
      }
    });
    setLoading(false);
  }, []);

  const value: authContextProps = {
    auth,
    setAuth,
    login,
    setLogin,
    register,
    setRegister,
    recovery,
    setRecovery,
    LoginUser,
    RegisterUser,
    loading,
    setLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
