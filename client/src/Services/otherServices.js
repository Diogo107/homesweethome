import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: '/api'
});

const building = data => {
  new Promise((resolve, reject) => {
    instance
      .post('/building', data)
      .then(result => {
        resolve();
      })
      .catch(reject);
  });
};


export { building };