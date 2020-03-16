import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: '/api'
});

const building = data => {
  console.log('data', data);
  new Promise((resolve, reject) => {
    instance
      .post('/building', data)
      .then(result => {
        console.log('this is client building', result);
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

const list = async () => {
  try {
    const result = await instance.get('/post');
    const posts = result.data.posts;
    return posts;
  } catch (error) {
    throw error;
  }
};
export { list };

const announcement = async data => {
  const form = new FormData();
  form.append('title', data.title);
  form.append('description', data.description);
  form.append('picture', data.picture);
  const result = await instance.post('/annoucement', form);
  return result;
};
export { announcement };

const listOfAnnoucements = async () => {
  try {
    const result = await instance.get('/annoucement');
    const posts = result.data.annoucements;
    return posts;
  } catch (error) {
    throw error;
  }
};
export { listOfAnnoucements };
