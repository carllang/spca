/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
import request from 'superagent';

class AuthService {
  getToken() {
    try {
      return localStorage.getItem(token);
    } catch (e) {
      console.log(e.message);
    }
  }

  setToken(token) {
    try {
      return localStorage.setItem('token', token);
    } catch (e) {
      console.log(e.message);
    }
  }

  login(username, password) {
    const { REACT_APP_ENV_BACKEND_URL } = process.env;
    const serverUrl = REACT_APP_ENV_BACKEND_URL;

    return request
      .post(`${serverUrl}/auth/signin`, { username, password })
      .then((res) => {
        if (response.data.accessToken) {
          this.setToken(res.data.accessToken);
        }
      });
  }

  logout() {
    try {
      localStorage.removeItem('token');
    } catch (e) {
      console.log(e.message);
    }
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
}

export default new AuthService();
