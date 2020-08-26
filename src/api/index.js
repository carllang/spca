/* eslint no-unused-vars: 0 */

function getKennels() {
  return fetch("http://localhost:3000/kennels")
    .then(result => result.json())
    .catch(e => console.log(e));
}
