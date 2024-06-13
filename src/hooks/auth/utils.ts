import { jwtDecode } from 'jwt-decode';

import { BACKEND_ROUTES, BACKEND_URL, HEADERS, METHOD } from '../../constants/_backConstants';
import { JWTType, loginState } from './types';

export class Auth {
  baseUrl: string;
  loginUrl: string;
  refreshToken: string;
  constructor() {
    this.baseUrl = BACKEND_URL;
    this.loginUrl = this.baseUrl + BACKEND_ROUTES.auth['sing-in'];
    this.refreshToken = this.baseUrl + BACKEND_ROUTES.auth['refresh-token'];
  }

  async login(data: loginState) {
    return await fetch(this.loginUrl, {
      method: METHOD[1],
      body: JSON.stringify({ email: data.email, password: data.password }),
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }

  async refresh(refresh: string) {
    return await fetch(this.refreshToken, {
      method: METHOD[1],
      body: JSON.stringify({ refresh }),
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }

  decodeJWT(token: string) {
    return jwtDecode(token) as JWTType;
  }
}
