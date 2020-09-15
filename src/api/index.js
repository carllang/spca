/* eslint no-unused-vars: 0 */
import { request } from 'superagent';

function getKennels() {
  return fetch('http://localhost:3000/kennels')
    .then((result) => result.json())
    .catch((e) => console.log(e));
}

function api(method, endpoint) {
  return request(method, endpoint);
}

export default api;
