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



const post = async data => {
 
  const form = new FormData();
  form.append('title', data.title);
  form.append('description', data.description);
  form.append('picture', data.picture);
  const result = await instance.post('/post', form);
  return result;
};
export { post };