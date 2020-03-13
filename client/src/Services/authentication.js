import axios from 'axios';
const cors = require('cors');

const instance = axios.create({
  baseURL: '/api/authentication'
});

const signUp = data => {
  console.log('this is auth', data);
  new Promise((resolve, reject) => {
    instance
      .post('/sign-up', data)
      .then(result => {
        console.log('result');
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });
};

const signIn = data =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-in', data)
      .then(result => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

const signOut = () =>
  new Promise((resolve, reject) => {
    instance
      .post('/sign-out')
      .then(result => {
        resolve();
      })
      .catch(reject);
  });

const loadUserInformation = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/user-information')
      .then(result => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

const editUserInformation = async data => {
  // console.log(data);
  const form = new FormData();
  form.append('name', data.name);
  form.append('email', data.email);
  form.append('picture', data.picture);
  const result = await instance.patch('/user-information', form);
  const user = result.data.user;
  return user;
};

// =>
//   new Promise((resolve, reject) => {
//       .then(result => {
//         const user = result.data.user;
//         resolve(user);
//       })
//       .catch(reject);
//   });

export { signIn, signUp, signOut, loadUserInformation, editUserInformation };
