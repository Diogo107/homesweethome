import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: '/api'
});
const doc = async data => {
  new Promise((resolve, reject) => {
    instance
      .post('/doc', data)
      .then(result => {
        resolve(result);
      })
      .catch(reject);
  });
   };
   export { doc };