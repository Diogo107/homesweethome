import axios from 'axios';
//const cors = require('cors');

const instance = axios.create({
  baseURL: '/api'
});


const building = async data => {
  console.log('data', data);
  const form = new FormData();
  form.append('name', data.name);
  form.append('address', data.address);
  form.append('numberOfFloors', data.numberOfFloors);
  form.append('admin', data.admin);
  form.append('numberOfApartments', data.numberOfApartments);
  form.append('picture', data.picture);
  const result = await instance.post('/building', form);
  return result;
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

const doc = async data => {
  const form = new FormData();
  form.append('title', data.title);
  form.append('description', data.description);
  form.append('doc', data.doc);
  const result = await instance.post('/doc', form);
  return result;
};
export { doc };

const listOfdocs = async () => {
  try {
    const result = await instance.get('/doc');
    const posts = result.data.doc;
    return posts;
  } catch (error) {
    throw error;
  }
};
export { listOfdocs };

const services = data => {
  new Promise((resolve, reject) => {
    instance
      .post('/services', data)
      .then(result => {
        resolve(result);
      })
      .catch(reject);
  });
};
export { services };

const listOfservices = async () => {
  try {
    const result = await instance.get('/services');
    const services = result.data.services;
    return services;
  } catch (error) {
    throw error;
  }
};
export { listOfservices };

const calendar = data => {
  return new Promise((resolve, reject) => {
    instance
      .post('/calendar', data)
      .then(result => {
        resolve(result);
      })
      .catch(reject);
  });
};
export { calendar };

const calendarDates = async () => {
  try {
    const result = await instance.get('/calendar');

    const calendarDates = result.data.calendar;
    return calendarDates;
  } catch (error) {
    throw error;
  }
};
export { calendarDates };

const getBuilding = async id => {
  try {
    console.log('on client', id);
    const building = await instance.post('/building', id);

    return building;
  } catch (error) {
    throw error;
  }
};
export { getBuilding };
