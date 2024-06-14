import { jwtDecode } from 'jwt-decode';

import { validateEmailResponseType } from '../../app/pages/types';
import { BACKEND_ROUTES, BACKEND_URL, HEADERS, METHOD } from '../../constants/_backConstants';
import { JWTType, loginState } from './types';

export class Auth {
  baseUrl: string;
  loginUrl: string;
  refreshToken: string;
  validateEmailUrl: string;
  constructor() {
    this.baseUrl = BACKEND_URL;
    this.loginUrl = this.baseUrl + BACKEND_ROUTES.auth['sing-in'];
    this.refreshToken = this.baseUrl + BACKEND_ROUTES.auth['refresh-token'];
    this.validateEmailUrl = this.baseUrl + BACKEND_ROUTES.auth['validate-email'];
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

  async register(data: loginState) {
    return fetch(this.baseUrl + BACKEND_ROUTES.auth['registry-user'], {
      method: METHOD[1],
      body: JSON.stringify(data),
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }

  //To validate the email in recovery and register
  async validateEmail(email: string): Promise<validateEmailResponseType> {
    const newRoute = this.validateEmailUrl.replace('{emailToVerify}', email);

    return await fetch(newRoute, {
      method: METHOD[0],
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }
  //To send the opt
  async sendOPT(email: string) {
    const newRoute = this.baseUrl + BACKEND_ROUTES.auth['send-opt'].replace('{emailToVerify}', email);
    return await fetch(newRoute, {
      method: METHOD[0],
      headers: HEADERS,
    })
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error:', error);
      });
  }

  //To validate the opt
  async validateOPT(email: string, opt: string) {
    const newRoute =
      this.baseUrl + BACKEND_ROUTES.auth['validate-opt'].replace('{emailToVerify}', email).replace('{otp}', opt);
    return await fetch(newRoute, {
      method: METHOD[0],
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
