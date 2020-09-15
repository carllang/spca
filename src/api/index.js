/* eslint no-unused-vars: 0 */
import { request } from 'superagent';

const { API_VERSION, API_SERVER, BACKEND_PORT } = process.env;

const serverUrl = `${API_SERVER}:${BACKEND_PORT}${API_VERSION}`;

function getKennels() {
  return fetch('http://localhost:3000/kennels')
    .then((result) => result.json())
    .catch((e) => console.log(e));
}

function api(method, endpoint) {
  return request(method, endpoint);
}

function authApi() {
  return request.post(`${serverUrl}/auth/signin`);
}

export default api;
