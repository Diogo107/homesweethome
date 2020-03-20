import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: '/api/authentication'
});

const signUp = data => {
  return new Promise((resolve, reject) => {
    instance
      .post('/sign-up', data)
      .then(result => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });
};

const signIn = data => {
  return new Promise((resolve, reject) => {
    instance
      .post('/sign-in', data)
      .then(result => {
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });
};

const signOut = () => {
  return new Promise((resolve, reject) => {
    instance
      .post('/sign-out')
      .then(result => {
        resolve();
      })
      .catch(reject);
  });
};

const loadUserInformation = () =>
  new Promise((resolve, reject) => {
    instance
      .get('/user-information')
      .then(result => {
        //this is to know if I got here.....
        const user = result.data.user;
        resolve(user);
      })
      .catch(reject);
  });

const editUserInformation = async data => {
  // console.log(data);
  const form = new FormData();
  form.append('buildingId', data.buildingId )
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
const updatePaymentStatus = async data => {
  
  const form = new FormData();
  form.append('paymentMethods', data )
  const result = await instance.patch('/user-information', form);
  const user = result.data.user;
  return user;
};
export { signIn, signUp, signOut, loadUserInformation, editUserInformation, updatePaymentStatus };
